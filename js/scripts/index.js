$(document).ready(function(){
    $("#miga span").hover(function(){
        $(this).css("background-color", "#005ad5");
    },
    function(){
        $(this).css("background-color", "rgba(43, 119, 219, 0.699)");
    }); 

    $("last-news").hover(function(){
        $(this).animate({
            height: '+=30px',
          });
    },
    function(){
        $(this).animate({
            height: "154px",
          });
    }); 


  });

