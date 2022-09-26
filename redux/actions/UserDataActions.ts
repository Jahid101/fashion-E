import UserActionsApi from "Api/UserActionsApi";

class UserDataActions {
  getData = (success: any, errorLoad: any) => {
    UserActionsApi
      .getData()
      .then((response: any) => {
        if (response.status == 201 || response.status == 200) {
          success(response.data);
        }
      })
      .catch((err: any) => {
        if (err && err.response && err.response.data)
          errorLoad(err.response.data);
      });
  };
}

export default new UserDataActions();
