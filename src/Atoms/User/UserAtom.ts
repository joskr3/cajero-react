import { atom } from "recoil";
import { IUser } from "../../Interfaces/IUser";

export const currentUserAtom = atom<IUser | null>({
  key: "current-user", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
