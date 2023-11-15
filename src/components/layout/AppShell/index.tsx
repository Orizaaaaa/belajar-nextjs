import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

type AppShellProps = {
    children: ReactNode;
};

function AppShell({ children }: AppShellProps) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}

export default AppShell;
