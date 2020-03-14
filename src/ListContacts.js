import React, { Component } from 'react';

class ListContacts extends Component {
     render(){
         console.log("Props", this.props.contacts)
         return(
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

                        <button className="contact-remove">
                            Remove
                        </button>
                        
                    </li>
                ))
                }
             </ol>
         )

     }
};

export default ListContacts;