import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar" data-testid="contact-avatar"><img src={this.props.contact.avatar} alt={this.props.contact.name}/></span>
        <span className="contact__data" data-testid="contact-name">{this.props.contact.name}</span>
        <span className="contact__data" data-testid="contact-phone">{this.props.contact.phone}</span>
        <span className="contact__data" data-testid="contact-country">{this.props.contact.country}</span>
        <span className="contact__data" data-testid="contact-date">{this.props.contact.admissionDate}</span>
        <span className="contact__data" data-testid="contact-company">{this.props.contact.company}</span>
        <span className="contact__data" data-testid="contact-department">{this.props.contact.department}</span>
			</article>
    );
  }
}

export default Contact;
