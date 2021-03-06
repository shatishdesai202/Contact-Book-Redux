import React from 'react';
import Avatar from 'react-avatar';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../action/contactAction';

function ContactList( { contact, selectAll }   ) {

    const dispatch = useDispatch();

    const {  name, phone, email, id} = contact;
    
    return (

        <>
            <tr>
                <th scope="row"> <input checked={selectAll} type="checkbox" /></th>
                
                <td> <Avatar name={name} size="45" round={true}/>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td className="action"> 
                    
                    <Link to={`/contact/EditContact/${id}`} className="m-3" > 
                        <span className="iconify" data-icon="uil-edit" data-inline="false"></span>
                    </Link>

                
                    <button onClick={ () => dispatch(deleteContact(id)) }>
                        <span className="iconify" data-icon="ic-baseline-remove-circle" data-inline="false"> </span>
                    </button>

                </td>
            </tr>
        </>
        
    )
}

export default ContactList