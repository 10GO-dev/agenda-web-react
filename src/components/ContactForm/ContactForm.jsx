import React from "react";
import "./contactForm.css";
import { addContact } from "../../Services/agendaAPI.js";

const contactForm = ({setIsShowForm}) => {
 

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

    addContact(data)
    .then( (res) => {
      console.log(res)
      alert("Contacto agregado exitosamente")
      setIsShowForm(false);
    });
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
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <b>Teléfono</b>
              <input
                id="telefono"
                type="tel"
                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="telephone"
                onChange={handleChange}
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
