$(document).ready(function(){
    $("#menu-bar").click(function(){
        tgle();
    })  

    $("#close-btn").click(function(){
        tgle();
    })

    // js code for the images slider
    $(".box:first-child .slides span").click(function(){
        rmv();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else{
            $(this).addClass("active");
        }


        const imgnumber = $(this).find("img").attr("data-img");
        
        var imglink = "images/image-product-" + imgnumber + ".jpg";

        $("#showimg").attr("src", imglink)
        
    })

    //js code for the quantity
    $("#plus").click(function(){
        var nbr = $(this).parent().find("#number").text();
        $(this).parent().find("#number").text(++nbr)
    })
    $("#minus").click(function(){
        var nbr = $(this).parent().find("#number").text();
        if(nbr > 0)
            $(this).parent().find("#number").text(--nbr)
        else
            alert("no")
    })


    // Ripple animation
    let buttons = document.querySelector;

    
    $(".box .addToCart").click(function(e){

        const x = e.pageX - $(this).offset().left;
        const y = e.pageY - $(this).offset().top;

        console.log(`${x} -- ${y}`);

        const ripple = document.createElement('span');
        ripple.classList.add("ripple");

        ripple.style.left = `${x}px`;
        ripple.style.top  = `${y}px`;

        $(this).append(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000)
    })



    //animation js
    $("header li a").click(function(){

        $("header li a").each(function(){
            $(this).removeClass("active");
        })

        $(this).addClass("active")

        console.log($(this).offset())

        var a = $(this).offset().left - 347.0249938964844;

        anime({
            targets: ".swiper",
            width: `calc(${$(this).width()}px + 20px)`,
            padding: "20px",
            left: `${a}px`,
            duration: 1000
        }) 
    })



    
})


function tgle(){
    $("nav").toggleClass("toggle");
    $("body").toggleClass("toggled");
}

function rmv(){
    $(".box:first-child .slides span").each(function () {
        $(this).removeClass("active");
    })
}