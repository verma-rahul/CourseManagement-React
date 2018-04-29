import TYPES from "../constants/actionTypes"
import {HISTORY} from "../constants/common"

export const toggleSidebar = () => (
{type: TYPES.TOGGLE_SIDEBAR});

export const setActivePage = (page) => (
{type: TYPES.SWITCH_PAGE,payload:page});
