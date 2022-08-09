import React from "react";

const ContactItem = ({contact}) => {
  console.log(contact.id)
  return (
    <tr className="contactList-item" key={contact.id}>
      <td className="name">{contact.nombre}</td>
      <td>{contact.apellido}</td>
      <td>{contact.telefono}</td>
    </tr>
  );
};

export default ContactItem;
