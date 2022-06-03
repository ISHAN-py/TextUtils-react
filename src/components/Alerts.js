import React from 'react'

export default function Alerts(props) {
    const capatilize = (word)=>{
        const toLower = word.toLowerCase();
        return toLower.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatilize(props.alert.type)}: </strong>{props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
