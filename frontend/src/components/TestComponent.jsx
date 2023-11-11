import React from 'react'

const logger = () => {
  alert("contact")
}

const Test = () => {
  return (
    <div className="">
      <div className='text-pink-800 text-2xl'>11</div>
      <div>11</div>
      <div>11</div>
      <div>11</div>
      <button onClick={logger} className='bg-blue-700'>Click me!</button>
    </div>
  )
}

export default Test