import React, {useState} from 'react';

import { useDispatch } from 'react-redux';

import '../app.css';

import { addBook } from '../action/contactAction';

import shortid from 'shortid';

import { useHistory } from 'react-router-dom';


function AddContact() {

    let history = useHistory();

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) =>{

        e.preventDefault();

        const New_Contact = {
            id: shortid.generate(),
            name: name,
            email : email,
            phone : phone
        }

        dispatch(addBook(New_Contact));
        history.push('/');

    }

    
    return (

        <div className="container">
            <form onSubmit={ e => handleSubmit(e) }>
            
            <div className="form-group">    
                <input type="text" value={name} onChange={e =>  setName(e.target.value) }    className="form-control"  placeholder="John Due" />
            </div>
            
            <div className="form-group">    
                <input type="email" value={email} onChange={e =>  setEmail(e.target.value) } className="form-control"  placeholder="name@example.com" />
            </div>

            <div className="form-group">    
                <input  value={phone} onChange={e =>  setPhone(e.target.value) } type="number" className="form-control"  placeholder="8989898998" />
            </div>

            <div className="form-group">    
                <input className="btn btn-success"  type="submit" value="create new contact" />
            </div>
            
            </form>
        </div>
    )
}

export default AddContact