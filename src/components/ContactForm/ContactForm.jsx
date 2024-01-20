import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  hndlSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });

    this.reset();
  };

  hndlChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <Form onSubmit={this.hndlSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hndlChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$'"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.hndlChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
