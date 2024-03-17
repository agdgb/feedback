// src/components/FeedbackForm.js
import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'
const Feedback = () => {
  const [feedback, setFeedback] = useState()
  const [date, setDate] = useState(new Date())
  const [message, setMessage] = useState('')
  const handleInputChange = e => {
    setFeedback(e.target.value)
  }

  const insertRecord = async (content, date) => {
    var data = {
      content: content,
      date: date
    }
    try {
      const collectionRef = collection(db, 'feedbacks') // Replace with your collection name
      const newDocRef = await addDoc(collectionRef, data)
      console.log('Document written with ID:', newDocRef.id)
      setMessage(`Thank you for your feedback! ${newDocRef.id}`)
    } catch (error) {
      setMessage('There was an error submitting you feedback!')
      console.error('Error adding document:', error)
      // setMessage(error)
    }
  }
  const handleSubmit = async e => {
    e.preventDefault()
    insertRecord(feedback, date)
  }

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(''), 5000)

    return () => clearTimeout(timeout)
  }, [message])

  return (
    <div className='max-w-lg mx-auto mt-8 p-6 bg-white dark:bg-zinc-800 shadow-md rounded-lg'>
      <h1 className='text-5xl font-bold text-center mb-4 text-cyan-800 dark:text-blue-500'>
        We'd love to hear from you!😊
      </h1>

      <p className='text-1xl font-semibold text-center mb-4 text-cyan-400'>
        Tell us what you want from
        <span className='text-cyan-600 text-2xl'> company XYZ!</span>
      </p>
      {message && <p className='text-white dark:text-cyan-600'>{message}</p>}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='feedback'
            className='block text-sm font-medium text-zinc-900 dark:text-white'
          >
            Message:
          </label>
          <textarea
            className='text-zinc-900 dark:text-white font-medium rounded-lg shadow-sm  dark:bg-zinc-700 opacity-75 resize-y p-3 focus:ring-1 focus:ring-offset-2 focus:ring-cyan-800 w-full h-40 focus:outline-none border border-slate-400 dark:border-slate-300 focus:border-none mt-2'
            placeholder='Your feedback here...'
            value={feedback}
            onChange={handleInputChange}
            required
            rows={6}
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-neutral-50 bg-cyan-800 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
    // <div className='max-w-md mx-auto'>
    //   <form
    //     onSubmit={handleSubmit}
    //     className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    //   >
    //     <div className='mb-4'>
    //       <label
    //         className='block text-gray-700 text-sm font-bold mb-2'
    //         htmlFor='feedback'
    //       >
    //         Feedback:
    //       </label>
    //       <textarea
    //         id='feedback'
    //         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    //         placeholder='Enter your feedback here'
    //         value={feedback}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <input type='hidden' value={date} />
    //     <div className='flex items-center justify-between'>
    //       <button
    //         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    //         type='submit'
    //       >
    //         Submit
    //       </button>
    //     </div>
    //     {message && <p>{message}</p>}
    //   </form>
    // </div>
  )
}

export default Feedback
