import React from 'react'
import { projects } from '@/data/index';

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A Small section of {' '}
        <span className='text-pruple'>recent Projects</span>
      </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16  mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex item-center justify-center sm:w-96 w-[80vw]">
            {title}
          </div>
        ))}
        </div>
    </div>
  )
}

export default RecentProjects
