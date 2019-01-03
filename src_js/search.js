$(document).ready(function() {
    $("#search_button").click(function () {

        shop_filtering(true);
    });

    $("#name").keypress(function(){
        shop_filtering(false);
    });

    $("#poi").change(function(){
        shop_filtering(false);
    });
    $("#category").change(function(){
        shop_filtering(false);
    });

    $("#poi_range").keypress(function(){
        var r_enabled = $("#poi_range").val();
        if(r_enabled == "")
            return;
        shop_filtering(false);
    });


});

function shop_filtering(enable_map){
    var filter_name = $("#name_checkbox:checked").val()?true:false;
    var filter_category = $("#category_checkbox:checked").val()?true:false;
    var filter_poi = $("#poi_checkbox:checked").val()?true:false;

    var api_query = "http://0.0.0.0:5000/api/shops";
    if (!filter_name && !filter_category && !filter_poi)
    {
        populate_shops_filtered(api_query, enable_map, false, false);
    }
    else
    {
        var query_exists = false;
        api_query += "?";
        if(filter_name)
        {
            if(query_exists)
                api_query+="&";
            query_exists=true;
            var name = $("#name").val();
            //alert(name);
            api_query+="name="+name;
        }
        if(filter_category)
        {
            if(query_exists)
                api_query+="&";
            query_exists=true;
            var category = $("#category").val();
            //alert(category);
            api_query+="category="+category;
        }
        var poi_id;
        var poi_range;
        if(filter_poi)
        {
            alert("filter_with_poi");
            if($("#poi_range").val() == "")
            {
                $("#poi_range").val(250); //Default value
            }

            poi_range = $("#poi_range").val();
            var poi = $("#poi").val();
            poi_id = poi.substring(
                poi.lastIndexOf("(") + 1,
                poi.lastIndexOf(")")
            );
            if(query_exists)
                api_query+="&";
            query_exists=true;
            api_query+="poi="+poi_id+"&range="+poi_range;
        }

        if(filter_poi)
        {
            populate_shops_filtered(api_query, enable_map, parseInt(poi_id), parseInt(poi_range));
        }
        populate_shops_filtered(api_query, enable_map, false, false);
    }
}