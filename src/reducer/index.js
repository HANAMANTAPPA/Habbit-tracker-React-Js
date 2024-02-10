import { ADD_HABBIT, REMOVE_HABBIT } from "../actions";

const initialHabbitsState = {
  habbits: [
    {
      title: "Read book",
      fav: false,
      daylist: [1, 0, -1, 0, 0, 0, 0],
    },
    {
      title: "write book",
      fav: false,
      daylist: [0, -1, 0, 0, 1, 1, 0],
    },
    {
      title: "GYM",
      fav: false,
      daylist: [0, -1, 1, 0, 1, 1, 0],
    },
    {
      title: "DSA",
      fav: false,
      daylist: [1, 1, 1, -1, 0, 1, 0],
    },
  ],
};

export function reducer(state = initialHabbitsState, action) {
  switch (action.type) {
    case ADD_HABBIT:
      console.log(action.type, "action.type)");
      return { ...state, habbits: [...state.habbits, action.habbit] };
    case REMOVE_HABBIT:
      //   const index = state.favlist.indexOf(action.movie);
      const newHabbitList = state.habbits.filter(
        (habbit) => habbit !== action.habbit
      );
      return { ...state, habbits: newHabbitList };
    default:
      return state;
  }
}
