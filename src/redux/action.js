import { getPayload } from "./utils/getPayload";
import axios from "axios";

export const getData = (value) => {
  const type = "GET_DATA";

  return (dispatch) => {
    const type = "GET_DATA";
    dispatch({ type: type, payload: getPayload("pending", null) });

    axios
      .get(`http://universities.hipolabs.com/search?name=${value}`)

      .then((res) => {
        dispatch({ type: type, payload: getPayload("success", res.data) });
      })
      .catch((err) =>
        dispatch({ type: type, payload: getPayload("error", err) })
      );
  };
};
