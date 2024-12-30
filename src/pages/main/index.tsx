import { Navbar } from '@/components'
import { useResponsive } from '@/hooks';
import React from 'react'

export const Main = () => {
    const { isMobile, } = useResponsive();

    console.log('isMobile', isMobile)


    return (
        <div><Navbar /></div>
    )
}