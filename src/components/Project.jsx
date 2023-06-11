import React from 'react'

function Project({selectedProject}) {
  return (
    <div className='project-section grow'>
      <div>
          <h2>{selectedProject.name}</h2>
          <img src={selectedProject.pics} alt="" />
      </div>
       
       <div>
          <ul>
              <h3>Stack :</h3>{selectedProject.stack.map(i => <li>{i}</li>)}
          </ul>
          <p><h3>Description :</h3>{selectedProject.desc}</p>
       </div>
        
    
    </div>
  )
}

export default Project