import React from 'react'

// desestructurem en lloc de cridar l'objecte props
export const GifGridItem = ({id, title, url}) => {

    return (
        // es posa className enlloc de class xq 'class' és una paraula reservada
        // de JS
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
