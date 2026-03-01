import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users);
    return (
    <div id='right' className='h-full flex overflow-x-auto gap-10 flex-nowrap p-6 w-2/2 px-6'>
        {props.users.map(function(card,idx){
            return <RightCard key={idx} id={idx} img={card.img} tag={card.tag}/>
        })}
    </div>
    )
}

export default RightContent
