import React from "react";

class Contacts extends React.Component {
	async componentDidMount(){
		const contacts = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then(value => value.json())
		this.props.setContacts(contacts)
	}

	render() {
		return (
			<div className="container">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{this.props.contacts.map(contact => {
						return (
							<article key={contact.id} className="contact">
								<span className="contact__avatar" >{contact.avatar ? <img src={contact.avatar} alt={contact.name}/>: null}</span>
								<span className="contact__data">{contact.name ? contact.name : null}</span>
								<span className="contact__data">{contact.phone ? contact.phone : null}</span>
								<span className="contact__data">{contact.country ? contact.country : null}</span>
								<span className="contact__data">{contact.admissionDate ? new Intl.DateTimeFormat('pt-BR').format(new Date(contact.admissionDate)) : null}</span>
								<span className="contact__data">{contact.company ? contact.company : null}</span>
								<span className="contact__data">{contact.department ? contact.department : null}</span>
							</article>
						)})}
				</section>
			</div>
		);
	}
}

export default Contacts;
