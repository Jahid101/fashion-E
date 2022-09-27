import http from "./Common";

class UserActionsApi {
  static endpoint = {
    data: "/products?limit=",
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
}

export default new UserActionsApi();
