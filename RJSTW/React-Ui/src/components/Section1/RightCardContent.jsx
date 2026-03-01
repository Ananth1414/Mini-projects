import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white items-center justify-center text-2xl font-semibold rounded-full h-14 w-14 flex'>{props.id+1}</h2>
            <div className=''>
                <p className='text-lg mb-6 text-amber-50 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maxime assumenda eaque perspiciatis doloribus!
                </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white rounded-full py-2 px-10 font-semibold'>{props.tag}</button>
                    <button className='rounded-full bg-blue-500 text-white py-2 px-3'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
