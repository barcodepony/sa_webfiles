
function delete_shop(element){
    var parent = element.parentElement.parentElement;
    var childs = parent.childNodes;
    var id = childs[3].innerHTML;
    console.log("deleting id: "+ id);

    $.ajax({
        type: "DELETE",
        url: "http://192.168.0.157:5000/api/shops/" + id,
        // The key needs to match your method's input parameter (case-sensitive).
        //data: JSON.stringify(shop),
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        failure: function(errMsg) {
            alert(errMsg);
        }
    });

    parent.parentNode.removeChild(parent);
    alert("Shop has been removed!");

}
