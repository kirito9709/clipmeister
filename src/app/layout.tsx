import React from 'react';
import Header from '../components/Header';
import { Providers } from '../context/Providers';

const Layout = ({ children }) => {
    return (
        <Providers>
            <Header />
            <main>{children}</main>
        </Providers>
    );
};

export default Layout;
