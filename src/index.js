import { menuContent} from './tab-menu.js';
import { info } from './tab-info.js';
import { contact } from './tab-contact.js';
import './style.css';



//create image banner and change banner for different tab restaurant-page
function imageBanner(tabSelection){
    const banner = document.createElement('img');
    banner.classList.add('banner');
  
    if(tabSelection=='info'||!tabSelection){
        banner.src = './img/japrestout.jpg';
        banner.alt = 'japanese-restaurant-exterior';
    }
    else if(tabSelection) {
        banner.src = './img/japrest.jpg';
        banner.alt = 'japanese-restaurant-interior';
    } 
    return banner;
}

//create navigation bar elements 
const navBar = document.createElement('div');
const tabInfo = document.createElement('div');
const tabMenu = document.createElement('div');
const tabContact = document.createElement('div');

navBar.classList.add('nav-bar');
tabInfo.classList.add('tab-info');
tabMenu.classList.add('tab-menu');
tabContact.classList.add('tab-contact');

navBar.appendChild(tabInfo);
navBar.appendChild(tabMenu);
navBar.appendChild(tabContact);

tabInfo.textContent = "Info";
tabMenu.textContent = "Menu";
tabContact.textContent = "Contact";

const navItem = navBar.childNodes;
for (var i = 0; i < navItem.length; i++) {
    navItem[i].classList.add('nav-item');
};

//create footer
const footer = document.createElement('div');
footer.textContent = "created by MoonJi <3";
footer.style.padding = '2em';
    
//choose which page to load
function pageSelection(tabSelection) {
    const elements = document.createElement('div');
    elements.classList.add('elements');

    if(tabSelection=='info'||!tabSelection){
    elements.appendChild(info());
    }
    if(tabSelection=='menu'){
    elements.appendChild(menuContent());
    } 
     if(tabSelection=='contact'){
    elements.appendChild(contact());
    }
    return elements;
}

//append elements to body 
function reattachElements(tabSelection){
    document.body.appendChild(imageBanner(tabSelection));
    document.body.appendChild(navBar);
    document.body.appendChild(pageSelection(tabSelection));
    document.body.appendChild(footer);
}

imageBanner();
reattachElements();

//add event listener to info tab 
tabInfo.addEventListener('click',function (){
    const elements=document.querySelector('.elements');
    const banner=document.querySelector('.banner');
    elements.remove();
    banner.remove();
    reattachElements('info');
    });

//add event listener to menu tab 
tabMenu.addEventListener('click',function (){
    const elements=document.querySelector('.elements');
    const banner=document.querySelector('.banner');
    elements.remove();
    banner.remove();
    reattachElements('menu');
    });

//add event listener to contact tab 
tabContact.addEventListener('click',function (){
    const elements=document.querySelector('.elements');
    const banner=document.querySelector('.banner');
    elements.remove();
    banner.remove();
    reattachElements('contact');
    });
    

