import { Ul, Li, Button } from './ContactsList.styled';

const ContactsList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <Ul >
      {visibleContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactsList;
