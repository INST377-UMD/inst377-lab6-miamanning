
function createMap() {
    var map = L.map('map').setView([38.7946, -106.5348], 4);

   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //Generate random coordinates and store in variables
    var lat1 = getRandomInRange(30, 35, 3);
    var lat2 = getRandomInRange(30, 35, 3);
    var lat3 = getRandomInRange(30, 35, 3);

    var long1 = getRandomInRange(-90, -100, 3);
    var long2 = getRandomInRange(-90, -100, 3);
    var long3 = getRandomInRange(-90, -100, 3);

    //Add map markers
    var marker1 = L.marker([lat1, long1]).addTo(map);
    var marker2 = L.marker([lat2, long2]).addTo(map); 
    var marker3 = L.marker([lat3, long3]).addTo(map);

    //Make three fetch requests to API, passing the three generated coordinate pairs into query string
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat1}&longitude=${long1}&localityLanguage=en`)
        .then((resp) => resp.json())
        .then((data) => {
            const loc1 = data.locality;

            var updateM1 = document.getElementById('mark1');
            var updateLoc1 = document.getElementById('loc1');

            updateM1.innerHTML =  "Marker 1: Latitude: " + lat1 + ", Longitude: " + long1;
            updateLoc1.innerHTML = "Locality: " + loc1; 
        })


    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${long2}&localityLanguage=en`)
        .then((resp) => resp.json())
        .then((data) => {
            const loc2 = data.locality;

            var updateM2 = document.getElementById('mark2');
            var updateLoc2 = document.getElementById('loc2');

            updateM2.innerHTML =  "Marker 2: Latitude: " + lat2 + ", Longitude: " + long2;
            updateLoc2.innerHTML = "Locality: " + loc2; 
        })


    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat3}&longitude=${long3}&localityLanguage=en`)
        .then((resp) => resp.json())
        .then((data) => {
            const loc3 = data.locality;

            var updateM3 = document.getElementById('mark3');
            var updateLoc3 = document.getElementById('loc3');

            updateM3.innerHTML =  "Marker 3: Latitude: " + lat3 + ", Longitude: " + long3;
            updateLoc3.innerHTML = "Locality: " + loc3; 
        })    
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

window.onload = createMap;
