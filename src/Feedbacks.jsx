import React from 'react'
import FeedbackCard from './FeedbackCard'
import Card from './Card'
import Retry from './Retry'
import Loading from './Loading'

function Feedbacks ({ isLoading, success, feedbacks, onRetry }) {
  return (
    <>
      {/* <div className='text-orange-500 sm:text-blue-500 md:text-green-500 lg:text-yellow-500 xl:text-red-500 2xl:text-purple-500'>
        Text color changes on each breakpoint hit!
      </div> */}
      {isLoading && <Loading />}
      {success && (
        <div className='p-3 bg-white dark:bg-zinc-950 grid gap-4 w-full  lg:grid-cols-3 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4'>
          {feedbacks.map(feedback => (
            <Card key={feedback.id} feedback={feedback} />
          ))}
        </div>
      )}

      {!success && <Retry onRetry={onRetry} />}
    </>
  )
}

export default Feedbacks
