import React from 'react';
import './listbox.css';

function ListBox(props) {
    
    const {item:{name=''}} = props;
    return (
        <div>
            <p className="pa">{name}</p>
        </div>
    )
}

export default ListBox;
