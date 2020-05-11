import React from "react";
import Contact from './Contact'

class Contacts extends React.Component {
	render() {
		return (
			<div className="container" data-testid="contacts">
          		<section className="contacts">
					<article className="contact" data-testid="contact">
						<span className="contact__avatar" data-testid="contact-avatar"/>
						<span className="contact__data" data-testid="contact-name">Nome</span>
						<span className="contact__data" data-testid="contact-phone">Telefone</span>
						<span className="contact__data" data-testid="contact-country">País</span>
						<span className="contact__data" data-testid="contact-date">Admissão</span>
						<span className="contact__data" data-testid="contact-company">Empresa</span>
						<span className="contact__data" data-testid="contact-department">Departamento</span>
					</article>
					{this.props.contacts.map(contact => (<Contact key={contact.id} contact={contact}/>))}
				</section>
        	</div>
		);
	}
}

export default Contacts;
