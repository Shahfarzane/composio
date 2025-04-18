// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { IdentifyClientData, IdentifyClientError, IdentifyClientResponse, GetUserInfoError, GetUserInfoResponse, AddProjectData, AddProjectError, AddProjectResponse, DeleteProjectData, DeleteProjectError, DeleteProjectResponse, GetProjectsError, GetProjectsResponse, GenerateApiKeyData, GenerateApiKeyError, GenerateApiKeyResponse, ListApiKeysError, ListApiKeysResponse, DeleteApiKeyData, DeleteApiKeyError, DeleteApiKeyResponse, GetAppsData, GetAppsError, GetAppsResponse, GetOpenApiSpecsError, GetOpenApiSpecsResponse, DeleteOpenApiSpecToolData, DeleteOpenApiSpecToolError, DeleteOpenApiSpecToolResponse, AppControllerSendEmailToClientData, AppControllerSendEmailToClientError, AppControllerSendEmailToClientResponse, GetOpenApiSpecStatusData, GetOpenApiSpecStatusError, GetOpenApiSpecStatusResponse, GetAppData, GetAppError, GetAppResponse, CreateConnectorData, CreateConnectorError, CreateConnectorResponse, ListAllConnectorsError, ListAllConnectorsResponse, GetConnectorInfoData, GetConnectorInfoError, GetConnectorInfoResponse, ModifyConnectorData, ModifyConnectorError, ModifyConnectorResponse, DeleteConnectorData, DeleteConnectorError, DeleteConnectorResponse, GetConnectionsData, GetConnectionsError, GetConnectionsResponse, InitiateConnectionData, InitiateConnectionError, InitiateConnectionResponse2, UpdateConnectionDataData, UpdateConnectionDataError, UpdateConnectionDataResponse, GetConnectionData, GetConnectionError, GetConnectionResponse, DeleteConnectionData, DeleteConnectionError, DeleteConnectionResponse, GetConnectionInfoData, GetConnectionInfoError, GetConnectionInfoResponse, DisableConnectionData, DisableConnectionError, DisableConnectionResponse, EnableConnectionData, EnableConnectionError, EnableConnectionResponse, ListTriggersData, ListTriggersError, ListTriggersResponse, EnableTriggerData, EnableTriggerError, EnableTriggerResponse, GetActiveTriggersData, GetActiveTriggersError, GetActiveTriggersResponse, SwitchTriggerInstanceStatusData, SwitchTriggerInstanceStatusError, SwitchTriggerInstanceStatusResponse, DisableTriggerData, DisableTriggerError, DisableTriggerResponse, DeleteTriggerData, DeleteTriggerError, DeleteTriggerResponse, SetCallbackUrlData, SetCallbackUrlError, SetCallbackUrlResponse, GetWebhookUrlError, GetWebhookUrlResponse, GetTriggerLogsData, GetTriggerLogsError, GetTriggerLogsResponse, GetTriggerInfoV2Data, GetTriggerInfoV2Error, GetTriggerInfoV2Response, GetSentryDnsError, GetSentryDnsResponse, ClearCacheData, ClearCacheError, ClearCacheResponse, GenerateCliSessionError, GenerateCliSessionResponse, GetCliCodeData, GetCliCodeError, GetCliCodeResponse, VerifyCliCodeData, VerifyCliCodeError, VerifyCliCodeResponse, GetLogsData, GetLogsError, GetLogsResponse, PostLogsData, PostLogsError, PostLogsResponse, ListActionsV2Data, ListActionsV2Error, ListActionsV2Response, ListActionsMinimalV2Data, ListActionsMinimalV2Error, ListActionsMinimalV2Response, ExecuteActionV2Data, ExecuteActionV2Error, ExecuteActionV2Response, GetActionInputsV2Data, GetActionInputsV2Error, GetActionInputsV2Response, GetActionV2Data, GetActionV2Error, GetActionV2Response, ExecuteActionProxyV2Data, ExecuteActionProxyV2Error, ExecuteActionProxyV2Response, AdvancedUseCaseSearchData, AdvancedUseCaseSearchError, AdvancedUseCaseSearchResponse2, GetAnalyticsData, GetAnalyticsError, GetAnalyticsResponse, GetTopEntitiesData, GetTopEntitiesError, GetTopEntitiesResponse, UpdateWebhookData, UpdateWebhookError, UpdateWebhookResponse } from './types.gen';

