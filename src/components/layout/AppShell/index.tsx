import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import { useRouter } from 'next/router';

type AppShellProps = {
    children: ReactNode;
};

function AppShell({ children }: AppShellProps) {
    const { pathname } = useRouter()
    const disableNavbar = ["/auth/login", "/auth/register", "/404"]

    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
}

export default AppShell;
