import { SET_MONTHS } from "../actions";

const initialState = {
  users: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_MONTHS:
      return { ...state, users: payload };
    default:
      return state;
  }
}
