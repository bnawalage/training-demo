export const loginAction = (value) => async (dispatch) => {
    dispatch({
        type: "login",
        payload: true
    });
  };

export const logoutAction = (value) => async (dispatch) => {
    dispatch({
        type: "logout",
        payload: true
    });
};