import { menuContent} from './tab-menu.js'
import { info } from './tab-info.js'
import { contact } from './tab-contact.js'

//set DOM style of body
document.body.style.margin = '0';
document.body.style.display = 'block';
document.body.style.backgroundColor = '#F4E7D3';

//create image banner and change banner for different tabcd restaurant-page

function imageBanner(tabSelection){
    const banner = document.createElement('img');
    banner.classList.add('banner');
    banner.style.width = "100%";
    banner.style.height = "250px";
    banner.style.objectFit = "cover";
    
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

navBar.appendChild(tabInfo);
navBar.appendChild(tabMenu);
navBar.appendChild(tabContact);

navBar.style.margin = '30px auto auto auto';
navBar.style.display = 'block';
navBar.style.width = '312px';

tabInfo.textContent = "Info";
tabMenu.textContent = "Menu";
tabContact.textContent = "Contact";

const tabs = navBar.childNodes;
for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'inline-block';
    tabs[i].style.backgroundColor = "white";
    tabs[i].style.textAlign = "center";
    tabs[i].style.width = "80px";
    tabs[i].style.padding = "10px";
    tabs[i].style.border = "solid 2px";
    tabs[i].style.position='relative';
    tabs[i].style.zIndex='1';
    tabs[i].style.fontFamily = `"Monaco", "Lucida Console", monospace`;
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
    

