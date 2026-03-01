import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        //<img src="https://plus.unsplash.com/premium_photo-1661689040260-e0c0d6023e24?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       // <img src="https://plus.unsplash.com/premium_photo-1661749596920-4a404b8fe4ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className='h-full shrink-0 overflow-hidden relative w-75 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag}/>
    </div>
    )
}

export default RightCard
