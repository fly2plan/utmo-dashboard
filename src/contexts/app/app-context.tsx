import React from 'react';
import { AuthProvider, UserProvider } from '../auth';

function AppProvider({ children }: any) {
    return (
        <AuthProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </AuthProvider>
    )
}

export default AppProvider