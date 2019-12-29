import React from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
export default (initial) =>{
    const [searchParams, setSearchParams] = useState(initial);
    const history = useHistory();
    return {
        searchParams,
        putParam: (query)=>{
            if(!searchParams){
                history.push('?'+ query);
                setSearchParams(history.location.search)
            }
            else{
                setSearchParams(history.location.search+'&'+query)
            }
        }
    }
}