import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feedback from './Feedback'
import Feedbacks from './Feedbacks'
import { db } from './firebase'
import { collection, getDocs, query } from 'firebase/firestore'
import Card from './Card'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App () {
  const [count, setCount] = useState(0)
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    const readRecords = async () => {
      try {
        const collectionRef = collection(db, 'feedbacks') // Replace with your collection name
        const q = query(collectionRef) // Optional: Add query conditions if needed
        const querySnapshot = await getDocs(q)
        let records = []
        console.log(records)
        querySnapshot.forEach(doc => {
          records.push({ id: doc.id, ...doc.data() })
        })
        records.length > 0 ? setFeedbacks(records) : []
        console.log('Records:', feedbacks)
        // Use the records in your component state or display
      } catch (error) {
        console.error('Error fetching records:', error)
      }
    }

    readRecords()
  }, [])

  return (
    <div className='App'>
      <Router>
        <h1>Feedback System</h1>
        <nav>
          <ul>
            <Link to='/list'>Feedbacks</Link>
          </ul>
          <ul>
            <Link to='/'>Feedback</Link>
          </ul>
        </nav>
        <Routes>
          <Route path='/list' element={<Feedbacks feedbacks={feedbacks} />} />
          <Route path='/' element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
