import React from 'react';
import './projects.css'
import {BiCheck} from 'react-icons/bi'

const Project = (project) => {
    console.log(project)
    return (
        <ul className='projects__list'>
            {project.map(project => 
            <li key={project.id} >
                <BiCheck className='projects__list-icon' />
                <p>{project.name}</p>
            </li>
            )}
        </ul>
    );
}

export default Task; 