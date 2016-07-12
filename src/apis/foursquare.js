const baseUrl = 'https://api.foursquare.com/v2';
const clientId = 'NO2QY22RJYZIWW2ZMRUDMNV1ZJF4RR4QXK30SZYAZFAACKVG';
const clientSecret = 'ZUQPBMCUEFEC30BG2CFNTE4SSFA1OQLZHZW4NKJCHVIZTEJT';

export const venues = {
    explore({ near, section = 'food' }) {
        return fetch(
            `${baseUrl}/venues/explore`
            + `?client_id=${clientId}`
            + `&client_secret=${clientSecret}`
            + `&near=${near}`
            + `&section=${section}`
            + '&venuePhotos=1'
            + '&v=20160618'
            + '&m=foursquare'
        ).then(res => res.json());
    },
};
