import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

const layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className='w-full max-w-[1440px] mx-auto px-6 mt-24'>
                {children}
            </main>
            <ToastContainer />
            <Footer />
        </Fragment>
    )
}

export default layout