import React, { useState, useRef } from "react";
import "./contactForm.css";
import { saveContact } from "../../Services/agendaAPI.js";

const contactForm = ({setIsShowForm}) => {
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    telephone: "",
  });

  const handleClick = () => {
    setIsShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.currentTarget.name.value,
      apellido: e.currentTarget.lastName.value,
      telefono: e.currentTarget.telephone.value,
    };

    const contact = await saveContact(data);
    
    if (contact.exito){
      setFormState({
        name: "",
        apellido: "",
        telefono: "",
      })
      alert("Contacto agregado exitosamente")
      setIsShowForm(false);
    }
  };

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="overlay">
      <div className="overlay-container">
        <div className="contact-form-div">
          <div className="form-header">
            <h1 className="form-title">Agregar Contacto</h1>
            <button className="btnClose" onClick={handleClick}>
              x
            </button>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <b>Nombre</b>
              <input
                id="nombre"
                type="text"
                name="name"
                placeholder="Ingresa el nombre"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <b>Apellido</b>
              <input
                id="apellido"
                type="text"
                name="lastName"
                placeholder="Ingresa el apellido"
                onChange={handleChange}
                // value={formState.lastName}
                required
              />
            </label>

            <label>
              <b>Teléfono</b>
              <input
                id="telefono"
                type="tel"
                placeholder="Ingresa el número"
                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="telephone"
                onChange={handleChange}
                // value={formState.telephone}
                required
              />
            </label>

            <input
              type="submit"
              id="btnGuadar"
              className="btnGuardar"
              value="Guardar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactForm;
