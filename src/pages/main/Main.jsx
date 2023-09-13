import React from 'react'
import DropNav from '../../components/DropNav/DropNav'
import './main.scss'
const Main = () => {
  return (
    <div className='main'>
        <DropNav id={1} distance={35} location={'ბათუმი'} />
        <DropNav id={2} distance={56} location={'ქობულეთი'} />
        <DropNav id={3} distance={67} location={'ფოთი'} />
        <DropNav id={4} distance={13} location={'ანაკლია'} />
    </div>
  )
}

export default Main