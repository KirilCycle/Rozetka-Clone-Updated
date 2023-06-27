import React from 'react'
import c from '../styles/LeftFilter.module.scss'
import BrandsCheckListContainer from './BrandsCheckListContainer'
import RangeContainer from './RangeContainer'




export default function LeftFilter() {

 

  return (
    <div className={c.container}>
      <BrandsCheckListContainer />
      <RangeContainer />     
    </div>
  )
}
