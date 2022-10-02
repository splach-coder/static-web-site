$(document).ready(function(){
    $("#menu-bar").click(function(){
        tgle();
    })  

    $("#close-btn").click(function(){
        tgle();
    })
})


function tgle(){
    $("nav").toggleClass("toggle");
    $("body").toggleClass("toggled");
}