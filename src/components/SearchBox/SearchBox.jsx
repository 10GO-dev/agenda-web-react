import './SearchBox.css';
import React from 'react';

function searchBox(){

    const handleChange = (e) => {
        const searchValue = e.currentTarget.value.toUpperCase();
        const tr = document.querySelectorAll(".contactList-item");
        tr.forEach((item) => {
            const td = item.querySelectorAll("td.name");
            td.forEach((td) => {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(searchValue) > -1) {
                    item.style.display = "";
                } else {
                item.style.display = "none";
            }
            });
        });
    }
    
   
    return(
        <input id="filter" type="text" onChange={handleChange} placeholder="Buscar contactos" />
    )
    
}

export default searchBox;


