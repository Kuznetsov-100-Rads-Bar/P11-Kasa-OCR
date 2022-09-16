/* Importation de la bibliothèque React et des hooks useEffect et useState depuis la bibliothèque React. */
import React, { useEffect, useState } from 'react'
/* Importation de la feuille de style du composant. */
import './Collapse.style.scss';
/* Importation de l'icône du chariot à partir du dossier des assets. */
import carretIcon from "../../assets/images/carret.svg";

export default function Collapse({ type, title, content }) {
/* Création d'une variable d'état appelée error et mise à false. */
    const [error, setError] = useState(false);
/* Créer une variable d'état appelée isActive et la définir sur false. */
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        /* Vérifier si le type est valide, si le titre est valide, si le contenu est valide. */
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

    /* Vérifier si l'erreur est vraie, si c'est le cas, elle ne renverra rien, si ce n'est pas le cas, elle renverra
    le composant. */
    if (error) {
        return;
    }

/* Un composant React qui rend un élément réductible. */
/* Un opérateur ternaire. */
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
