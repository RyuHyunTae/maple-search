import { atom } from "recoil";

export const ocidState = atom<string>({
  key: "ocidState",
  default: "",
});
