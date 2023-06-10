import React from 'react'

function Project({selectedProject}) {
  return (
    <div className='project-section grow'>
        <h2>{selectedProject.name}</h2>
        <img src={selectedProject.pics} alt="" />
        <ul>
            {selectedProject.stack.map(i => <li>{i}</li>)}
        </ul>
        <p>{selectedProject.desc}</p>
    
    </div>
  )
}

export default Project