export const client = createClient(createConfig());

export class AuthService {
    /**
     * Identify client
     */
    public static identifyClient<ThrowOnError extends boolean = false>(options?: Options<IdentifyClientData, ThrowOnError>) {
        return (options?.client ?? client).post<IdentifyClientResponse, IdentifyClientError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/identify'
        });
    }
    
    /**
     * Get user info
     * Get client info
     */
    public static getUserInfo<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetUserInfoResponse, GetUserInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/client_info'
        });
    }
    
    /**
     * Add project
     */
    public static addProject<ThrowOnError extends boolean = false>(options?: Options<AddProjectData, ThrowOnError>) {
        return (options?.client ?? client).post<AddProjectResponse, AddProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/project/add'
        });
    }
    
    /**
     * Delete project
     */
    public static deleteProject<ThrowOnError extends boolean = false>(options: Options<DeleteProjectData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteProjectResponse, DeleteProjectError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/project/delete/{projectId}'
        });
    }
    
    /**
     * Get projects
     */
    public static getProjects<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetProjectsResponse, GetProjectsError, ThrowOnError>({
            ...options,
            url: '/api/v1/client/auth/projects'
        });
    }
    
}

export class ApiKeysService {
    /**
     * Generate api key
     */
    public static generateApiKey<ThrowOnError extends boolean = false>(options: Options<GenerateApiKeyData, ThrowOnError>) {
        return (options?.client ?? client).post<GenerateApiKeyResponse, GenerateApiKeyError, ThrowOnError>({
            ...options,
            url: '/api/v1/api_keys'
        });
    }
    
    /**
     * List api keys
     */
    public static listApiKeys<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<ListApiKeysResponse, ListApiKeysError, ThrowOnError>({
            ...options,
            url: '/api/v1/api_keys'
        });
    }
    
    /**
     * Delete api key
     */
    public static deleteApiKey<ThrowOnError extends boolean = false>(options: Options<DeleteApiKeyData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteApiKeyResponse, DeleteApiKeyError, ThrowOnError>({
            ...options,
            url: '/api/v1/api_keys/{id}'
        });
    }
    
}

export class AppsService {
    /**
     * Get apps
     * Retrieve a list of all applications based on query parameters.
     */
    public static getApps<ThrowOnError extends boolean = false>(options?: Options<GetAppsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetAppsResponse, GetAppsError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps'
        });
    }
    
    /**
     * Get opena api specs
     * List all openapi spec tools
     */
    public static getOpenApiSpecs<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetOpenApiSpecsResponse, GetOpenApiSpecsError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/list'
        });
    }
    
    /**
     * Delete open api spec tool
     * Delete an openapi spec tool
     */
    public static deleteOpenApiSpecTool<ThrowOnError extends boolean = false>(options: Options<DeleteOpenApiSpecToolData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteOpenApiSpecToolResponse, DeleteOpenApiSpecToolError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/delete/{id}'
        });
    }
    
    /**
     * Send email to client
     */
    public static sendEmailToClient<ThrowOnError extends boolean = false>(options?: Options<AppControllerSendEmailToClientData, ThrowOnError>) {
        return (options?.client ?? client).post<AppControllerSendEmailToClientResponse, AppControllerSendEmailToClientError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/send_email_to_client'
        });
    }
    
    /**
     * Get open api spec status
     * Get the status of an openapi spec tool
     */
    public static getOpenApiSpecStatus<ThrowOnError extends boolean = false>(options: Options<GetOpenApiSpecStatusData, ThrowOnError>) {
        return (options?.client ?? client).get<GetOpenApiSpecStatusResponse, GetOpenApiSpecStatusError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/openapi/spec/status/{id}'
        });
    }
    
    /**
     * Get app
     * Get app details
     */
    public static getApp<ThrowOnError extends boolean = false>(options: Options<GetAppData, ThrowOnError>) {
        return (options?.client ?? client).get<GetAppResponse, GetAppError, ThrowOnError>({
            ...options,
            url: '/api/v1/apps/{appName}'
        });
    }
    
}

