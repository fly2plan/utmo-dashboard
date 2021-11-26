import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { API } from '../../utils';

export interface Credentials {
    username: string,
    password: string
}

interface IAuthContext {
    user: any,
    login: (credentials: Credentials) => Promise<AxiosResponse<any>>
    logout: () => Promise<AxiosResponse<any>>
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

function AuthProvider(props: any) {
    const [user, setUser] = useState<any>(undefined);

    const login = React.useCallback(async (credentials: Credentials) => {
        try {
            const response = await API.post('auth/login', credentials);
            const {status, ...userData } = response.data
            setUser({ ...userData });
        } catch (e) {
            throw new Error('Invalid username or password');
        }
    }, [setUser]);

    const logout = React.useCallback(async () => {
        try {
            //await API.post('auth/logout');
            setUser(null);
        } catch (e) {
            throw new Error('Logout failed');
        }
    }, [setUser]);

    const value = React.useMemo(() => ({ user, login, logout }), [
        user,
        login,
        logout,
    ])

    return <AuthContext.Provider value={value} {...props} />
}

const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context;
}

export { AuthProvider, useAuth };