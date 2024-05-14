import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      const copyState = [...state].sort(
        action.payload === "up"
          ? (a, b) => a.name.localeCompare(b.name)
          : (a, b) => b.name.localeCompare(a.name)
      );
      return copyState;
    }
    case "check": {
      return [...state.filter((u) => u.age > action.payload)];
    }
    default:
      return state;
  }
};
