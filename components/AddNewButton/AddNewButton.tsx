import React from 'react'
import PlusIcon from '../../assets/Icons/union.svg'

interface Props{
    title: string,
    onClick:() => void
}

const AddNewButton = (props:Props) => {
  return (
    <div onClick={props.onClick} className="add_button">
        <p>{props.title}</p>
        <div className="add_button__circle">
            <img src={PlusIcon} alt="add new Icon" />
        </div>
    </div>
  )
}

export default AddNewButton