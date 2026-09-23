import http from 'k6/http';
import { domain, token } from './env.js';

export function Exchange_token_Health() {
    const url = `https://pentest-provider.id.th/api/v1/services/token`;

    const payload = JSON.stringify({
        client_id: 'a82d6f8d-956b-45d4-a72f-56860febd130',
        secret_key: 'FrvUwV0KYOSyaHVo6Bk1cOJO4EmyH9t6',
        token_by: 'Health ID',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMWEwYjNmOC1iNWM1LTc4ZTItODBiOC1mMjhmZjBmZGZjMGMiLCJqdGkiOiI2NGUwNzI5OTMzOTBhZjIyYTA1Y2I1N2M4ZDBjZGM3YjZkMWZkODMxMGE1NWUzZmQ5Yzg5NWQ4YWI1MjNkYzViOGEzMzM1M2U3MTQ1MGE1OCIsImlhdCI6MTc5MDA1NzE4Ni4xMzc3NjUsIm5iZiI6MTc5MDA1NzE4Ni4xMzc3NzEsImV4cCI6MTc5MDE0MzU4Ni4wMTIyMiwic3ViIjoiMDE5ODczNWItNjBkYi03NmM1LTkxMGUtYzZjY2E3M2FjYmFlIiwic2NvcGVzIjpbIm5hbWUiLCJuYW1lX3ByZWZpeCIsInN1cm5hbWUiLCJpZF9jYXJkIiwiYmlydGhkYXRlIiwibmF0aW9uYWxpdHkiLCJtb2JpbGVfbm8iLCJpYWwiLCJhYWwiLCJlbWFpbCJdLCJzY29wZXNfZGV0YWlsIjp7ImlkX2NhcmQiOiIzODUzOTAyOTgwODQwIiwiaGFzaF9pZF9jYXJkIjoiNzUyYmRkOTI2ZDU1NWEwY2VmNTY2MTk5YWU3MGMyY2UwZWM3YmE3YjY1MDg1ZjUxYzg3YTZjNThkMTE4NmMzMiIsIm5vbl90aF9pZF9jYXJkIjoiIiwiaGFzaF9ub25fdGhfaWRfY2FyZCI6IiIsImJpb19pZCI6IiIsImhhc2hfYmlvX2lkIjoiIiwibmFtZV9wcmVmaXgiOiJcdTBlMTlcdTBlMzJcdTBlMjIiLCJuYW1lIjoiXHUwZTE3XHUwZTE0XHUwZTJhXHUwZTJkXHUwZTFhXHUwZTJiXHUwZTAxIiwic3VybmFtZSI6Ilx1MGUyM1x1MGUzMFx1MGUxYVx1MGUxYVx1MGUyYlx1MGUwMSIsImJpcnRoZGF0ZSI6IjIwMjQtMDgtMjMiLCJuYXRpb25hbGl0eSI6IlRoYWkiLCJtb2JpbGVfbm8iOiIwNjE0MTQ0MzEyIiwiaWFsIjoyLjF9fQ.kOW08wwJI0wZvmWyTdifu4dWvTHovFYdGLwY4KD1yiOxRTxDxDbLU9F0fjx6XTsbowWpLBOV_6Fdd4znRBVrGFeWBXUS7lNo8ooplHcaC6QgcGNLTRpVixsBVPfF1cYeLFdPWeP1AWLIdrACfcjICK1fLXti5MXUJLpC1-OdV8-Yik1fYODRzg9_cNl6HRXD8gQAO1oo8LxFjD15w9WRoZgJRMRPC3YW4jLvaso2u0xPlDxu3yynlD0baxUI0UOn0V3AXOLnOoqVRCgSG2anp8IncV3VbW5DfBW_NHkmmc_5tYUQNn3ff9TO6jUAY2ncb3Gu98aS0iRmegiws9J2oHKv87spQmL9IOYr9AZNCox088SiosOL3ElIJFWXV-SMHYozBcqCQCzFQWrsO_kS7byhkjJPlCmDdX7ROtFkTS7d1JLMcvt4BB2XSZjxb1K7Onfohp12WYxH5IgQJR7WsO0FvkvY2EW1jOgZK-snk00yhoJCy_AKxQ-vXIQ5X7gbl00YGbPImrPFwCDhavVHlRyfqotpAW1yI2B1DNpl5yoHk9LP2jQa4lwLOcUJdYwOEaF5LsxBFV60J9-IOKmX9mr8v2WEjOjtA98X0z_kL2-R39sh0_nx3GibXJKy9lD9l1je2Dqj4cfeaoc3iSnMwftV98_PXpdHJ2IwaMreuPw'
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