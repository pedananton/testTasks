import api from "../../components/api";

export const SET_MONTHS = "SET_MONTHS";
export const getMonths = () => (dispatch) => {
  api.get().then((resp) =>
    dispatch({
      type: SET_MONTHS,
      payload: resp.data,
    })
  );
};