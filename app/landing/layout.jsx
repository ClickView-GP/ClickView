import Rract from 'react'
import Header from './_components/Header'



function LandingLayout({children}) {
    return (
        <div className='min-h-screen bg-white'>
            <Header/>

            <div className='flex items-center justify-center  '>
                {children}
            </div>
            
        </div>
    )
}

export default LandingLayout