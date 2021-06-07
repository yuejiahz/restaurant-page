const menuContent = () =>{
    //image file name
    let imgArray=['katsucurry','ramen','sashimi','sushi2','takoyaki'];
    //image alt info
    let imgAltArray=['japanese-katsu-curry-chicken','japanese-ramen','sashimi','sushi assorted set','takoyaki'];
   //food price list
    let priceArray=[25,28,35,43,18];

    //create container 
    const menuContainer=document.createElement('div');
    //create menu title
    const menu=document.createElement('h1');
    menuContainer.appendChild(menu);
    menu.textContent='Menu';
    menu.style.textAlign='center';
    menu.style.lineHeight='1.5em';
    menu.style.margin='0.8em';
    menu.style.fontFamily=`"Monaco", "Lucida Console", monospace`;
  
    //generate list of food items
    for(let i=0;i<imgArray.length;i++){
        const foodList=document.createElement('div');
        const foodImage=document.createElement('img');
        const description=document.createElement('div');
        const price=document.createElement('div');

        foodList.appendChild(foodImage);
        foodList.appendChild(description);
        foodList.appendChild(price);
        menuContainer.appendChild(foodList);
        
        foodImage.style.display='inline';
        foodImage.setAttribute('alt',imgAltArray[i]);
        foodImage.src=`./img/${imgArray[i]}.jpg`;
        foodImage.style.width="14em";
        foodImage.style.height="12em";
        foodImage.style.borderRadius="6px";

        imgAltArray[i]=imgAltArray[i].replace(/-/g, ' ');
        imgAltArray[i]=imgAltArray[i].toUpperCase();
       
        description.textContent=`${imgAltArray[i]}`;
        price.textContent=`$${priceArray[i]}`
        description.style.fontFamily=`"Monaco", "Lucida Console", monospace`;
        price.style.fontFamily=`"Monaco", "Lucida Console", monospace`;
        description.style.width='9em';
        price.style.width='3em';
        description.style.lineHeight='1.2em';
        price.style.lineHeight='1em';
        description.style.padding='1em 1em 1em 3.5em';
        price.style.padding='1em';
        description.style.margin='auto';
        price.style.margin='auto';
        description.style.fontSize='1.2em';
        price.style.fontSize='1.2em';

        foodList.style.width='35em';
        foodList.style.margin='auto';
        foodList.style.display='flex';
        foodList.style.padding='1em';
        foodList.style.backgroundColor='beige';
        foodList.style.border='solid';
        foodList.style.borderRadius='10px';
    }
    menuContainer.style.margin='auto';
     return menuContainer; 
 } 
 
 export { menuContent }