import React from 'react'
import Todo from './To-do'

function Dashboard() {
  return (
    <div className='p-2 border-2 border-black w-[97vw] h-screen '>
      <h1 className='font-bright text-2xl font-bold text-center'>Dashboard</h1>
      <Todo />
    </div>
  )
}

export default Dashboard