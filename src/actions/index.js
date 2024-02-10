// action type
export const ADD_HABBIT = "ADD_HABBIT";
// export const ADD_FAV = "ADD_FAV";
export const REMOVE_HABBIT = "REMOVE_HABBIT";

//  action creators
export function addhabbit(habbit) {
  return {
    type: ADD_HABBIT,
    habbit,
  };
}
export function removiehabbit(habbit) {
  return {
    type: REMOVE_HABBIT,
    habbit,
  };
}
