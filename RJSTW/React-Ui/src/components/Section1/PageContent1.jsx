import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const PageContent1 = (props) => {
    return (
    
    <div className='flex gap-x-10 between pb-20 justify-between px-18 items-center h-[90vh]'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
    
    )
}

export default PageContent1
