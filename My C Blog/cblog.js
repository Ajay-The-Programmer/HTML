function historyFunction(x) {

    if (x == 'YouTube') {
        alert("Our YouTube channel is comming soon, Sorry ");
    } else {
        alert(x + " Tutorial is uploading soon, Sorry ");
    }
}

// x.style.display = "none";


$(document).ready(function() {
    $(".content").click(function() {

        $(".cprogramming").slideToggle();

    })
});

// function showcontent() {


//     let x = document.getElementsByClassName("cprogramming")[0]

//     console.log(x.style.display);
//     if (x.style.display === "none") {


//         x.style.display = "block ";
//     } else {
//         x.style.display = "none ";
//     }
// }