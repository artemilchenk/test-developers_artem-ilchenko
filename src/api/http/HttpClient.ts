import axios, { Axios } from "axios";

export class HttpClient {
  protected http: Axios;
  constructor() {
    axios.defaults.baseURL =
      "https://frontend-test-assignment-api.abz.agency/api/v1";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.withCredentials = false;
    axios.defaults.maxRedirects = 0;
    this.http = axios;
  }
}
