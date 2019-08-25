import React from 'react';
import TextField from '@material-ui/core/TextField';

// Styles
import style from './text-input.scss';

const TextInput = ({ label, placeholder, disabled }) => (
    <div className={style['text-input']}>
        <TextField
            label={label}
            placeholder={placeholder}
            margin="normal"
            variant="outlined"
            className={style['text-input--input']}
        />
    </div>
);

export default TextInput;
