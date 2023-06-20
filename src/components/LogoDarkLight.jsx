import React from 'react'

const LogoDarkLight = ({dark}) => {
  return (
    <img
    src={
      dark
        ? "https://duruthemes.com/demo/html/cappa/demo2-dark/img/logo.png"
        : "https://duruthemes.com/demo/html/cappa/demo2-light/img/logo-dark.png"
    }
    alt=""
    className="md:w-[150px] w-[100px]"
  />
  )
}

export default LogoDarkLight