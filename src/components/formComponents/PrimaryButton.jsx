import React from 'react'

function PrimaryButton({text, classname,onClick}) {
  return (
    <button
    className={`${classname} text-sm text-maintextColor font-medium rounded-full px-5 py-1.5 bg-accentColorOne`}
    onClick={onClick}
    >
        <p>
        {text}
        </p>
    </button>
  )
}

export default PrimaryButton