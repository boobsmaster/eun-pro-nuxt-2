import { unWrap, getErrorResponse } from '~/utils/fetchUtils'

export default function({ $config }, inject){
    inject('dataApi', {
      getMenu,
        // getReviewsByHomeId,
        // getUserByHomeId,
        // getHomesByLocation,
        // getHomes,
    })

    async function getMenu(homeId){
        try {
        return unWrap(await fetch(`http://api.eunpro:81/menus` ))
        } catch(error){
            return getErrorResponse(error)
        }
    }
    //
    // async function getReviewsByHomeId(homeId){
    //     try {
    //         return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/reviews/query`, {
    //             headers,
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 filters: `homeId:${homeId}`,
    //                 hitsPerPage: 6,
    //                 attributesToHighlight: [],
    //             })
    //         }))
    //     } catch(error){
    //         return getErrorResponse(error)
    //     }
    // }
    //
    // async function getUserByHomeId(homeId){
    //     try {
    //         return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/users/query`, {
    //             headers,
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 filters: `homeId:${homeId}`,
    //                 attributesToHighlight: [],
    //             })
    //         }))
    //     } catch(error){
    //         return getErrorResponse(error)
    //     }
    // }
    //
    // async function getHomesByLocation(lat, lng, start, end, radiusInMeters = 1500 * 15){
    //     try {
    //         const days = []
    //
    //         for(var day = parseInt(start);day <= parseInt(end); day += 86400){
    //             days.push(`availability:${day}`)
    //         }
    //         return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`, {
    //             headers,
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 aroundLatLng: `${lat},${lng}`,
    //                 aroundRadius: radiusInMeters,
    //                 hitsPerPage: 10,
    //                 filters: days.join(' AND '),
    //                 attributesToHighlight: [],
    //             })
    //         }))
    //     } catch(error){
    //         return getErrorResponse(error)
    //     }
    // }
    // async function getHomes(){
    //     try {
    //         return unWrap(await fetch(`https://${$config.algolia.appId}-dsn.algolia.net/1/indexes/homes/query`, {
    //             headers,
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 hitsPerPage: 3,
    //                 attributesToHighlight: [],
    //             })
    //         }))
    //     } catch(error){
    //         return getErrorResponse(error)
    //     }
    // }
}
