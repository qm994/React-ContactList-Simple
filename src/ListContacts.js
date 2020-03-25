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
        onDeleteContact: PropTypes.func.isRequired,
        onNavigate: PropTypes.func.isRequired
    };

    state = {
        query: ""
    };

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    };

    clearQuery = () => {
        this.updateQuery("");
    }

    render(){
        const {query} = this.state;
        const {contacts, onDeleteContact, onNavigate} = this.props;

        const showingContacts = query === ""
            ? contacts
            : contacts.filter((contact) => (
                contact.name.toLowerCase().includes(query.toLowerCase())
            ) );


        return(
            <div className="list-contacts">
                {JSON.stringify(this.state)}
                <div className="list-contacts-top">
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={query}
                        onChange={(event) => {this.updateQuery(event.target.value)}}
                    />

                    <a 
                        href="#create"
                        className="add-contact"
                        onClick={onNavigate}>
                        Add Contact
                    </a>
                </div>
                {showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>
                            Now showing {showingContacts.length} of {contacts.length}
                        </span> 
                        <button onClick={this.clearQuery}> Show All </button>                     
                    </div>
                )}
                <ol className='contact-list'>
                    {showingContacts.map((contact) => (
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
                                onClick = {() => {onDeleteContact(contact)}}
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