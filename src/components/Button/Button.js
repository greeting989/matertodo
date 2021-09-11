import React from 'react'
import Button from 'react-bootstrap/Button'
function Submit(props) {
    return (
        <div>
            <Button variant="success" size="sm" className="mt-2">{props.btntext}</Button>
        </div>
    )
}

export default Submit;
