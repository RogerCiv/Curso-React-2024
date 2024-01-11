import { useState } from "react"
import { idGenerator } from "../../helpers/idGenerator"

const initialState = [
	{
		id: 1,
		title: "Comprar pan",
		completed: false,
	},
	{
		id: 2,
		title: "Terminar Tailwind",
		completed: true,
	},
	{
		id: 3,
		title: "APrender React",
		completed: false,
	}

]

const ToDoList = () => {

	const [tasks, setTasks] = useState(initialState)
	const [newTask, setNewTask] = useState("")

	function handleRemoveTask(taskId) {

		const updateTasks = tasks.filter(task => task.id !== taskId)
		setTasks(updateTasks);
	}

	function handleAddTask() {
		if (newTask.trim() !== '') {
			const newTaskObject = {
				id: idGenerator(),
				title: newTask.trim(),
				completed: false,
			}
			setTasks([
				...tasks,
				newTaskObject,
			])
			setNewTask("");
		}
	}
	function handleToggleCompleted(taskId) {
		const updateTasks = tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task)

		setTasks(updateTasks);
		//console.log(updateTasks);
	}

	return (

		<div className="max-w-sm mx-auto bg-orange-400/50 mt-8 p-2 shadow-xl">
			<h1 className="text-center text-3xl mb-8 font-semibold ">ToDo List</h1>
			<div className='flex  items-center justify-center  gap-2'>
				<input type="text" name='name' className="rounded-xl p-2" placeholder="Nueva tarea..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
				<button type="submit" onClick={handleAddTask} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Añadir Tarea</button>
			</div>

			<div>
				<ul className="mx-auto ">
					{tasks.map((task) => (
						<li className="flex items-center " key={task.id}>
							<input type="checkbox" name="" id="" checked={task.completed} onChange={() => handleToggleCompleted(task.id)} className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
							<span className={`${task.completed && 'line-through'} ml-2`}>{task.title}</span>
							<button type="button" onClick={() => handleRemoveTask(task.id)} className="ml-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Eliminar</button>
						</li>
					))}
				</ul>
			</div>
		</div>

	)
}

export default ToDoList
