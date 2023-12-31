import Navbar from './components/Navbar'
import Header from './components/Header/Header'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import JobCard from './components/JobCard/JobCard'
import JobDummyData from './JobDummyData'
function App() {
 

  return (
    <>
    <div>
     <Navbar/>
     <Header/>
     <SearchBar/>
     {JobDummyData.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
    </>
  )
}

export default App
