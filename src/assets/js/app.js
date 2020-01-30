const  storage = window.localStorage
let contactToUpdate

const  renderContacts = () => {
  const  contacts = JSON.parse(storage.getItem('contacts'))
  let  div = document.querySelector('#contact-list')
  if (contacts) {
	div.innerHTML = ''

    i = 0
	contacts.forEach(contact  => {
		if(contactToUpdate == i){
			console.log("Printed out a update form instead")
			var newDiv = document.createElement("div");
			newDiv.classList.add("contact-card");
			newDiv.innerHTML = `
				<form id="contact-form">
					<label for="updateName">Name</label>
					<input id="updateName" name="name" type="text" value="${contact.name}"></br>
					<label for="updateEmail">Email</label>
					<input id="updateEmail" name="email" type="text" value="${contact.email}"></br>
					<label for="updatePhone">Phone</label>
					<input id="updatePhone" name="phone" type="text" value="${contact.phone}"></br>
					<label for="updateCompany">Company</label>
					<input id="updateCompany" name="company" type="text" value="${contact.company}"></br>
					<label for="updateNotes">Notes</label>
					<input id="updateNotes" name="notes" type="text" value="${contact.notes}"></br>
					<label for="updateTwitter">Twitter</label>
					<input id="updateTwitter" name="twitter" type="text" value="${contact.twitter}"></br>
					<input id="updateSubmit" type="submit" value="Update contact">
				</form>`
			div.appendChild(newDiv)
		}else{
				var newDiv = document.createElement("div");
				newDiv.classList.add("contact-card");
				newDiv.innerHTML = `
				
				<div class="icon">
				</div><div class="contact-name">${contact.name}</div>
				<div class="contact-email">${contact.email}</div>
				<div class="contact-phone">${contact.phone}</div>
				<div class="contact-company">${contact.company}</div>
				<div class="contact-notes">${contact.notes}</div>
				<div class="contact-twitter">@${contact.twitter}</div>
				
				<input type="button" value="Delete" id="deleteButton" class="deleteButton" onclick="RemoveContact('${i}')"/>
				`
				// <input type="button" value="Update" id="updateButton" class="updateButton" onclick="updateContact(${i})"/>  for when update function works
				div.appendChild(newDiv)
				}
        	i++;
	  })
	} else {
	  div.innerHTML = '<p>You have no contacts in your address book</p>'
	}
}

document.addEventListener('DOMContentLoaded', () => {
	renderContacts()
	const  contactForm = document.getElementById('contact-form')
	const  toggleFormVisibilityButton = document.getElementById('add-contact')
	contactForm.style.display = 'none'
 
	toggleFormVisibilityButton.addEventListener('click', () => {
		if (contactForm.style.display === '') {
			contactForm.style.display = 'none'
		} else {
			contactForm.style.display = ''
		}
	})
	
		contactForm.addEventListener('submit', event  => {
			event.preventDefault()
			console.log("ContactForm.addEventListener")

			// 1. Read all the input fields and get their values
			const { name, email, phone, company, notes, twitter } = contactForm.elements
	
			const contact = {
				name:  name.value,
				email:  email.value,
				phone:  phone.value,
				company:  company.value,
				notes:  notes.value,
				twitter:  twitter.value
			}
		
			let contacts = JSON.parse(storage.getItem('contacts')) || []
			contacts.push(contact)
			// 2. Save them to our storage
			storage.setItem('contacts', JSON.stringify(contacts))
			renderContacts()
			contactForm.reset()
	   })
})

const RemoveContact = (idToBeRemoved) => {
	let newContacts = JSON.parse(storage.getItem('contacts'))
	newContacts.splice(idToBeRemoved, 1);
	storage.clear()
    storage.setItem('contacts', JSON.stringify(newContacts))
    renderContacts()
}

const RemoveAllContact = () => {
    storage.clear()
    renderContacts()
}

const updateContact = (id) => {
	contactToUpdate = id
	console.log("Set contactToUpdate to:" +id )
	renderContacts()
}