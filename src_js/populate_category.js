$(document).ready(function () {
    $.getJSON("http://0.0.0.0:5000/api/shops/category", function(data){
        $.each(data, function (i, value) {
           $('<option>' + value + '</option>').appendTo('#category');
        });
    });
});