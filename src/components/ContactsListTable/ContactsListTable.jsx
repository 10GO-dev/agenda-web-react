import "./ContactsListTable.css";
import React, { useState, useEffect } from "react";
import agendaAPI from "../../Services/agendaAPI";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const Database = agendaAPI.fireStore()
      Database.collection('contactos')
      .get()
      .then( response => {
        setData(response);
      })
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
              <tbody id="contact_list">
                  {data.length && data.map((item) => <ContactItem contact={item} />)}
              </tbody>
            </table>
      </div>
    </>
  );
};

export default ContactList;
