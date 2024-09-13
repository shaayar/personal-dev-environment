"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Component() {
  const [activeTab, setActiveTab] = useState(0)

  const menuItems = [
    { name: 'Dashboard', color: 'bg-blue-500', route: "/Dashboard" },
    { name: 'Diary', color: 'bg-yellow-500', route: "/Diary" },
    { name: 'Github Repos', color: 'bg-gray-500', route: "/Repos" },
    { name: 'Password Manager', color: 'bg-purple-500', route: "/PasswordManager" },
    { name: 'To-do', color: 'bg-green-500', route: "/To-do" },
    { name: 'Social Links', color: 'bg-pink-500', route: "/Links" },
  ]

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-full p-8 flex flex-col justify-center">
        <h1 className="text-6xl w-full text-center font-bold mb-4 transform -rotate-90 font-bright tracking-widest">Thy World</h1>
      </div>
      <div className="w-fit flex items-center justify-end">
        <div className="flex">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              className={`w-32 h-screen ${item.color} flex items-center justify-center cursor-pointer`}
              whileHover={{ width: 140 }}
              onClick={() => setActiveTab(index)}
            >
              <motion.span
                className="text-2xl font-bold transform -rotate-90 whitespace-nowrap"
                whileHover={{ fontSize: '2vw' }}
              >
                <Link href={item.route}>
                  {item.name}
                </Link>
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}