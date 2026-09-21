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

    //console.log(response.body);

    return response;
}