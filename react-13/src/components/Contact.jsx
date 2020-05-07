import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact">
        <span className="contact__avatar" >{this.props.contact.avatar ? <img src={this.props.contact.avatar} alt={this.props.contact.name}/>: null}</span>
        <span className="contact__data">{this.props.contact.name ? this.props.contact.name : null}</span>
        <span className="contact__data">{this.props.contact.phone ? this.props.contact.phone : null}</span>
        <span className="contact__data">{this.props.contact.country ? this.props.contact.country : null}</span>
        <span className="contact__data">{this.props.contact.admissionDate ? new Intl.DateTimeFormat('pt-BR').format(new Date(this.props.contact.admissionDate)) : null}</span>
        <span className="contact__data">{this.props.contact.company ? this.props.contact.company : null}</span>
        <span className="contact__data">{this.props.contact.department ? this.props.contact.department : null}</span>
			</article>
    );
  }
}

export default Contact;
