import "./Assets/Styles/App.css";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactsForm from "./components/ContactForm/ContactForm.jsx";
import ContactsLists from "./components/ContactsListTable/ContactsListTable.jsx";
import { React, useState } from "react";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleShowForm = (e) => {
    e.preventDefault();
    setIsShowForm((isShowForm) => !isShowForm);
  };
  
  return (
    <div className="App">
      <section className={`${isShowForm ? "blur":""}`}>
        <h1>Agenda Web</h1>
        <div className="optionsbar">
          <SearchBox />
          <button className="btnAdd" onClick={handleShowForm}>
            Nuevo Contacto
          </button>
        </div>
        <ContactsLists />
      </section>
      {isShowForm && <ContactsForm setIsShowForm={setIsShowForm} />}
    </div>
  );
}

export default App;
