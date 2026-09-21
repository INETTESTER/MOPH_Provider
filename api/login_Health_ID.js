import http from 'k6/http';
import { domain } from './env.js';

export function login_Health_ID() {
    const url = `${domain}/api/v1/login`;

    const payload = JSON.stringify({
        id_card: '3853902980840',
        passcode: '980840',
        client_id: '01a0b3f8-b5c5-78e2-80b8-f28ff0fdfc0c',
        secret_key: '501b97ee1656f85ab3932e05eca8df224af38afd'
    });

    const params = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);

    //console.log(response.body);

    return response;
}