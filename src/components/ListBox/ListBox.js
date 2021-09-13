import React from 'react'

function ListBox(props) {
    const {item:{name=''}} = props;
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default ListBox;
