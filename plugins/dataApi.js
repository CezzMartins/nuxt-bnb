export default function(context, inject){
    const appId = process.env.ALGOLIA_APP_ID
    const apiKey = process.env.ALGOLIA_API_KEY
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id':appId,
    }

    inject('dataApi', {
        getHome
    })

    async function getHome(homeId){
        return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers
        }))
  
    }
    async function unWrap(response){
        const json = await response.json()
        const { ok, status, statusText } = response
        return {
            json, ok, statusText,
        }
    }
}