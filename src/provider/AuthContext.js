import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthing, setIsAuthing] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [role, setRole] = useState(null)

    const getRoleToken = () => {
        const accessToken = localStorage.getItem("token");
        const payload = accessToken.split(".")[1]
        setRole(JSON.parse(atob(payload))["role"])
    }

    const signIn = () => {
        getRoleToken()
        setIsAuthing(false)
        setIsSignedIn(true);
    }

    const signOut = () => {
        setIsAuthing(false)
        setIsSignedIn(false)
        localStorage.removeItem("token")
    }

    const hasPermission = (roleNecessary) => {
        if (!role) {
            return false;
        }

        if (!roleNecessary) {
            return true;
        }

        if (Array.isArray(roleNecessary)) {
            return roleNecessary.filter(item => item == role).length > 0
        }

        return role === roleNecessary
    }

    useEffect(() => {
        const accessToken = localStorage.getItem("token")
        if (accessToken && accessToken.length > 0) {
            signIn()
        }
    })

    return (
        <AuthContext.Provider value={{
            hasPermission, signIn,
            isAuthing, isSignedIn, signOut
        }}>{children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);