"use client"
import { useState, useEffect } from 'react'

export default function Todo() {
	const [tasks, setTasks] = useState(() => {
		// Retrieve tasks from local storage or initialize with an empty array
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	})
	const [newTask, setNewTask] = useState('')

	useEffect(() => {
		// Save tasks to local storage whenever they change
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = () => {
		if (newTask.trim()) {
			setTasks([...tasks, newTask])
			setNewTask('')
		}
	}

	const removeTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index))
	}

	return (
		<div className="flex flex-col items-center p-4 bg-gray-100 h-fit">
			<h1 className="text-4xl font-bold mb-4 font-bright tracking-widest">To-Do List</h1>
			<div className="flex mb-4">
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					className="p-2 border rounded-l-lg w-64"
					placeholder="Add a new task"
				/>
				<button
					onClick={addTask}
					className="p-2 bg-blue-500 text-white rounded-r-lg"
				>
					Add
				</button>
			</div>
			<ul className="w-full max-w-md">
				{tasks.map((task, index) => (
					<li
						key={index}
						className="flex justify-between items-center p-2 bg-white border-b"
					>
						{task}
						<button
							onClick={() => removeTask(index)}
							className="text-red-500"
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}