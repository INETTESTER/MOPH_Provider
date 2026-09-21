import http from 'k6/http';
import { domain, token } from './env.js';

export function Exchange_token_Health() {
    const url = `https://pentest-provider.id.th/api/v1/services/token`;

    const payload = JSON.stringify({
        client_id: 'a82d6f8d-956b-45d4-a72f-56860febd130',
        secret_key: 'FrvUwV0KYOSyaHVo6Bk1cOJO4EmyH9t6',
        token_by: 'Health ID',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMWEwYjNmOC1iNWM1LTc4ZTItODBiOC1mMjhmZjBmZGZjMGMiLCJqdGkiOiJkYzVhYTc3NzNjZDU5OWI1NGUwOTNmMDM3MDg2OTJkYTE3NTY0NjIyMWVkNTMyMTk1ODdjMWEzNWMyYjYwYzJkZjE3MmM1YmY0MTBkZGY4YiIsImlhdCI6MTc4OTk1OTYyMy42MDQ4MjQsIm5iZiI6MTc4OTk1OTYyMy42MDQ4MjksImV4cCI6MTc5MDA0NjAyMy40OTM1MjEsInN1YiI6IjAxOTg3MzViLTYwZGItNzZjNS05MTBlLWM2Y2NhNzNhY2JhZSIsInNjb3BlcyI6WyJuYW1lIiwibmFtZV9wcmVmaXgiLCJzdXJuYW1lIiwiaWRfY2FyZCIsImJpcnRoZGF0ZSIsIm5hdGlvbmFsaXR5IiwibW9iaWxlX25vIiwiaWFsIiwiYWFsIiwiZW1haWwiXSwic2NvcGVzX2RldGFpbCI6eyJpZF9jYXJkIjoiMzg1MzkwMjk4MDg0MCIsImhhc2hfaWRfY2FyZCI6Ijc1MmJkZDkyNmQ1NTVhMGNlZjU2NjE5OWFlNzBjMmNlMGVjN2JhN2I2NTA4NWY1MWM4N2E2YzU4ZDExODZjMzIiLCJub25fdGhfaWRfY2FyZCI6IiIsImhhc2hfbm9uX3RoX2lkX2NhcmQiOiIiLCJiaW9faWQiOiIiLCJoYXNoX2Jpb19pZCI6IiIsIm5hbWVfcHJlZml4IjoiXHUwZTE5XHUwZTMyXHUwZTIyIiwibmFtZSI6Ilx1MGUxN1x1MGUxNFx1MGUyYVx1MGUyZFx1MGUxYVx1MGUyYlx1MGUwMSIsInN1cm5hbWUiOiJcdTBlMjNcdTBlMzBcdTBlMWFcdTBlMWFcdTBlMmJcdTBlMDEiLCJiaXJ0aGRhdGUiOiIyMDI0LTA4LTIzIiwibmF0aW9uYWxpdHkiOiJUaGFpIiwibW9iaWxlX25vIjoiMDYxNDE0NDMxMiIsImlhbCI6Mi4xfX0.LWAlewPkrV_nCC_PoyyKKM4cyaBQm7lrQb8ABf50uNO-7Gm-IRwOw-lVxQKTRnoUtemCb8BmW6XLQihUEj2vXvvGKUeZ8uMp8r7rNzOLKTH3RiKDoW6h7NQFgz1Lx1mftkm89LPP4VCa3ug0qSN9Nzb3pTVMsuLgGM2zTKNDNFjRW3RyQDaf_9B4JOV8Ejl4RgSSsLKl0dlQclu4GSYy0tHoAjl83kkLlXib4doqV5WFYK9Srua_YjUkC68P2_RzI5EfUwfo8-LEHjxpHc2xIaGExGr0kQaC8D33pTCsOqlJ7R4Zr-5_8_-oN4KIJMCiodyGerotR0nyB1DUEQMvgX7JZ0EWKyAVPhEdGrVCKRLh0uEyrS9ET9RUZjzHSmxdI7JsoWb5J5i0xSYVGm-spOxqhi-avCbOHjeas1WJ2WHdG2fShyEw2tYxUd07J37NLnBRbUDANAOKsh-KjLYk6y5_zxPadukEUdfcUWBXsYZ_y3srzZhqEaIdloUlXYcoqzyCMGoyes23evXv8h9QYXI2FahiB5YkBk3nX2InUII6QKjffEllBRHU6ZdCC57nmLzua5N8OoL6eWZeqo4hBJeJHN_ohfFYOo7tk08PJl8CdmyfvejfV9hVYG43dJvo3Y7GK2epjKg4UdP_gn96RAN-S3-CDq5cDmsNgo5_ZMo'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);

    //console.log(response.body);

    return response;
}