import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import {Routes , Route} from 'react-router-dom'
import Projects from './components/Projects'
import data from './data/projects.json'
import Project from './components/Project'


function App() {
  
  const [projects, setProjects] = useState(data);
  const [selectedProject, setSelectedProject] = useState({})


  return (
    <div className='app'>
      <Nav />
      
      <Routes>
      <Route path='/' element = {<MainSection />}/>
        <Route path='/projects' element = {<Projects projects = {projects} setSelectedproject = {setSelectedProject}/>}/>
        <Route path='/project' element = {<Project  selectedProject = {selectedProject} />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
