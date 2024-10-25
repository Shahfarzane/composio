const Sentry = require("@sentry/node");


async function fetchDsn() {
    try {
        const response = await fetch("https://backend.composio.dev/api/v1/cli/js-sentry-dns");
        if (!response.ok) return null;
        const data = await response.json();
        return data.dns || null;
    } catch {
        console.error("Failed to fetch DSN from server");
        return null;
    }
}

// lazy load sentry
async function initSentry() {
    const dsn = await fetchDsn();
    Sentry.init({
        dsn,
        integrations: [],
        tracesSampleRate: 1.0,
        profilesSampleRate: 1.0,
        environment: process.env.NODE_ENV,
        // @ts-ignore
        beforeSend(event, hint) {
            console.log(event);
            if (event.exception && event.exception.values) {
                const exception = event.exception.values[0];
                if (exception.stacktrace && exception.stacktrace.frames) {
                    const frames = exception.stacktrace.frames;
                    // @ts-ignore
                    if (frames.some(frame => frame.module && frame.module.includes('composio-core'))) {
                        return event;
                    }
                }
            }
            return null;
        },
    });
    
}

initSentry();

