import http from "./Common";

class UserActionsApi {
  static endpoint = {
    data: "/products?limit=",
    getOneData: "/products/",
  };

  getHeaders = (token: string) => {
    return {
      "Content-type": "application/json",
      //   Authorization: "Bearer " + token,
    };
  };

  getData = (dataCount: number) => {
    return http.get(`${UserActionsApi.endpoint.data}` + dataCount, {
      // headers: this.getHeaders(token),
    });
  };
  getOneData = (id: number) => {
    return http.get(`${UserActionsApi.endpoint.getOneData}` + id, {
      // headers: this.getHeaders(token),
    });
  };
}

export default new UserActionsApi();
