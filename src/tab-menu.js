const menuContent = () =>{
    //image file name
    let imgArray=['katsucurry','ramen','sashimi','sushi2','takoyaki'];
    let imgAltArray=['japanese-katsu-curry-chicken','japanese-ramen','sashimi','sushi assorted set','takoyaki'];
    let priceArray=[25,28,35,43,18];

    //create container 
    const menuContainer=document.createElement('div');
    menuContainer.classList.add('menu-container');

    //create menu title
    const menu=document.createElement('h1');
    menu.classList.add('menu');

    menuContainer.appendChild(menu);
    menu.textContent='Menu';
   
  
    //generate list of food items
    for(let i=0;i<imgArray.length;i++){
        const foodList=document.createElement('div');
        const foodImage=document.createElement('img');
        const description=document.createElement('div');
        const price=document.createElement('div');

        foodList.classList.add('food-list');
        foodImage.classList.add('food-image');
        description.classList.add('description');
        price.classList.add('price');


        foodList.appendChild(foodImage);
        foodList.appendChild(description);
        foodList.appendChild(price);
        menuContainer.appendChild(foodList);
        
        foodImage.setAttribute('alt',imgAltArray[i]);
        foodImage.src=`./img/${imgArray[i]}.jpg`;
        description.textContent=`${imgAltArray[i]}`;
        price.textContent=`$${priceArray[i]}`


        imgAltArray[i]=imgAltArray[i].replace(/-/g, ' ');
        imgAltArray[i]=imgAltArray[i].toUpperCase();
       
    }
     return menuContainer; 
 } 
 
 export { menuContent }