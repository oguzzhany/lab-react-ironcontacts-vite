import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const restOfContacts = contacts.slice(5);

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * restOfContacts.length);
    let randomContact = restOfContacts[randomIndex];
    ![...firstFive].includes(randomContact) &&
      setFirstFive([...firstFive, randomContact]);
  };

  const handleSort = () => {
    let sortedContact = [...firstFive].sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1;
    });
    setFirstFive(sortedContact);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={handleRandom}>Add Random Contact</button>
      <button onClick={handleSort}>Sort by popularity</button>
      <button>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstFive.map((contact) => (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <th>{contact.wonOscar && <h1>🏆</h1>}</th>
              <th>{contact.wonEmmy && <h1>🌟</h1>}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
