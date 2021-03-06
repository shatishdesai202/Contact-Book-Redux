import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ContactList from './ContactList';

import {selectAllContact, clearAllContact, clearSelectedItem} from '../action/contactAction';


function Contact() {

    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();


    const contacts = useSelector( (state) => state.contacts.contact )
    console.log(contacts)

    const selectedContacts = useSelector( (state) => state.contacts.selectedContact)
    
    console.log(selectedContacts);
    

    console.log(contacts);

    useEffect( ()=>{
        if(selectAll){
            dispatch(selectAllContact( contacts.map( (contact)=> contact.id ) ))
        }else{
            dispatch( clearAllContact() )
        }
    }, [selectAll])

    return (
        <>
            {
                
                selectedContacts.length > 0 ? <button onClick={ () => {dispatch(clearSelectedItem())}  } className="btn btn-danger m-3 " > delete All </button> : null
            }
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>
                            <input value={selectAll} onClick={ () => setSelectAll(!selectAll ) } id="selectAll" type="checkbox" />
                        </th>

                        
                        <th>Name</th>
                        
                        <th>Contact No</th>
                        
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contacts.map( contact => (
                            <ContactList key={contact.id}  contact = {contact}  selectAll={ selectAll }  />
                        ))
                    }
                                    
                </tbody>
            </table>
        </>
    )
}

export default Contact