export class IntegrationsService {
    /**
     * Create connector
     * Create a new connector
     */
    public static createConnector<ThrowOnError extends boolean = false>(options?: Options<CreateConnectorData, ThrowOnError>) {
        return (options?.client ?? client).post<CreateConnectorResponse, CreateConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations'
        });
    }
    
    /**
     * List all connectors
     * List all connectors
     */
    public static listAllConnectors<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<ListAllConnectorsResponse, ListAllConnectorsError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations'
        });
    }
    
    /**
     * Get connector info
     * Get connector info
     */
    public static getConnectorInfo<ThrowOnError extends boolean = false>(options: Options<GetConnectorInfoData, ThrowOnError>) {
        return (options?.client ?? client).get<GetConnectorInfoResponse, GetConnectorInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}'
        });
    }
    
    /**
     * Modify connector
     * Modify a connector
     */
    public static modifyConnector<ThrowOnError extends boolean = false>(options: Options<ModifyConnectorData, ThrowOnError>) {
        return (options?.client ?? client).patch<ModifyConnectorResponse, ModifyConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}'
        });
    }
    
    /**
     * Delete connector
     * Delete a connector
     */
    public static deleteConnector<ThrowOnError extends boolean = false>(options: Options<DeleteConnectorData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteConnectorResponse, DeleteConnectorError, ThrowOnError>({
            ...options,
            url: '/api/v1/integrations/{integrationId}'
        });
    }
    
}

export class ConnectionsService {
    /**
     * Get connections
     */
    public static getConnections<ThrowOnError extends boolean = false>(options?: Options<GetConnectionsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetConnectionsResponse, GetConnectionsError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts'
        });
    }
    
    /**
     * Initiate connection
     */
    public static initiateConnection<ThrowOnError extends boolean = false>(options?: Options<InitiateConnectionData, ThrowOnError>) {
        return (options?.client ?? client).post<InitiateConnectionResponse2, InitiateConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts'
        });
    }
    
    /**
     * Update connection data
     * Update connection data
     */
    public static updateConnectionData<ThrowOnError extends boolean = false>(options: Options<UpdateConnectionDataData, ThrowOnError>) {
        return (options?.client ?? client).patch<UpdateConnectionDataResponse, UpdateConnectionDataError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/data'
        });
    }
    
    /**
     * Get connection
     */
    public static getConnection<ThrowOnError extends boolean = false>(options: Options<GetConnectionData, ThrowOnError>) {
        return (options?.client ?? client).get<GetConnectionResponse, GetConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}'
        });
    }
    
    /**
     * Delete connection
     * Delete a connection
     */
    public static deleteConnection<ThrowOnError extends boolean = false>(options: Options<DeleteConnectionData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteConnectionResponse, DeleteConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}'
        });
    }
    
    /**
     * Get connection info
     * Get connection info
     */
    public static getConnectionInfo<ThrowOnError extends boolean = false>(options: Options<GetConnectionInfoData, ThrowOnError>) {
        return (options?.client ?? client).get<GetConnectionInfoResponse, GetConnectionInfoError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/info'
        });
    }
    
    /**
     * Disable connection
     * Disable a connection
     */
    public static disableConnection<ThrowOnError extends boolean = false>(options: Options<DisableConnectionData, ThrowOnError>) {
        return (options?.client ?? client).post<DisableConnectionResponse, DisableConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/disable'
        });
    }
    
    /**
     * Enable connection
     * Enable a connection
     */
    public static enableConnection<ThrowOnError extends boolean = false>(options: Options<EnableConnectionData, ThrowOnError>) {
        return (options?.client ?? client).post<EnableConnectionResponse, EnableConnectionError, ThrowOnError>({
            ...options,
            url: '/api/v1/connectedAccounts/{connectedAccountId}/enable'
        });
    }
    
}

