"use client"

import React from 'react';
import { ThreeDots } from  'react-loader-spinner';

const Loader = () => {
    return (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#0082F6"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        wrapperClassName=""
        visible={true}
        />
    )
}

export default Loader;