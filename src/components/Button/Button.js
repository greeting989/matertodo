import React from 'react'
import Button from 'react-bootstrap/Button'
function Submit(props) {
    const {title='Add'} = props;
    return (
        <div>
            <Button variant="success" size="sm" className="mt-2">{title}</Button>
        </div>
    )
}

export default Submit;
