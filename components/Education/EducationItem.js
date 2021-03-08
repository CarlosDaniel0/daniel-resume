import React from 'react'

const EducationItem = ({ degree }) => {
  return (<div className='border-t md:border-t-0 md:border-l md:border-t-none border-dashed py-6 px-6 mx-6 md:mx-0 md:px-12'>
    <h4 className='text-lg uppercase text-orange'>{degree.degree}</h4>
    <p className='text-2xl uppercase'>{degree.subject}<br />
      <span className='font-bold text-lg normal-case'>{degree.institution}</span> </p>
  </div>)
}

export default EducationItem