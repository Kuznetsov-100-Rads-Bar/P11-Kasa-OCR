import React, { useEffect, useState } from 'react'
import './Collapse.style.scss';
import carretIcon from "../../assets/images/carret.svg";

export default function Collapse({ type, title, content }) {
    const [error, setError] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        /* Checking if the type is valid, if the title is valid, if the content is valid. */
        if (!type || (!["text", "list"].includes(type))) {
            return (console.error("Collapse component must have valid type."), setError(true));
        }
        if (!title || typeof (title) !== 'string' || title.length <= 0) {
            return (console.error("Collapse component must have valid title."), setError(true));
        }
        if (type === 'list' && (typeof (content) !== 'object')) {
            return (console.error("Collapse component with list type must have an object content."), setError(true));
        }
        if (type === 'text' && (typeof (content) !== 'string' || content.length <= 0)) {
            return (console.error("Collapse component with text type must have a valid content."), setError(true));
        }
    }, [type, title, content])

    /* Checking if the error is true, if it is, it will return nothing, if it is not, it will return
    the component. */
    if (error) {
        return;
    }

    return (
        <div className={`collapse ${isActive ? 'collapse-active' : null}`}>
            <div onClick={() => setIsActive(!isActive)} className="collapse-header">
                <p className="collapse-header-title">{title}</p>
                <img src={carretIcon} alt="collapse icon" className="collapse-header-icon" />
            </div>
            <div className='collapse-content'>
                {type === 'list' ?
                    <ul className="collapse-content-list">
                        {content.map((item, key) => {
                            return <li key={key} className="collapse-content-list-item collapse-content-text">{item}</li>
                        })}
                    </ul>
                    :
                    <p className="collapse-content-text">{content}</p>
                }
            </div>
        </div>
    )
}
