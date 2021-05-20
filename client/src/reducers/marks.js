import { VIEW_MARKS, MARKS_ERROR } from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
  error: {},
};

const Marks = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VIEW_MARKS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case MARKS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};

export default Marks;
