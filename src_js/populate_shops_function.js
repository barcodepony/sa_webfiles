function populate_shops_filtered(link, enable_map, poi_id=false, poi_range=250) {
    $.getJSON(link, function (data) {

        var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
        $.each(data, function (index, value) {
            arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
        });

        // EXTRACT VALUE FOR TABLE HEADER.
        var col = [];
        for (var i = 0; i < arrItems.length; i++) {
            for (var key in arrItems[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.id = "shops_table";

        if(typeof map != "undefined")
        {
            map.remove();
        }
        var container = L.DomUtil.get('mapid'); if(container != null){ container._leaflet_id = null; }
        var mymap = L.map('mapid').setView([47.076668, 15.421371], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmFyY29kZXBvbnkiLCJhIjoiY2pxZmVxc2hiNTN0MjQzdWwzZmh1bTRtNSJ9.eiW6Ij0rCVaINI4Iu7UIqg', {
           attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
           maxZoom: 18,
           id: 'mapbox.streets',
           accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

        //if(typeof poi_id == "number"){
        //    $.getJSON("http://0.0.0.0:5000/api/pois/"+poi_id, function (data) {
        //        var circle = L.circle([data["p_lat"], data["p_lon"]], {
        //            color: 'green',
        //            fillColor: '#A9F5A9',
        //            fillOpacity: 0.2,
        //            radius: poi_range
        //        }).addTo(mymap);
        //    });
        //}


        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        var arr_length = arrItems.length;
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < arrItems.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = arrItems[i][col[j]];

                if (enable_map && arr_length < 100){

                    var lat  = arrItems[i][col[4]];
                    var lon  = arrItems[i][col[5]];
                    var name  = arrItems[i][col[6]];
                    var marker = L.marker([lat, lon]).addTo(mymap).bindTooltip(name);
                }
                switch (j) {
                    case 0:
                        tabCell.setAttribute("data-field", "s_amenity");
                        break;
                    case 1:
                        tabCell.setAttribute("data-field", "s_category");
                        break;
                    case 2:
                        tabCell.setAttribute("data-field", "s_homepage");
                        break;
                    case 3:
                        tabCell.setAttribute("data-field", "s_id");
                        break;
                    case 4:
                        tabCell.setAttribute("data-field", "s_lat");
                        break;
                    case 5:
                        tabCell.setAttribute("data-field", "s_lon");
                        break;
                    case 6:
                        tabCell.setAttribute("data-field", "s_name");
                        var cell = tr.insertCell(-1);
                        cell.innerHTML = "<input type='button' onclick='delete_shop(this)' id='delete_shop_btn' value='Delete'>";
                        break;

                }
            }
        }
        var divContainer = document.getElementById("main_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    });
}



