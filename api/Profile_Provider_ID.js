import http from 'k6/http';
import { domain, token2 } from './env.js';

export function Profile_Provider_ID() {
    const url = `https://pentest-provider.id.th/api/v1/services/profile`;

    const params = {
        headers: {
            'client-id': 'a82d6f8d-956b-45d4-a72f-56860febd130',
            'secret-key': 'FrvUwV0KYOSyaHVo6Bk1cOJO4EmyH9t6',
            'Authorization': 'Bearer ' + token2
        }
    };

    const response = http.get(url, params);
    if (response.status !== 200) {
        console.log(response.body);
    }

    //console.log(response.body);

    return response;
}