import React from 'react';

class Filters extends React.Component {

	sortList(array, filter, reverse){
		return array.sort((a, b) => {
			if(a[filter] < b[filter])
				return reverse ? 1 : -1
			if(a[filter] > b[filter])
				return reverse ? -1 : 1
			return 0
		})
	}

	handleFilter(event, filter){
		event.preventDefault()
		let target = event.target
		document.querySelector('.is-selected').classList.remove('is-selected')
		if(target.tagName === 'I'){
			target.parentNode.classList.add('is-selected')
			target = target.parentNode
		}else{
			target.classList.add('is-selected')
		}
		if(target.classList.contains('invert__item')){
			this.props.setContacts(this.sortList(this.props.contacts, filter, true))
			target.classList.remove('invert__item')
		}else{
			this.props.setContacts(this.sortList(this.props.contacts, filter, false))
			target.classList.add('invert__item')
		}
	}

	handleSearch(event){
		event.preventDefault()
		const text = event.target.value
		this.props.setContacts(this.props.list.filter(contact => {
			return new RegExp(text, 'i').test(contact.name)
		}))
	}

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
					<input onChange={e => this.handleSearch(e)} type="text" className="filters__search__input" placeholder="Pesquisar" />

					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
					</div>

					<button onClick={e => this.handleFilter(e, "name")} className="filters__item is-selected">
					Nome <i className="fas fa-sort-down" />
					</button>

					<button onClick={e => this.handleFilter(e, "country")} className="filters__item">
					País <i className="fas fa-sort-down" />
					</button>

					<button onClick={e => this.handleFilter(e, "company")} className="filters__item">
					Empresa <i className="fas fa-sort-down" />
					</button>

					<button onClick={e => this.handleFilter(e, "department")} className="filters__item">
					Departamento <i className="fas fa-sort-down" />
					</button>

					<button onClick={e => this.handleFilter(e, "admissionDate")} className="filters__item">
					Data de admissão <i className="fas fa-sort-down" />
					</button>
          		</section>
        	</div>
		);
	}
}

export default Filters;
