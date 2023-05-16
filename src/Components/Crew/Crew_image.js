import React from 'react'

const CrewImage = (props) => {
  const { imgURL, name } = props

  return (
    <div className='md:relative md:mb-12'>
      <div className=" flex justify-center border-b border-gray-600 md:border-none ">
        <img
          src={imgURL}
          alt={name}
          className=" crew-img w-fit h-60 md:w-96 md:h-96 block lg:w-80 lg:h-80"
        />
      </div>
    </div>
  )
}

export default CrewImage