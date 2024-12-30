

import { Route, Routes } from 'react-router'
import { Main } from '@/pages'



export const RootLayout = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    )
}