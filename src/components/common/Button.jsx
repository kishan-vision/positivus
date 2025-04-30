import React from 'react'

const Button = ({ name, type = "button", className, ...rest }) => {
    return (
        <button type={type} {...rest} className={`px-6 py-2 border rounded-lg ${className}`}>
            {name}
        </button>
    )
}

export default Button;
