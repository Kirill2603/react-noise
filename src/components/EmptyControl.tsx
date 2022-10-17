import React from 'react'

export const EmptyControl = () => {
	return (
		<div className='flex flex-col items-start opacity-80'>
			<span className='px-5 text-xl font-bold'>Empty</span>
			<div className='w-44 h-8 border border-amber-50 border-dashed rounded-3xl m-2'></div>
		</div>
	)
}
