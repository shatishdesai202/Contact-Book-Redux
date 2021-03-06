import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import '../app.css';

import { addBook, getContact, updateContact } from '../action/contactAction';

import shortid from 'shortid';

import { useHistory, useParams } from 'react-router-dom';


function EditContact() {

    let history = useHistory();

    let { id } = useParams();

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const contact = useSelector( (state) => state.contacts.contactX);

    useEffect( ()=>{

        if(contact != null){
            
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        
        
        dispatch(getContact(id));

    }, [contact]);



    const onUpdateContact = (e) =>{
        e.preventDefault();

        const update_contact = Object.assign( contact, { name:name, email: email, phone: phone } );

        dispatch(updateContact(update_contact));
        history.push('/');
    }

    return (

        <div className="container">

            <form onSubmit={ e => onUpdateContact(e) }>
            
            <div className="form-group">    
                <input type="text" value={name} onChange={e =>  setName(e.target.value) }    className="form-control"  placeholder="John Due" />
            </div>
            
            <div className="form-group">    
                <input type="email" value={email} onChange={e =>  setEmail(e.target.value) } className="form-control"  placeholder="name@example.com" />
            </div>

            <div className="form-group">    
                <input  value={phone} onChange={e =>  setPhone(e.target.value) } type="text" className="form-control"  placeholder="8989898998" />
            </div>

            <div className="form-group">    
                <input className="btn btn-secondary"  type="submit" value="Update contact" />
            </div>
            
            </form>
        
        </div>
    )
}

export default EditContact;
