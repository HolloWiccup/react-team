import { useReducer } from "react";
import { initialAuthState, authReducer } from "../reducer/authReducer";
import { AuthDataContext, AuthDispatch } from "../context/userContext";

export default function AuthProvider({children} : any): JSX.Element {
    const [authState, dispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthDataContext.Provider value={authState}>
            <AuthDispatch.Provider value={dispatch}>
                {children}
            </AuthDispatch.Provider>
        </AuthDataContext.Provider>
    )
}