const url = "http://www.raydelto.org/agenda.php";

export const getContacts = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const saveContact = async (props) => {
  const contacto = {
    nombre: props.nombre,
    apellido: props.apellido,
    telefono: props.telefono,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(contacto),
    });
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