export class TriggersService {
    /**
     * List triggers
     * List triggers
     */
    public static listTriggers<ThrowOnError extends boolean = false>(options?: Options<ListTriggersData, ThrowOnError>) {
        return (options?.client ?? client).get<ListTriggersResponse, ListTriggersError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers'
        });
    }
    
    /**
     * Enable trigger
     * Enables a trigger for a connected account and specific trigger name.
     */
    public static enableTrigger<ThrowOnError extends boolean = false>(options: Options<EnableTriggerData, ThrowOnError>) {
        return (options?.client ?? client).post<EnableTriggerResponse, EnableTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/enable/{connectedAccountId}/{triggerName}'
        });
    }
    
    /**
     * Get active triggers
     * Lists active triggers based on query parameters.
     */
    public static getActiveTriggers<ThrowOnError extends boolean = false>(options?: Options<GetActiveTriggersData, ThrowOnError>) {
        return (options?.client ?? client).get<GetActiveTriggersResponse, GetActiveTriggersError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/active_triggers'
        });
    }
    
    /**
     * Switch trigger instance status
     * Switches the status of a trigger instance.
     */
    public static switchTriggerInstanceStatus<ThrowOnError extends boolean = false>(options: Options<SwitchTriggerInstanceStatusData, ThrowOnError>) {
        return (options?.client ?? client).patch<SwitchTriggerInstanceStatusResponse, SwitchTriggerInstanceStatusError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/instance/{triggerId}/status'
        });
    }
    
    /**
     * Disable trigger
     * Disables a specified trigger instance.
     */
    public static disableTrigger<ThrowOnError extends boolean = false>(options: Options<DisableTriggerData, ThrowOnError>) {
        return (options?.client ?? client).post<DisableTriggerResponse, DisableTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/disable/{triggerInstanceId}'
        });
    }
    
    /**
     * Delete trigger
     * Deletes a specified trigger instance.
     */
    public static deleteTrigger<ThrowOnError extends boolean = false>(options: Options<DeleteTriggerData, ThrowOnError>) {
        return (options?.client ?? client).delete<DeleteTriggerResponse, DeleteTriggerError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/instance/{triggerInstanceId}'
        });
    }
    
    /**
     * Set callback url
     * Sets a universal callback URL for the client.
     */
    public static setCallbackUrl<ThrowOnError extends boolean = false>(options?: Options<SetCallbackUrlData, ThrowOnError>) {
        return (options?.client ?? client).post<SetCallbackUrlResponse, SetCallbackUrlError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/set_callback_url'
        });
    }
    
    /**
     * Get webhook url
     * Retrieves the universal callback URL set for the client.
     */
    public static getWebhookUrl<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetWebhookUrlResponse, GetWebhookUrlError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/callback_url'
        });
    }
    
    /**
     * Get logs
     * Fetches logs based on connection and integration details.
     */
    public static getTriggerLogs<ThrowOnError extends boolean = false>(options?: Options<GetTriggerLogsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetTriggerLogsResponse, GetTriggerLogsError, ThrowOnError>({
            ...options,
            url: '/api/v1/triggers/logs'
        });
    }
    
    /**
     * Get trigger info
     * Get Trigger Info
     */
    public static getTriggerInfoV2<ThrowOnError extends boolean = false>(options: Options<GetTriggerInfoV2Data, ThrowOnError>) {
        return (options?.client ?? client).get<GetTriggerInfoV2Response, GetTriggerInfoV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/triggers/{triggerName}'
        });
    }
    
}

export class AdminService {
    /**
     * Jssentry dns
     */
    public static getSentryDns<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GetSentryDnsResponse, GetSentryDnsError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/js-sentry-dns'
        });
    }
    
    /**
     * Clear cache
     */
    public static clearCache<ThrowOnError extends boolean = false>(options?: Options<ClearCacheData, ThrowOnError>) {
        return (options?.client ?? client).post<ClearCacheResponse, ClearCacheError, ThrowOnError>({
            ...options,
            url: '/api/v1/clear-cache'
        });
    }
    
}

export class CliService {
    /**
     * Handle cli code exchange
     */
    public static generateCliSession<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
        return (options?.client ?? client).get<GenerateCliSessionResponse, GenerateCliSessionError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/generate-cli-session'
        });
    }
    
    /**
     * Get cli code
     */
    public static getCliCode<ThrowOnError extends boolean = false>(options: Options<GetCliCodeData, ThrowOnError>) {
        return (options?.client ?? client).get<GetCliCodeResponse, GetCliCodeError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/get-cli-code'
        });
    }
    
    /**
     * Handle cli code verification
     */
    public static verifyCliCode<ThrowOnError extends boolean = false>(options: Options<VerifyCliCodeData, ThrowOnError>) {
        return (options?.client ?? client).get<VerifyCliCodeResponse, VerifyCliCodeError, ThrowOnError>({
            ...options,
            url: '/api/v1/cli/verify-cli-code'
        });
    }
    
}

