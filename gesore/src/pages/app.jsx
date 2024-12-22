import { Home } from '@mui/icons-material'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './About'

const app = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About/>} />
        </Routes>

    </div>
  )
}

