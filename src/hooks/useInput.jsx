import React from 'react'
import { useState } from 'react'

export default () =>{
    const [value,setValue] = useState('');

    return{
        value,
        onChange:(evt) =>{
            setValue(evt.target.value);
        },
        reset: ()=>{
            setValue('');
        }
    }
}