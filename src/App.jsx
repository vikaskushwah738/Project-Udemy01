
import CoreConcepts from '../../project1/src/components/CoreConcepts'
import Example from '../../project1/src/components/Example'
import './App.css'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Header/>
      <main className='bg-blue-950'>
   <CoreConcepts/>
   <Example/>
      </main>
    </>
  )
}

export default App
