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
    $(".box .addToCart").click(function(e){
        //riffle effect
        riffle($(this), e);

        if($("#number").text() > 0){

        if($(".cart").hasClass("hidden"))
            $(".cart").removeClass("hidden");
        
        if(!$(".cart").hasClass("filled")){
            $(".cart").addClass("filled");

            let price = $(".unit_price").text();
            let quantity = $("#number").text();
            let sum_price = eval(price * quantity);


            $(".cart .body").empty();

            $(".cart .body").append(`
            <div class="row">
            <div class="img">
              <img src="images/image-product-1-thumbnail.jpg" alt="">
            </div>
            <div class="text">
                <span>Fall Limited edition sneakers </span> <br>
                <span class="sum-price">$${price} x ${quantity} <span class="price">$${sum_price}</span></span>
            </div>
            <div class="icon">
              <i class="fas fa-trash"></i>
            </div>
          </div>
          <div class="row">
            <button>Check Out</button>
          </div>
            `)
        }
        else{
          alert("item deja filled")  
        }
    }
    })

    $(".side i").click(function(){
        $(".cart").toggleClass("hidden");
    })

    // $(".cart.filled .body .row:last-child button").click(function(e){
    //     riffle($(this), e);
    // })

    $(document).on('click', '.icon i', function(){
        $(".cart .body").empty();
        $(".cart .body").append(`<h4>your cart is empty.</h4>`);
        $(".cart").removeClass("filled");
    })

    $(document).on('click', '.cart.filled .body .row:last-child button', function(e) { riffle($(this), e); })

    function riffle(btn, e){
        const x = e.pageX - btn.offset().left;
        const y = e.pageY - btn.offset().top;

        console.log(`${x} -- ${y}`);

        const ripple = document.createElement('span');
        ripple.classList.add("ripple");

        ripple.style.left = `${x}px`;
        ripple.style.top  = `${y}px`;

        btn.append(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 1000)
    }

    
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

    setInterval(function(){
        ntfcs()
    }, 1000)

    // function for notfications
    function ntfcs(){
        const ntfs = $('.cart.filled .body .row').length;
        if(ntfs > 0){
            $(".panel").addClass("ntfc");
            $(".cart-nbr").text(ntfs - 1);
        }else{
            $(".panel").removeClass("ntfc");
        }
        
    }



    
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