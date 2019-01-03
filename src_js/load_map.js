
function initMap() {
    var mymap = L.map('mapid').setView([47.076668, 15.421371], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmFyY29kZXBvbnkiLCJhIjoiY2pxZmVxc2hiNTN0MjQzdWwzZmh1bTRtNSJ9.eiW6Ij0rCVaINI4Iu7UIqg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    var circle = L.circle([47.076668, 15.421371], {
        color: 'gray',
        fillColor: '#f03',
        fillOpacity: 0.1,
        radius: 1500
    }).addTo(mymap);

    var marker = L.marker([47.066756,15.4395729]).addTo(mymap).bindTooltip("Hello");
    var marker = L.marker([47.0685423,15.4403165]).addTo(mymap);
    var marker = L.marker([47.1212028,15.4244301]).addTo(mymap);
}

$(document).ready(function () {
    initMap();
});
