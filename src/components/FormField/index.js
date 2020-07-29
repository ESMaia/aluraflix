import React from 'react';
import './styleFormField.css';

function FormField({tag,label,value, onChange,type}){
    function add(event){
        (event.target).classList.add("focussed")
        var x = (event.target).parentNode;
        x.classList.add("focussed")
    }
    const TagC = tag ;
    return(
        <div className="field">
          <label>
            {label}
            <TagC onClick={add} type={type} value={value} onChange={onChange}/>
          </label>
        </div>
    );
}

export default FormField;