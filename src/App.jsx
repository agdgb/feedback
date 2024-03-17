import { useEffect, useState } from 'react'
import Feedback from './Feedback'
import Feedbacks from './Feedbacks'
import { db } from './firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App () {
  const [feedbacks, setFeedbacks] = useState([])

  const readRecords = async () => {
    try {
      const collectionRef = collection(db, 'feedbacks')
      const q = query(collectionRef, orderBy('date', 'desc'))
      const querySnapshot = await getDocs(q)
      let records = []
      console.log(records)
      querySnapshot.forEach(doc => {
        records.push({ id: doc.id, ...doc.data() })
      })
      records.length > 0 ? setFeedbacks(records) : []
      console.log('Records:', feedbacks)
    } catch (error) {
      console.error('Error fetching records:', error)
    }
  }
  useEffect(() => {
    readRecords()
  }, [])

  return (
    <div className='App'>
      <Router>
        <div className='flex space-x-20 items-baseline content-between'>
          <h1 className='text-black text-2xl dark:text-blue-500 '>
            Feedback System
          </h1>
          <nav className='flex space-x-2 text-black dark:text-zinc-400'>
            <ul>
              <Link to='/'>New Feedback</Link>
            </ul>
            <ul>
              <Link to='/list'>Feedbacks</Link>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route
            path='/list'
            element={<Feedbacks feedbacks={feedbacks} onRetry={readRecords} />}
          />
          <Route path='/' element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
