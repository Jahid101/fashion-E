import http from "./Common";

class UserActionsApi {
  static endpoint = {
    users: "/users",
  };

  getHeaders = (token: string) => {
    return {
      "Content-type": "application/json",
      //   Authorization: "Bearer " + token,
    };
  };

  getData = () => {
    return http.get(`${UserActionsApi.endpoint.users}`, {
      // headers: this.getHeaders(token),
    });
  };
}

export default new UserActionsApi();
