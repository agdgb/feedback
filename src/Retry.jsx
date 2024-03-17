import React from 'react'

const Retry = ({onRetry}) => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-zinc-950'>
      <div className='text-center space-y-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-12 w-12 mx-auto text-gray-500'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M8.43333 10.5333C9.19999 9.86667 10 8.93333 10.6667 7.86667L13.5 10.7333C12.8333 11.4 12 12.1333 11.0333 12.8L8.43333 10.5333zM8.43333 10.5333C7.66667 11.1999 6.93333 12 6.16667 12.8L3.5 10.7333C4.16667 10.1 4.8 9.46667 5.46667 8.8L8.43333 10.5333zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'
            clipRule='evenodd'
          />
        </svg>
        <h2 className='text-xl font-medium text-gray-700'>
          Something went wrong!
        </h2>
        <p className='text-gray-500'>Please try again.</p>
        <button
          type='button'
          onClick={onRetry}
          className='px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Retry
        </button>
      </div>
    </div>
  )
}

export default Retry
