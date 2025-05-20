import Rract from 'react'
import Header from './_components/Header'



function DashbordLayout({children}) {
    return (
        <div className='min-h-screen bg-white'>
            <Header/>

            <daiv className='flex items-center justify-center  '>
                {children}
            </daiv>
            
        </div>
    )
}

export default DashbordLayout