$(document).ready(function() {
    $("#safe_btn").click(function () {

        var name = $("#name").val();
        var category = $("#category").val();
        var poi = $("#poi").val();
        var poi_range = $("#poi_range").val();
        var label = $("#fav_title").val();


        if(poi_range == "")
        {
            poi_range = 250;
        }
        var fav = {
            "f_category": category,
            "f_poi": poi,
            "f_name": name,
            "f_range": parseInt(poi_range),
            "f_label": label
        };

        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5000/api/favs",
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify(fav),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){alert(data);},
            failure: function(errMsg) {
                alert(errMsg);
            }
        });

    });
});