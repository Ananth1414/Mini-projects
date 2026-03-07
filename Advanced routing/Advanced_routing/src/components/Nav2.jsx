import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {

    let navigate = useNavigate()

    return (
    <div className='py-3 px-5 bg-gray-800  '>
        <button 
                onClick={() =>
                    {
                        navigate('/')
                    }
                }
                className='bg-gray-400 m-5 px-5 py-2 rounded cursorpointer active:scale-95 duration-200 '>
                Return to Home
            </button>
            <button 
                onClick={() =>
                    {
                        navigate(-1)
                    }
                }
                className='bg-gray-400 m-5 px-5 py-2 rounded cursorpointer active:scale-95 duration-200 '>
                Back
            </button>
            <button 
                onClick={() =>
                    {
                        navigate(+1)
                    }
                }
                className='bg-gray-400 m-5 px-5 py-2 rounded cursorpointer active:scale-95 duration-200 '>
                Next
            </button>
    </div>
    )
}

export default Nav2
