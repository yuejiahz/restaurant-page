const contact =()=>{
//create elements for contact details
const contactContainer = document.createElement('div');
const contact = document.createElement('h1');
const email= document.createElement('p');
const phone= document.createElement('p');

contactContainer.classList.add('contact-container');
contact.classList.add('contact');
email.classList.add('email');
phone.classList.add('phone');

contactContainer.appendChild(contact);
contactContainer.appendChild(email);
contactContainer.appendChild(phone);

contact.textContent="Contact us";
email.textContent="Email: oishijapaneserestaurant@feedback.com";
phone.textContent="Phone: +6042536434";

return contactContainer;
}

export { contact }