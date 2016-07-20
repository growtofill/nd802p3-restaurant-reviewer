const baseUrl = 'https://api.foursquare.com/v2';
const clientId = 'NO2QY22RJYZIWW2ZMRUDMNV1ZJF4RR4QXK30SZYAZFAACKVG';
const clientSecret = 'ZUQPBMCUEFEC30BG2CFNTE4SSFA1OQLZHZW4NKJCHVIZTEJT';
const version = '20160618';

export const venues = {
    explore({ near, ll, section = 'food' }) {
        return fetch(
            /* eslint-disable prefer-template */
            `${baseUrl}/venues/explore`
            /* eslint-enable prefer-template */
            + `?client_id=${clientId}`
            + `&client_secret=${clientSecret}`
            + (near ? `&near=${near}` : `&ll=${ll}`)
            + `&section=${section}`
            + '&venuePhotos=1'
            + `&v=${version}`
            + '&m=foursquare'
        ).then(res => res.json());
    },
    venues(venueId) {
        return fetch(
            `${baseUrl}/venues/${venueId}`
            + `?client_id=${clientId}`
            + `&client_secret=${clientSecret}`
            + '&venuePhotos=1'
            + `&v=${version}`
            + '&m=foursquare'
        ).then(res => res.json());
    },
};
