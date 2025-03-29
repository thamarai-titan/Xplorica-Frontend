import {atom} from "recoil"

export const showState = atom<boolean >({
    key: 'show',
    default: false, 
  });