const initState = {
  themeId: 1,
};

export type InitStateType = {
  themeId: number;
};

export const themeReducer = (
  state: InitStateType = initState,
  action: HangeThemeIdActionType
): InitStateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: action.id,
      };

    default:
      return state;
  }
};

export type HangeThemeIdActionType = {
  type: "SET_THEME_ID";
  id: number;
};

export const changeThemeId = (id: number): HangeThemeIdActionType => ({
  type: "SET_THEME_ID",
  id,
}); // fix any
