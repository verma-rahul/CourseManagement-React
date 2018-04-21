import TYPES from "../constants/actionTypes"

export const toggleSidebar = () => (
{type: TYPES.TOGGLE_SIDEBAR});

export const switchTab = (chapter,x) =>  (
  {type: TYPES.TOGGLE_SIDEBAR,
  payload:chapter});
