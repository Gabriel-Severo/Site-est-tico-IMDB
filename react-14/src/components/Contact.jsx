import React from 'react';
import {format} from 'date-fns'

class Contact extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar" data-testid="contact-avatar">{this.props.data && <img src={this.props.data.avatar} alt={this.props.data.name}/>}</span>
        <span className="contact__data" data-testid="contact-name">{this.props.data && this.props.data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{this.props.data && this.props.data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{this.props.data && this.props.data.country}</span>
        <span className="contact__data" data-testid="contact-date">{this.props.data && format(new Date(this.props.data.admissionDate), 'dd/MM/yyyy')}</span>
        <span className="contact__data" data-testid="contact-company">{this.props.data && this.props.data.company}</span>
        <span className="contact__data" data-testid="contact-department">{this.props.data && this.props.data.department}</span>
			</article>
    );
  }
}

export default Contact;
