import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // xq no refresqui
        e.preventDefault();

        if (inputValue.trim().length > 2) {        
            // fem el set en forma de callback xq així podem accedir a les categories
            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
