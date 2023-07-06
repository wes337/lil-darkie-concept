import axios from "axios";
import * as CryptoJS from "crypto-js";

const bucketId = "fdacde1ef63b2e6c8f92051c";

export async function getApiUrl(password) {
  const response = await axios({
    method: "GET",
    url: "https://api.backblazeb2.com/b2api/v3/b2_authorize_account",
    headers: {
      Authorization: `004dcee6becf25c0000000002:${password}`,
    },
  });

  return {
    apiUrl: response.data.apiUrl,
    authorizationToken: response.data.authorizationToken,
  };
}

export async function getUploadDetails(password) {
  const { apiUrl, authorizationToken } = await getApiUrl(password);

  const getUploadRes = await axios({
    method: "POST",
    url: `${apiUrl}/b2api/v2/b2_get_upload_url`,
    headers: {
      Authorization: authorizationToken,
    },
    data: {
      bucketId,
    },
  });

  console.info(`Success getting B2 upload details`);

  const data = getUploadRes.data;
  const uploadUrl = data.uploadUrl;

  return {
    authToken: data.authorizationToken, // upload auth token, not account auth token
    uploadUrl,
  };
}

export async function uploadFile(password, file) {
  const uploadDetails = await getUploadDetails(password);

  const reader = new FileReader();

  reader.onload = async () => {
    const hash = CryptoJS.SHA1(CryptoJS.enc.Latin1.parse(reader.result));
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      console.info(`XHR response:`, this.response);
    });

    xhr.open("POST", uploadDetails.uploadUrl);

    xhr.setRequestHeader("Content-Type", "image/png");
    xhr.setRequestHeader("Authorization", uploadDetails.authToken);
    xhr.setRequestHeader("X-Bz-File-Name", file.name);
    xhr.setRequestHeader("X-Bz-Content-Sha1", hash);

    const fileToSend = file;

    xhr.send(fileToSend);
  };

  reader.readAsBinaryString(file);
}
