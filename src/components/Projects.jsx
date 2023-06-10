import React from 'react'
import {useNavigate} from 'react-router-dom'

function Projects({projects ,setSelectedproject }) {
    const navigate = useNavigate();

    function clickHandler(i){
      
        setSelectedproject(i)
        navigate('/project')
        
    }
  return (
    <div className='projects-section grow'>
        {projects.map( i => <div className='card' onClick={() => clickHandler(i)}>
            <img src={i.pics} alt="" />
            <h2>{i.name}</h2>
            <h3>Stack list :</h3>
            <ul>
                {i.stack.map(j =><li>{j}</li> )}
            </ul>
            {/* <p>Project Description: {i.desc}</p> */}

        </div>)}      
       
    </div>
  )
}

export default Projects