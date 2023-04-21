document.getElementById("button").onclick = function getMaxTemp(){
    const dateInput = document.getElementById("userDate").value;
    const date = new Date(dateInput);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString();
    const day = (date.getDate() + 1).toString();
    const formattedDate = `${year}.${month}.${day}`;
    console.log(formattedDate); 

    fetch("https://api.weather.gc.ca/collections/climate-daily/items/1152850."+formattedDate.toString())
        .then(response => response.text())
        .then(result => {
            const parsedData = JSON.parse(result);
            console.log(parsedData.properties.MAX_TEMPERATURE);
            const dataContainer = document.getElementById('box1');
            const dataElement = document.createElement('p');
            dataElement.textContent = parsedData.properties.MAX_TEMPERATURE;
            dataContainer.appendChild(dataElement); 

            const dataContainer2 = document.getElementById('box2');
            const dataElement2 = document.createElement('p');
            dataElement2.textContent = parsedData.properties.LOCAL_DATE;
            dataContainer2.appendChild(dataElement2); 
        })
        .catch(error => console.log('error', error));
}