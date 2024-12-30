import List from '@/assets/icons/List'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='py-8'>
            <div className="border-[rgba(255, 255, 255, 0.10)] border-[0.5px] mx-auto flex justify-between p-6 w-[90vw] h-20 bg-[rgba(255, 255, 255, 0.05)] bg-opacity-20 backdrop-blur-md rounded-full shadow-xl">
                <div className='flex items-center space-x-2'>
                    <img src="/MbridgeLogo.svg" alt="" srcSet="" />
                    <p>Mbridge28</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='bg-[rgba(255,255,255,0.07)] border-[rgba(255, 255, 255, 0.10)] border-[0.5px] bg-opacity-20 backdrop-blur-md rounded-full p-4'>
                        <p>Get Started</p>
                    </div>
                    <List />
                </div>
            </div>
        </div>
    )
}