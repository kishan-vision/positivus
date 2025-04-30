import Header from '@/components/Header';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

const layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className='w-full max-w-[1440px] mx-auto px-6'>
                {children}
            </main>
            <ToastContainer />
        </Fragment>
    )
}

export default layout