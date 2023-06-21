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
    className="sm:w-[150px] w-[120px]"
  />
  )
}

export default LogoDarkLight