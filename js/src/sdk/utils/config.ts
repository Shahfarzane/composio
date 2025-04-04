import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { LOCAL_CACHE_DIRECTORY_NAME, USER_DATA_FILE_NAME, DEFAULT_BASE_URL } from './constants';

import { getEnvVariable } from "../../utils/shared";
import { client as axiosClient } from "../client/services.gen";
import apiClient from "../client/client";
import { AxiosInstance } from 'axios';
import logger from '../../utils/logger';

declare module 'axios' {
    export interface InternalAxiosRequestConfig {
        metadata?: {
            startTime?: number;
        };
    }
}

// File path helpers
export const userDataPath = () => path.join(os.homedir(), LOCAL_CACHE_DIRECTORY_NAME, USER_DATA_FILE_NAME);
export const getUserDataJson = () => {
    try {
        const data = fs.readFileSync(userDataPath(), 'utf8');
        return JSON.parse(data);
    } catch (error: any) {
        return {};
    }
}

// Axios configuration
export const setAxiosClientConfig = (axiosClientInstance: AxiosInstance) => {
    axiosClientInstance.interceptors.request.use((request) => {
        const body = request.data ? JSON.stringify(request.data) : '';
        logger.debug(`API Req [${request.method?.toUpperCase()}] ${request.url}`, {
            ...(body && { body })
        });
        request.metadata = { startTime: Date.now() };
        return request;
    });

    axiosClientInstance.interceptors.response.use(
        (response) => {
            const method = response.config.method?.toUpperCase();
            const responseSize = Math.round(JSON.stringify(response.data).length / 1024);
            const requestStartTime = response.config.metadata?.startTime;
            const responseTime = requestStartTime ? Date.now() - requestStartTime : 0;
            const responseData = response.data ? JSON.stringify(response.data) : '';
            const status = response.status;

            logger.debug(`API Res [${method}] ${response.config.url} - ${status} - ${responseSize} KB ${responseTime}ms`, {
                ...(responseData && { response: JSON.parse(responseData) })
            });
            return response;
        },
        (error) => {
            const requestStartTime = error.config?.metadata?.startTime;
            const responseTime = requestStartTime ? Date.now() - requestStartTime : 0;
            const status = error.response?.status || 'Unknown';
            logger.debug(`API Error [${status}] ${error.config?.method?.toUpperCase()} ${error.config?.url} - ${status} - ${responseTime}ms`, {
                headers: error.response?.headers,
                data: error.response?.data,
                error: error.message,
                responseTime
            });
            return Promise.reject(error);
        }
    );
}

// Client configuration functions
export function getSDKConfig(baseUrl?: string, apiKey?: string) {
    const userData = getUserDataJson();
    const { api_key: apiKeyFromUserConfig, base_url: baseURLFromUserConfig } = userData;

    const baseURLParsed = baseUrl || getEnvVariable("COMPOSIO_BASE_URL") || baseURLFromUserConfig || DEFAULT_BASE_URL;
    const apiKeyParsed = apiKey || getEnvVariable("COMPOSIO_API_KEY") || apiKeyFromUserConfig || '';

    return { baseURL: baseURLParsed, apiKey: apiKeyParsed };
}

// Get the API client
export function getOpenAPIClient(baseUrl?: string, apiKey?: string) {
    const { baseURL, apiKey: apiKeyParsed } = getSDKConfig(baseUrl, apiKey);
    
    axiosClient.setConfig({
        baseURL,
        headers: {
            'X-API-KEY': apiKeyParsed,
            'X-SOURCE': 'js_sdk',
            'X-RUNTIME': 'js_sdk'
        },
        throwOnError: true
    });

    setAxiosClientConfig(axiosClient.instance);
    return apiClient;
}


