const contact =()=>{
//create elements for contact details
const contactContainer = document.createElement('div');
const contact = document.createElement('h1');
const email= document.createElement('p');
const phone= document.createElement('p');

contactContainer.appendChild(contact);
contactContainer.appendChild(email);
contactContainer.appendChild(phone);

contact.textContent="Contact us";
email.textContent="Email: oishijapaneserestaurant@feedback.com";
phone.textContent="Phone: +6042536434";

const contactDetail=contactContainer.childNodes;

for(var i=0;i<contactDetail.length;i++){
    contactDetail[i].style.fontFamily=`"Monaco", "Lucida Console", monospace`;
    contactDetail[i].style.textAlign='center';
}

contactContainer.style.margin='40px auto';
contactContainer.style.backgroundColor='white';
contactContainer.style.borderRadius='5px';
contactContainer.style.padding='10px';
contactContainer.style.width='35em';

return contactContainer;
}

export { contact }