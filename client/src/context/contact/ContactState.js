import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELTE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Bruce Wayne',
				email: 'notbatman@gotham.com',
				phone: '1-800-BATMAN',
				type: 'professional',
			},
			{
				id: 2,
				name: 'Clark Kent',
				email: 'kryptonitesucks@super.com',
				phone: '1-800-SUPERMAN',
				type: 'professional',
			},
			{
				id: 3,
				name: 'Peter Parker',
				email: 'maryjanelover@spidey.net',
				phone: '1-800-SPIDERS',
				type: 'personal',
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//Add contact

	//Delete contact

	//Set Current Contact

	//Clear current contact

	//Update current contact

	//Filter Contacts

	//Clear Filter(s)

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
