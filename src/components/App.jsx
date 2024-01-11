import ContactsForm from './ContactsForm/ContactsForm.jsx';
import ContactsList from './ContactsList/ContactsList.jsx';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    if (contactsFromLocalStorage) {
      this.setState({
        contacts: JSON.parse(contactsFromLocalStorage),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = this.state.contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleInputChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <h1 style={{ marginLeft: [' 800px '] }}>Phonebook</h1>
        <ContactsForm onFormSubmit={this.addContact} />
        <h1 style={{ marginLeft: '800px' }}>Contacts</h1>
        <Filter onInputChange={this.handleInputChange} />
        <ContactsList
          visibleContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
