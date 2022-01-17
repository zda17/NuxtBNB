export default function(context, inject) {
    const appId = 'KT2YR8EGCP';
    const apiKey = 'd08a437382fd487110c93248e41e1306';
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId
    }

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId) {
        try {
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, { headers }))
        } catch(error) {
            return getErrorResponse(error);
        }
    }

    async function unwrap(response) {
        const json = await response.json();
        const { ok, status, statusText } = response;
        return {
            json,
            ok,
            status,
            statusText,
        }
    }

    // always remember to write for errors / edge cases, not just best case scenario
    function getErrorResponse(error) {
        return {
            ok: false,
            status: 500,
            statusText: error.message,
            json: {}
        }
    }
}