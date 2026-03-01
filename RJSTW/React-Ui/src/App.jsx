import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
  {
    img:'https://plus.unsplash.com/premium_photo-1661765213398-c51562d8ce3c?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    intro:'',
    tag:'Satisfied'

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661629269789-846cfb5e5bec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    intro:'',
    tag:'UnderServe'

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661689040260-e0c0d6023e24?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Excellent'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661505078371-440ce21bfe46?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    intro:'',
    tag:'UnderBnaked'

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661774723035-de53c21c9838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    intro:'',
    tag:'Satisfied'

  },
  

  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      
    </div>
  )
}

export default App
