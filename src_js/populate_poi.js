$(document).ready(function () {
    $.getJSON("http://0.0.0.0:5000/api/pois/dict", function(data){
        $.each(data, function (i, value) {
           $('<option>' + value +"("+  i  +")" + '</option>').appendTo('#poi');
        });
    });
});