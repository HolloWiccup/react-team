import { createContext } from "react";
import { DEFAULT } from "../utils/defaultValues";

export const UserData = createContext<string>(DEFAULT.EMPTY_STRING);

export const AuthDataContext = createContext<any>(DEFAULT.EMPTY_STRING);
export const AuthDispatch = createContext<any>(DEFAULT.EMPTY_STRING)