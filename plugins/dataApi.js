export default function(context, inject) {
    const appId = 'KT2YR8EGCP';
    const apiKey = 'd08a437382fd487110c93248e41e1306';

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId) {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers: {
                'X-Algolia-API-Key': apiKey,
                'X-Algolia-Application-Id': appId
            }
        })
        const json = await response.json();
        return json;
    }
}