import axios, { AxiosResponse } from "axios";

export class HttpClient {
  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<any, AxiosResponse<T>>(url);
    return data;
  }
}
