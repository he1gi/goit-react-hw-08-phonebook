import Section from 'components/Section';
import Form from 'components/Form';
import Filteration from 'components/Filtration';
import Contacts from 'components/Contacts';

function ContactsPage() {
  return (
    <Section title="PhoneBook">
      <div>
        <Form />
        <h2 className="titleContacts">Contacts</h2>
        <Filteration />
        <Contacts />
      </div>
    </Section>
  );
}
export default ContactsPage;
