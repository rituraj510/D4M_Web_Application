
$(document).ready(function () {

	adjustHomeContentWidth();
  	adjustCompanionContentWidth();
  	
                  
  // $(".sidenav_item").click(function() {
  //       $(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
  //       $(this).find("img").attr("src", "Content/Images/grid-active.png");
  //  });

  $(".navarrow").click(function() {
		var currlink = $(this).attr("id");
		switch(currlink){
			case "arrow_About":
			    $(this).attr("id","arrow_Pricing");
			    $("#side_About").trigger("click");
			    window.location = $('#side_About').attr('href');
			    break;
			case "arrow_Pricing":
			    $(this).attr("id","arrow_Companion");
			    $("#side_Pricing").trigger("click");
			    window.location = $('#side_Pricing').attr('href');
			    break;
			case "arrow_Companion":
			    $(this).attr("id","arrow_Features");
			    $("#side_Companion").trigger("click");
			    window.location = $('#side_Companion').attr('href');
			    break;
			case "arrow_Features":
			    $(this).attr("id","arrow_Contact");
			    $("#side_Features").trigger("click");
			    window.location = $('#side_Features').attr('href');
			    break;
			case "arrow_Contact":
			    $(this).attr("id","arrow_Home");
			    $(this).html("Back To Top Page");
			    $("#side_Contact").trigger("click");
			    window.location = $('#side_Contact').attr('href');
			    break;
			case "arrow_Home":
			    $(this).attr("id","arrow_About");
			    $(this).html("Jump To Next Page");
			    $("#side_Home").trigger("click");
			    window.location = $('#side_Home').attr('href');
			    break;

		}
	});

  $( window ).resize(function() {
    	adjustHomeContentWidth();
    	adjustCompanionContentWidth();
  });

$("#submenu-toggle").click(function() {
     $("#submenu-toggle").find("span").attr("");
     if ($("#submenu-toggle").find("span").attr("class") == "glyphicon glyphicon-chevron-up") {
		     $(".submenu-item").addClass("collapse");
		     $("#submenu-toggle").find("span").attr("class", "glyphicon glyphicon-chevron-down");
     }
     else {
					 $(".submenu-item").removeClass("collapse");
					 $("#submenu-toggle").find("span").attr("class", "glyphicon glyphicon-chevron-up");
		 }
   });

$(".modalhide").click(function(e){
		$("#responsiveNavMenu").modal("hide");
	});
 });

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }   
});

$(function() {
	$( 'ul.nav li' ).on( 'click', function() {
	    $( this ).parent().find( 'li.on' ).removeClass( 'on' );
	    $( this ).addClass( 'on' );
	});
});

function adjustHomeContentWidth() {
  var width=$('#h1-for-drivers').width();
  $('#shine').width(width);
  $('#para').width(width);

}
function adjustCompanionContentWidth() {
  var width=$('#h2').width();
  $('#shine1').width(width);
  $('#para1').width(width);

}


jQuery(document).ready(function($) {
  var alterClass = function() {
  var ww = document.body.clientWidth;
 
 if (ww <= 483) {

   $('.contact_link').addClass('contact_para');
    }
    else if (ww > 483) {
    	 $('.contact_link').removeClass('contact_para');

    
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  
  alterClass();
});





$(function() {
	$('.copyable').click( function() {
	    var original = $(this).html();
	    var trim = original.replace(/\s/g,'');

	    var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(trim).select();
        document.execCommand("copy");
        $temp.remove();

         setTimeout(function(){ $("#copy_to_clip_modal").modal('show'); }, 100);
         setTimeout(function(){ $("#copy_to_clip_modal").modal('hide'); }, 900);
	});
});



$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
				$('.Section_page').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
                  $('ul.nav li').parent().find( 'li.on' ).removeClass( 'on' );
	    		  $('ul.nav li').eq(i).addClass( 'on' );
	    		 
	    		  if(i == 0)
	    		  {
					$('.navarrow').attr("id","arrow_About");
					$('.navarrow').html("Jump To Next Page");
					 $(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
                     $("#side_Home").find("img").attr("src", "Content/Images/grid-active.png");
	    		  }
	    		  if (i == 1) 
	    		  {
                    $('.navarrow').attr("id","arrow_Pricing");
					$('.navarrow').html("Jump To Next Page");
					$(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
                     $("#side_About").find("img").attr("src", "Content/Images/grid-active.png");
	    		  }
	    		  if (i == 2) 
	    		  {
	    		  	 $('.navarrow').attr("id","arrow_Companion");
					 $('.navarrow').html("Jump To Next Page");
					$(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
                     $("#side_Pricing").find("img").attr("src", "Content/Images/grid-active.png");
	    		  }
	    		  if (i == 3) 
	    		  {
	    		  	 $('.navarrow').attr("id","arrow_Features");
					 $('.navarrow').html("Jump To Next Page");
					$(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
                     $("#side_Companion").find("img").attr("src", "Content/Images/grid-active.png");
	    		  }
	    		   if (i == 4) 
	    		  {
	    		  	 $('.navarrow').attr("id","arrow_Contact");
			          $('.navarrow').html("Jump To Next Page");
			         $(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
                     $("#side_Features").find("img").attr("src", "Content/Images/grid-active.png");
	    		  }
	    		  if(i == 5)
	    		  {
	    		  	  $('.navarrow').attr("id","arrow_Home");
			          $('.navarrow').html("Back To Top Page");
			          $(".sidenav_item").find("img").attr("src", "Content/Images/grid-inactive.png");
                     $("#side_Contact").find("img").attr("src", "Content/Images/grid-active.png");
	    		  }

	    		  
				 }

		});
});
