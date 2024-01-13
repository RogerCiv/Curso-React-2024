import React from 'react'
import { Fragment } from 'react'

function Ejercicio10({ users }) {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl m-4'>Ejercicio 10</h1>
			<ol>
			{users.map((user, index) => (
					<Fragment key={index}>
						<li className='list-disc'>
							<a href={`/user-${index + 1}`}>{index + 1}👉{user.name}</a>
							</li>
					</Fragment>
        ))}
			</ol>
		</div>
	)
}

export default Ejercicio10