import React from 'react'
import EducationItem from './EducationItem'

const degrees = [{
  'degree': 'Graduation´s Degree',
  'subject': 'System Analysis and Development',
  'institution': 'Estácio'
}, {
  'degree': 'Certificate',
  'subject': 'System Development ',
  'institution': 'IFPI - Federal Institute of Piaui'
}]

const Education = () => {
  return (<div>
    <h3 className='text-4xl font-bold text-center mt-10 mb-5 text-orange'>My Education</h3>
    <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg mb-6'>
      {degrees.map((degree, i) => (
        <EducationItem key={'i' + i} degree={degree} />
      ))

      }
    </div>
  </div>)
}

export default Education

