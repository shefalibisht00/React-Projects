import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom'


const BUTTON_STYLES = ['btn--primary' , 'btn--outine'];

const BUTTON_SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, type, onClick, buttonStyle, buttonSize
}) => {
    const checkButtonStyle = BUTTON_STYLES.includes(buttonStyle) ? buttonStyle : BUTTON_STYLES[0];

    const checkButtonSize = BUTTON_SIZES.includes(buttonSize) ? buttonSize : BUTTON_SIZES[0];

    return (
        <Link to="/" className='btn-mobile'> 
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
        </Link>
    )
};


