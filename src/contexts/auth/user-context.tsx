import React from 'react';
import { useAuth } from './auth-context';

interface IUserContext {
    username: string
    jwt: string
}

const UserContext = React.createContext<IUserContext>({} as IUserContext);

const UserProvider = (props: any) => (
    <UserContext.Provider value={useAuth()?.user} {...props} />
)

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };