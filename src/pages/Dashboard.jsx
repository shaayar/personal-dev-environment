import React from 'react'
import { TodoList } from '../../@/components/todo-list'

function Dashboard() {
  return (
    <div className='p-2 border-2 border-black w-[98vw] h-screen '>
      <h1 className='font-bright text-2xl font-bold text-center'>Dashboard</h1>
      <TodoList />
    </div>
  )
}

export default Dashboard