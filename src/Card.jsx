import { Timestamp } from 'firebase/firestore'

export default function Card ({ feedback }) {
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
    <div className='flex flex-col rounded-lg border border-gray-200 dark:border-gray-700'>
      <div className='flex flex-col flex-1 p-4 gap-2'>
        <div className='flex items-center gap-2'>
          <div className='rounded-full h-8 w-8 bg-gray-300 dark:bg-gray-600' />
          <div className='flex flex-col'>
            <h3 className='text-sm font-semibold leading-none dark:text-gray-500'>
              From: {feedback.has || <b>N/A</b>}
            </h3>
            <p className='text-sm font-medium text-red-500 dark:text-gray-500'>
              {formattedDate(feedback.date)}
            </p>
          </div>
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400 overflow-hidden text-ellipsis'>
          {feedback.content}
        </p>
      </div>
    </div>
  )
}
