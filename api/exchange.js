import { sleep } from 'k6';
import http from 'k6/http';
export { sleep } from 'k6';

export const options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 10000,
            timeUnit: '60s',
            duration: '60s',
            preAllocatedVUs: 10000,
            maxVUs: 10000,
            gracefulStop: '120s'
        }
    }
};

export default function () {
    Exchange_token_Health();
    sleep(1)
}

export function Exchange_token_Health() {
    const url = `https://pentest-provider.id.th/api/v1/services/token`;

    const payload = JSON.stringify({
        client_id: 'a82d6f8d-956b-45d4-a72f-56860febd130',
        secret_key: 'FrvUwV0KYOSyaHVo6Bk1cOJO4EmyH9t6',
        token_by: 'Health ID',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMWEwYjNmOC1iNWM1LTc4ZTItODBiOC1mMjhmZjBmZGZjMGMiLCJqdGkiOiI5ZWZkZDE0YTA5NTJmMGM1OGRjNmNmMjU0NTVkYmExYzNmOTcyNTAzM2IyZWFhOTY5NDAwYTVjY2QzYWYxYzFhYmQzNTg1MjlkNGY0NjlkOSIsImlhdCI6MTc5MDA2Njk4My4yMjk5NzUsIm5iZiI6MTc5MDA2Njk4My4yMjk5NzcsImV4cCI6MTc5MDE1MzM4My4xNTA5ODEsInN1YiI6IjAxOTg3MzViLTYwZGItNzZjNS05MTBlLWM2Y2NhNzNhY2JhZSIsInNjb3BlcyI6WyJuYW1lIiwibmFtZV9wcmVmaXgiLCJzdXJuYW1lIiwiaWRfY2FyZCIsImJpcnRoZGF0ZSIsIm5hdGlvbmFsaXR5IiwibW9iaWxlX25vIiwiaWFsIiwiYWFsIiwiZW1haWwiXSwic2NvcGVzX2RldGFpbCI6eyJpZF9jYXJkIjoiMzg1MzkwMjk4MDg0MCIsImhhc2hfaWRfY2FyZCI6Ijc1MmJkZDkyNmQ1NTVhMGNlZjU2NjE5OWFlNzBjMmNlMGVjN2JhN2I2NTA4NWY1MWM4N2E2YzU4ZDExODZjMzIiLCJub25fdGhfaWRfY2FyZCI6IiIsImhhc2hfbm9uX3RoX2lkX2NhcmQiOiIiLCJiaW9faWQiOiIiLCJoYXNoX2Jpb19pZCI6IiIsIm5hbWVfcHJlZml4IjoiXHUwZTE5XHUwZTMyXHUwZTIyIiwibmFtZSI6Ilx1MGUxN1x1MGUxNFx1MGUyYVx1MGUyZFx1MGUxYVx1MGUyYlx1MGUwMSIsInN1cm5hbWUiOiJcdTBlMjNcdTBlMzBcdTBlMWFcdTBlMWFcdTBlMmJcdTBlMDEiLCJiaXJ0aGRhdGUiOiIyMDI0LTA4LTIzIiwibmF0aW9uYWxpdHkiOiJUaGFpIiwibW9iaWxlX25vIjoiMDYxNDE0NDMxMiIsImlhbCI6Mi4xfX0.WyJMucSzkFmUX_6knT7_ChB9lNrPyyqLlucgcM3Z0WYiSqToBNjd9TEzYhpmoj_AAm9T_4vWC_F_UCgAa2o94nQCpka7Rf2r3GC_8h99HlNZ4dEAjdMKdQAdTAZBRS0P5-EUEzTk9vUCPzdUR7KhX_GXRQPugTFu5ni4clM0xFQ91Qs3sqPavtebUM86PgS46AfPbrnUTpFdkT4uOJIH0RqusJO8Xr87PIgoh0TCpEXdVhAQEZH4Wl8X6u8KywzsxNn8WbEkY97f4cDR5kbJZSM9h5RSIfg_MHa7UaqVqel1NsWmGaTNqcOrEfhIJ-j3_bwtZ-n9ntLIsfitvoax2sx5NXoR2iEdpuaJaQqceq7ksRy1jEYIzoSvvI9_pOcspbd9mwIYdxJeTaMgxU0H067U78WfEuGs_ESi0gVOwO4XrAjH8dukMTEdlkKv7WILez63CpecNwAKuYW-pRWjo0Xet744mcbe0iyOrzWsteXr8nT144-Hv2R3nGh5yUh_hv7cdwGet11zePfibO5X6nprjqX_7xkGBzCk7tTsPU6zmL4GR3-SyRzaPQ5_Ys5EXSY63t-aUjMHiR_Ypjbop6QghZUqdFpjJIfZWtcfEwEstj8jwEqPsAZuCqNHYrAydEO1TGVn6Sjp4OmSIc2xWU6SEWCJuIqaQ6mfPcTnIgY'
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

    return response;
}