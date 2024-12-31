import List from '@/assets/icons/List'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

export const Header = () => {

    return (
        // <div className='py-8'>
        //     <div className="transparent-container mx-auto flex justify-between p-6 w-[90vw] h-20 rounded-full">
        //         <div className='flex items-center space-x-2'>
        //             <img src="/MbridgeLogo.svg" alt="" srcSet="" />
        //             <p>Mbridge28</p>
        //         </div>
        //         <div className='flex items-center space-x-2'>
        //             <div className='transparent-child rounded-full p-4'>
        //                 <p>Get Started</p>
        //             </div>
        //             <List />
        //         </div>
        //     </div>
        // </div>
        <nav className='bg-dark1 w-full flex items-center justify-between py-4 px-2'>
            <div className='flex items-center space-x-2'>
                <img src="/LogoColor.png" alt="" srcSet="/LogoColor.png" height={24} width={24} />
                <p>MBT Presale</p>
            </div>
            <div className='flex space-x-2 items-center'>
                <p>Connect Wallet</p>
                <List />
            </div>
        </nav>
    )
}