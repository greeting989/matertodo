import React from 'react'
import Button from 'react-bootstrap/Button'
function Submit(props) {
    const {title='Add',addHandler} = props;
    return (
        <div>
            <Button variant="success" size="sm" className="mt-2" onClick={props.addHandler}>{title}</Button>
        </div>
    )
}

export default Submit;
