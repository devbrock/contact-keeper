import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from '../contacts/ContactItem';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts } = contactContext;

	return (
		<div>
			{contacts.map(contact => (
				<ContactItem contact={contact} key={contact.id} />
			))}
		</div>
	);
};

export default Contacts;
