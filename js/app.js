baguetteBox.run('#gallery')

function searchFilter() {
    let input;
    let filter;
    let div;
    let li;
    let a; 
    let i; 
    let txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("gallery");
    li = div.getElementsByClassName("photo");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0].getAttribute("data-caption");
        txtValue = a;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


