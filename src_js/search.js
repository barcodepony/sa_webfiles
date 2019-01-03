$(document).ready(function() {
    $("#search_button").click(function () {

        shop_filtering();
    });

    $("#name").keypress(function(){
        shop_filtering();
    });

    $("#poi").change(function(){
        shop_filtering();
    });
    $("#category").change(function(){
        shop_filtering();
    });

    $("#poi_range").keypress(function(){
        var r_enabled = $("#poi_range").val();
        if(r_enabled == "")
            return;
        shop_filtering();
    });


});

function shop_filtering(){
    var filter_name = $("#name_checkbox:checked").val()?true:false;
    var filter_category = $("#category_checkbox:checked").val()?true:false;
    var filter_poi = $("#poi_checkbox:checked").val()?true:false;

    var api_query = "http://0.0.0.0:5000/api/shops";
    if (!filter_name && !filter_category && !filter_poi)
    {
        populate_shops_filtered(api_query);
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
        if(filter_poi)
        {
            if($("#poi_range").val() == "")
            {
                $("#poi_range").val(250); //Default value
            }

            var range = $("#poi_range").val();
            var poi = $("#poi").val();
            var id = poi.substring(
                poi.lastIndexOf("(") + 1,
                poi.lastIndexOf(")")
            );
            if(query_exists)
                api_query+="&";
            query_exists=true;
            api_query+="poi="+id+"&range="+range;
        }

        populate_shops_filtered(api_query);
    }
}