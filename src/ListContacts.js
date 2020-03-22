import React, { Component } from 'react';
import PropTypes from "prop-types";

// function ListContacts(props){
//      return(
//         <ol className='contact-list'>
//         {props.contacts.map((contact) => (
//             <li key={contact.id} className="contact-list-item">
//                 <div 
//                 className="contact-avatar"
//                 // fist pair of curly braces for JS and second one for the object
//                 style={{
//                     backgroundImage: `url(${contact.avatarURL})`
//                 }}>
//                 </div>

//                 <div className="contact-details">
//                     <p>{contact.name}</p>
//                     <p>{contact.handle}</p>
//                 </div>

//                 <button 
//                     onClick = {() => {props.onDeleteContact(contact)}}
//                     className="contact-remove">
//                     Remove 
//                 </button>
                
//             </li>
//         ))
//         }
//      </ol>
//      )
// }; 


class ListContacts extends React.Component{
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ""
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    render(){
        return(
            <div className="list-contacts">
                {JSON.stringify(this.state)}
                <div className="list-contacts-top">
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={this.state.query}
                        onChange={(event) => {this.updateQuery(event.target.value)}}
                    />
                </div>
                <ol className='contact-list'>
                    {this.props.contacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div 
                            className="contact-avatar"
                            // fist pair of curly braces for JS and second one for the object
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}>
                            </div>

                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>

                            <button 
                                onClick = {() => {this.props.onDeleteContact(contact)}}
                                className="contact-remove">
                                Remove 
                            </button>
                        </li>
                ))}
                </ol>
            </div>
            
        )
    }
}


// class ListContacts extends Component {
//      render(){
//          console.log("Props", this.props.contacts)
//          return(
//              <ol className='contact-list'>
//                 {this.props.contacts.map((contact) => (
//                     <li key={contact.id} className="contact-list-item">
//                         <div 
//                         className="contact-avatar"
//                         // fist pair of curly braces for JS and second one for the object
//                         style={{
//                             backgroundImage: `url(${contact.avatarURL})`
//                         }}>
//                         </div>

//                         <div className="contact-details">
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                         </div>

//                         <button className="contact-remove">
//                             Remove 
//                         </button>
                        
//                     </li>
//                 ))
//                 }
//              </ol>
//          )

//      }
// };

export default ListContacts;