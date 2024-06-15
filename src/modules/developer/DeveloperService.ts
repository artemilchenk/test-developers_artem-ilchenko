import { HttpClient } from "@/api/http";
import { IGetDevelopersResponse } from "@/modules/developer/context";
import { IDeveloperFormData } from "@/modules/developer/types";

export class DeveloperService extends HttpClient {
  constructor() {
    super();
  }

  async getToken(): Promise<object> {
    const response = await this.http.get("/token");
    return response.data;
  }

  async getPositions() {
    const response = await this.http.get("/positions");
    return response.data.positions;
  }

  async getDevelopers(url: string): Promise<IGetDevelopersResponse> {
    const response = await this.http.get(url);
    return response.data;
  }

  async registerDeveloper(value: IDeveloperFormData): Promise<object> {
    const { token } = await this.getToken();
    const response = await this.http.post("/users", value, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${JSON.stringify(token)}`,
      },
    });
    return response.data;
  }
}
