import http from 'k6/http';
import { domain, token } from './env.js';

export function Exchange_token_Health() {
    const url = `https://pentest-provider.id.th/api/v1/services/token`;

    const payload = JSON.stringify({
        client_id: 'a82d6f8d-956b-45d4-a72f-56860febd130',
        secret_key: 'FrvUwV0KYOSyaHVo6Bk1cOJO4EmyH9t6',
        token_by: 'Health ID',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMWEwYjNmOC1iNWM1LTc4ZTItODBiOC1mMjhmZjBmZGZjMGMiLCJqdGkiOiI5Mzg1YmVjYWU1N2E1Yjc0NTJmYjIwMmZhYTljMWRmYTNlNTY4YzdkMWIyOTA1ZWFhZDc5YzVkN2Y0MTNjZWMyNWI4NTEzNWIwY2Y3OTQyMyIsImlhdCI6MTc5MDE0NzU1NC45NzYzNjgsIm5iZiI6MTc5MDE0NzU1NC45NzYzNywiZXhwIjoxNzkwMjMzOTU0Ljg4NTQ0NSwic3ViIjoiMDE5ODczNWItNjBkYi03NmM1LTkxMGUtYzZjY2E3M2FjYmFlIiwic2NvcGVzIjpbIm5hbWUiLCJuYW1lX3ByZWZpeCIsInN1cm5hbWUiLCJpZF9jYXJkIiwiYmlydGhkYXRlIiwibmF0aW9uYWxpdHkiLCJtb2JpbGVfbm8iLCJpYWwiLCJhYWwiLCJlbWFpbCJdLCJzY29wZXNfZGV0YWlsIjp7ImlkX2NhcmQiOiIzODUzOTAyOTgwODQwIiwiaGFzaF9pZF9jYXJkIjoiNzUyYmRkOTI2ZDU1NWEwY2VmNTY2MTk5YWU3MGMyY2UwZWM3YmE3YjY1MDg1ZjUxYzg3YTZjNThkMTE4NmMzMiIsIm5vbl90aF9pZF9jYXJkIjoiIiwiaGFzaF9ub25fdGhfaWRfY2FyZCI6IiIsImJpb19pZCI6IiIsImhhc2hfYmlvX2lkIjoiIiwibmFtZV9wcmVmaXgiOiJcdTBlMTlcdTBlMzJcdTBlMjIiLCJuYW1lIjoiXHUwZTE3XHUwZTE0XHUwZTJhXHUwZTJkXHUwZTFhXHUwZTJiXHUwZTAxIiwic3VybmFtZSI6Ilx1MGUyM1x1MGUzMFx1MGUxYVx1MGUxYVx1MGUyYlx1MGUwMSIsImJpcnRoZGF0ZSI6IjIwMjQtMDgtMjMiLCJuYXRpb25hbGl0eSI6IlRoYWkiLCJtb2JpbGVfbm8iOiIwNjE0MTQ0MzEyIiwiaWFsIjoyLjF9fQ.hIzY_HSFGqNw8pxP10NrMFbXgbJSZtWDeKLzC93a2LK9jGlsrYxtiL3TYul2sB1oObZwqy_02XXbY4tOozomsXXEyU5GUzHahRpswC6cctK-dtzVaybd2qMS4VDmTCL33ShZKLjrkvAK1TmoBNf17jO54jxfS5Qam6e71SNfmTKZqXON3-kw33a6tlw2DmTWbkaTgKqMl957WKzW1t82NuXKXm9Oci0MsZs2NrMJavUy8YDSBYknEQkiZHmzpKFQUUezysYh5A6cK7Je_bmPf4bs_jale3LTih2THp0dfwCwHn2CTJanluFT-YxvLTZIb8Hvc6bNpe9UhyAXEc6md4c8PGYrjqFBp_FqEkItHbaNjLfVoqFIS_h2aod4dJNqKoydKhQefVHwZgCfgR3diBubonFPLGIegJwUcLbcH028gD1ZgK5s56B8-Y5pfsHBvEpc34p8uYz590vKrOUpJIyiSbESlUacJXtSUW5Fdy2OTthkfSWsmP1YTB8NHwiCPMmOyNnUdiRTi11dU14667CobDEXil9qjM-WvQXNSgEE16FlczHjt0c4YyOm0z9UoAggvQmlZeqGaa7VAmMBSQpGut4_S5Dckrby1qJiLhM54xE7rpN2zBBeLr3gsbSw8Jp2r34U0KkOUdkIsRQuOrm7Pwy8wmmLruG9w5KonHI'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = http.post(url, payload, params);
    if (response.status !== 200) {
        console.log(response.body);
    }

    //console.log(response.body);

    return response;
}