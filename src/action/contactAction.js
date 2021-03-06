 import { ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_SELECTED_ITEM } 
 from '../constant/type';  
  
  // ACTIONS 
  export const addBook = (contact) =>{

    return{
      type : ADD_CONTACT,
      payload : contact 
    }

  }

  // GET A CONTACT 
  export const getContact = (id) => ({
  
      type : GET_CONTACT,
      payload : id 
      
  })

  // UPDATE CONTACT
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload : contact
  })

  // DELETE CONTACT
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload : id
  })
  
  // SELECT ALL CONTACT
  export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload : id
    
  })
  
  // CLEAR ALL CONTACT
  export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
     
  })

  // CLEAR_SELECTED_ITEM ALL CONTACT
  export const clearSelectedItem = () => ({
    type: DELETE_SELECTED_ITEM,
     
  })




  