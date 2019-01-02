
function delete_fav(element){
    var parent = element.parentElement.parentElement;
    var childs = parent.childNodes;
    var id = childs[1].innerHTML;
    console.log("deleting id: "+ id);

    $.ajax({
        type: "DELETE",
        url: "http://192.168.0.157:5000/api/favs/" + id,
        // The key needs to match your method's input parameter (case-sensitive).
        //data: JSON.stringify(shop),
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        failure: function(errMsg) {
            alert(errMsg);
        }
    });

    parent.parentNode.removeChild(parent);
    alert("Favourite has been removed!");

}
