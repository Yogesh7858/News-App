import React, { Component } from 'react'
// import loading from '../assets/loading.gif';
// import loading from './Spin.gif';
import loading from './New.gif'

const Spinner = ()=> {
  
    return (
      <div className='text-center'>
        <img src={loading} alt='load'/>
      </div>
    )
  
}
export default Spinner
