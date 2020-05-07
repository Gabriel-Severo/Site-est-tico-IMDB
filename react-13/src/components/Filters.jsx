import React from 'react';

class Filters extends React.Component {

	handleFilter(event, filter){
		event.preventDefault()
		document.querySelector('.is-selected').classList.remove('is-selected')
		if(event.target.tagName === 'I'){
			event.target.parentNode.classList.add('is-selected')
		}else{
			event.target.classList.add('is-selected')
		}
		this.props.setContacts(this.props.contacts.sort((a, b) => {
			if(a[filter] < b[filter]){
				return -1
			}
			if(a[filter] > b[filter]){
				return 1
			}
			return 0
		}))
	}

	render() {
		return (
			<div className="container">
			<section className="filters">
			  <div className="filters__search">
				<input type="text" className="filters__search__input" placeholder="Pesquisar" />
  
				<button className="filters__search__icon">
				  <i className="fa fa-search"/>
				</button>
			  </div>
  
			  <button onClick={event=> this.handleFilter(event, "name")} className="filters__item is-selected">
				Nome <i className="fas fa-sort-down" />
			  </button>
  
			  <button onClick={event=> this.handleFilter(event, "country")} className="filters__item">
				País <i className="fas fa-sort-down" />
			  </button>
  
			  <button onClick={event=> this.handleFilter(event, "company")} className="filters__item">
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button onClick={event=> this.handleFilter(event, "department")} className="filters__item">
				Departamento <i className="fas fa-sort-down" />
			  </button>
  
			  <button onClick={event=> this.handleFilter(event, "admissionDate")} className="filters__item">
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
		);
	}
}

export default Filters;
