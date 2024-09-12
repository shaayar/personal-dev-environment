"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Component() {
  const [activeTab, setActiveTab] = useState(0)

  const menuItems = [
    { name: 'Dashboard', color: 'bg-blue-500', route: "/diary" },
    { name: 'Diary', color: 'bg-yellow-500', route: "/diary" },
    { name: 'Github Repos', color: 'bg-gray-500', route: "/repos" },
    { name: 'Password Manager', color: 'bg-purple-500', route: "/diary" },
    { name: 'To-do', color: 'bg-green-500', route: "/diary" },
    { name: 'Links', color: 'bg-pink-500', route: "/diary" },
  ]

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-4">Shubham Dave</h1>
        <p className="text-xl">Explore our virtual galleries and discover amazing artworks from around the world.</p>
      </div>
      <div className="w-1/2 flex items-center justify-end">
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
                animate={{ opacity: activeTab === index ? 1 : 0.7 }}
              >
                <Link href={`${item.route}`}>
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