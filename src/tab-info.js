const info = () => {
  //create header of restaurant name
  const infoContainer=document.createElement('div');

  const header=document.createElement('h1');
  const content = document.createElement("p");
  const hours = document.createElement("p");
  const location = document.createElement("p");

  infoContainer.appendChild(header);
  infoContainer.appendChild(content);
  infoContainer.appendChild(hours);
  infoContainer.appendChild(location);

  header.style.fontFamily=`"Monaco", "Lucida Console", monospace`;
  header.style.textAlign = "center";
  header.style.lineHeight='1.5em';

  const infoList=infoContainer.childNodes;
  for(var i=1;i<infoList.length;i++){
   infoList[i].style.fontFamily=`"Monaco", "Lucida Console", monospace`;
   infoList[i].style.textAlign = "justify";
   infoList[i].style.lineHeight='1.5em';
   infoList[i].style.margin='30px auto auto auto';
   infoList[i].style.width='35em';
  }

  header.textContent='OISHI JAPANESE RESTAURANT';
  content.textContent=  `OISHI JAPANESE RESTAURANT is one of our favourite Japanese restaurants in town,
                      and is the place to head to if you're looking to pamper yourself or your loved ones to some good 
                      food. Oishi offers variety of authentic japanese food includes sushi, ramen, and katsu curry chicken. 
                      in from the famous Tsukiji Fish Market in Tokyo twice a week, then executed by professional chefs 
                      with years of experience under their belts. They also get plus points for their classy yet cosy 
                      interior and intimate vibe that's great for date nights or hangouts with friends.`;

  hours.textContent="Opening Hours: Tuesday to Sunday, 10a.m. to 10p.m."
  location.textContent="Address: Vipod Residences, Ground Floor Block C-1, No 6, Jalan Kia Peng, Kuala Lumpur, 50450 Kuala Lumpur, Malaysia";

  /* 
    // Initialize and add the map
function initMap() {
    const maps=document.createElement('div');

    // The location of restaurant
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(maps), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at restaurant
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  } */
    
    return infoContainer;
}

export { info }