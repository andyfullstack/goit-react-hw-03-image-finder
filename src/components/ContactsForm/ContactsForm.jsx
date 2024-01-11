import { Component } from 'react';
import { Form, Input, Button } from './ContactsForm.styled';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    e.target.reset();
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit} style={{ margin: 'auto' }}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          onChange={this.onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <label htmlFor="number">Contact Number</label>
        <Input
          type="tel"
          name="number"
          onChange={this.onInputChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactsForm;
