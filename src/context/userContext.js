import { useState, createContext } from "react";

export const userContext = createContext({
    auth: false,
    authenticateUser: () => { }
});

export const UserContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);

    const authenticateUser = () => setAuth(true);

    const contextValue = {
        auth,
        authenticateUser
    }

    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    );
}