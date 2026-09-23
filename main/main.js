//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { login_Health_ID } from '../api/login_Health_ID.js';
import { Profile_Health_ID } from '../api/Profile_Health_ID.js';
import { Exchange_token_Health } from '../api/Exchange_token_Health.js';
import { Profile_Provider_ID } from '../api/Profile_Provider_ID.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  response = login_Health_ID()
  //response = Profile_Health_ID()
  //response = Exchange_token_Health()
  //response = Profile_Provider_ID()


  error_check(response);
  sleep(1)
}