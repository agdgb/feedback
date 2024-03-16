import React from 'react'
import { Timestamp } from 'firebase/firestore'

function FeedbackCard ({ feedback }) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const formattedDate = timeStamp => {
    const jsDate = timeStamp.toDate()
    return `${
      monthNames[jsDate.getMonth()]
    } ${jsDate.getDate()}, ${jsDate.getFullYear()}`
  }

  return (
    <>
      <div className='bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between w-full sm:w-1/2 sm:mx-auto md:w-1/3 lg:w-1/4 xl:w-1/4'>
        <p className='text-base font-medium text-gray-700'>
          <b>Feedback From:</b> {feedback.has || 'N/A'}
        </p>
        <div className='feedback-content text-sm text-gray-500'>
          {feedback.content}
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
          <p className='text-sm text-gray-500'>
            <b>Date:</b> {formattedDate}
          </p>
          <p className='text-sm text-gray-500'>
            <b>Document ID:</b> {feedback.id}
          </p>
        </div>
      </div>
    </>
  )
}

export default FeedbackCard
