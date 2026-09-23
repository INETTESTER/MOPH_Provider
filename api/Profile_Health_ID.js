import http from 'k6/http';
import { domain, token } from './env.js';

export function Profile_Health_ID() {
    const url = `${domain}/go-api/v1/profile`;

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };

    const response = http.get(url, params);
    if (response.status !== 200) {
        console.log(response.body);
    }

    //console.log(response.body);

    return response;
}