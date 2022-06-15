import React from 'react'

interface Props{
    title:string,
    onClick: () => void,
    backgroundColor?: string;
}

const Button = ({backgroundColor, title}:Props) => {
  return (
    <button 
        style={{
            backgroundColor: backgroundColor ? backgroundColor : "blue",
            border: "1px solid black",
            color: "white",
        }}
    >
        {title}
    </button>
  )
}

export default Button