export class LogsService {
    /**
     * Get logs
     * List logs
     */
    public static getLogs<ThrowOnError extends boolean = false>(options?: Options<GetLogsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetLogsResponse, GetLogsError, ThrowOnError>({
            ...options,
            url: '/api/v1/logs/'
        });
    }
    
    /**
     * Post logs
     * Add new logs
     */
    public static postLogs<ThrowOnError extends boolean = false>(options?: Options<PostLogsData, ThrowOnError>) {
        return (options?.client ?? client).post<PostLogsResponse, PostLogsError, ThrowOnError>({
            ...options,
            url: '/api/v1/logs/'
        });
    }
    
}

export class ActionsService {
    /**
     * List actions
     * Retrieve a list of all actions based on query parameters.
     */
    public static listActionsV2<ThrowOnError extends boolean = false>(options?: Options<ListActionsV2Data, ThrowOnError>) {
        return (options?.client ?? client).get<ListActionsV2Response, ListActionsV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/actions'
        });
    }
    
    /**
     * List actions minimal
     * Retrieve a list of all actions based on query parameters.
     */
    public static listActionsMinimalV2<ThrowOnError extends boolean = false>(options?: Options<ListActionsMinimalV2Data, ThrowOnError>) {
        return (options?.client ?? client).get<ListActionsMinimalV2Response, ListActionsMinimalV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/list/all'
        });
    }
    
    /**
     * Execute action
     * Execute an action. Support both connected account and no auth auth.
     */
    public static executeActionV2<ThrowOnError extends boolean = false>(options: Options<ExecuteActionV2Data, ThrowOnError>) {
        return (options?.client ?? client).post<ExecuteActionV2Response, ExecuteActionV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/{actionId}/execute'
        });
    }
    
    /**
     * Get action inputs
     * Get the inputs for an action with NLA
     */
    public static getActionInputsV2<ThrowOnError extends boolean = false>(options: Options<GetActionInputsV2Data, ThrowOnError>) {
        return (options?.client ?? client).post<GetActionInputsV2Response, GetActionInputsV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/{actionId}/execute/get.inputs'
        });
    }
    
    /**
     * Get action
     * Get action details
     */
    public static getActionV2<ThrowOnError extends boolean = false>(options: Options<GetActionV2Data, ThrowOnError>) {
        return (options?.client ?? client).get<GetActionV2Response, GetActionV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/{actionId}'
        });
    }
    
    /**
     * Execute action proxy
     * Execute an action with direct auth.
     */
    public static executeActionProxyV2<ThrowOnError extends boolean = false>(options?: Options<ExecuteActionProxyV2Data, ThrowOnError>) {
        return (options?.client ?? client).post<ExecuteActionProxyV2Response, ExecuteActionProxyV2Error, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/proxy'
        });
    }
    
    /**
     * Advanced use case search
     * Perform use case search.
     */
    public static advancedUseCaseSearch<ThrowOnError extends boolean = false>(options: Options<AdvancedUseCaseSearchData, ThrowOnError>) {
        return (options?.client ?? client).get<AdvancedUseCaseSearchResponse2, AdvancedUseCaseSearchError, ThrowOnError>({
            ...options,
            url: '/api/v2/actions/search/advanced'
        });
    }
    
}

export class AnalyticsService {
    /**
     * Get analytics
     */
    public static getAnalytics<ThrowOnError extends boolean = false>(options?: Options<GetAnalyticsData, ThrowOnError>) {
        return (options?.client ?? client).get<GetAnalyticsResponse, GetAnalyticsError, ThrowOnError>({
            ...options,
            url: '/api/v1/analytics/'
        });
    }
    
    /**
     * Get top entities
     */
    public static getTopEntities<ThrowOnError extends boolean = false>(options?: Options<GetTopEntitiesData, ThrowOnError>) {
        return (options?.client ?? client).get<GetTopEntitiesResponse, GetTopEntitiesError, ThrowOnError>({
            ...options,
            url: '/api/v1/analytics/entities'
        });
    }
    
}

export class EventLogsService {
    /**
     * Update webhook
     */
    public static updateWebhook<ThrowOnError extends boolean = false>(options?: Options<UpdateWebhookData, ThrowOnError>) {
        return (options?.client ?? client).post<UpdateWebhookResponse, UpdateWebhookError, ThrowOnError>({
            ...options,
            url: '/api/v1/event_logs/set/webhook'
        });
    }
    
}