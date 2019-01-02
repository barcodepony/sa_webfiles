$(document).ready(function () {
    $.getJSON("http://192.168.0.157:5000/api/pois/dict", function(data){
        $.each(data, function (i, value) {
           $('<option>' + value +"("+  i  +")" + '</option>').appendTo('#poi');
        });
    });
});