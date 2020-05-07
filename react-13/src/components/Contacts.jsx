import React from "react";

class Contacts extends React.Component {

	constructor() {
		super()
		this.state = {contacts: []}
	}

	async componentDidMount(){
		const contacts = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then(value => value.json())
		this.setState({contacts: contacts})
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
					{this.state.contacts.map(contact => {
						return (
							<article key={contact.id} className="contact">
								<span className="contact__avatar" ><img src={contact.avatar} alt={contact.name}/></span>
								<span className="contact__data">{contact.name}</span>
								<span className="contact__data">{contact.phone}</span>
								<span className="contact__data">{contact.country}</span>
								<span className="contact__data">{contact.admissionDate}</span>
								<span className="contact__data">{contact.company}</span>
								<span className="contact__data">{contact.department}</span>
							</article>
						)})}
				</section>
			</div>
		);
	}
}

export default Contacts;
