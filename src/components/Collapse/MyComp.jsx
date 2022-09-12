import React, { useEffect, useState } from 'react'
import './Collapse.style.scss';
import carretIcon from "../../assets/images/carret.svg";

export default function Collapse2({ title, children }) {
    const [isActive, setIsActive] = useState(false);


    return (
        <div className={`collapse ${isActive ? 'collapse-active' : null}`}>
            <div className="collapse-header">
                <p className="collapse-header-title">{title}</p>
                <img onClick={() => setIsActive(!isActive)} src={carretIcon} alt="collapse icon" className="collapse-header-icon" />
            </div>
            <div className='collapse-content'>
                {children}
            </div>
        </div>
    )
}
