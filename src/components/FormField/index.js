import React from 'react';
import './styleFormField.css';

function FormField({tag,label,value, onChange,type}){
    function add(event){
        (event.target).classList.add("focussed")
        var x = (event.target).parentNode;
        x.classList.add("focussed")
    }
    const idName = `id_${tag}${type}`;
    const TagC = tag ;
    return(
        <div className="field">
          <label
            htmlFor={idName}
            >
            {label}
          </label>
          <TagC onClick={add} id={idName} type={type} value={value} onChange={onChange}/>
        </div>
    );
}

export default FormField;