

/* login-modal */
$(function(){

  var modaldiv; 

  go_modal = function (){
      modaldiv.css("top", Math.max(0, (($(window).height() - modaldiv.outerHeight()) / 2) + $(window).scrollTop()) + "px");
      modaldiv.css("left", Math.max(0, (($(window).width() - modaldiv.outerWidth()) / 2) + $(window).scrollLeft()) + "px");
      $("html,body").addClass("modal_not_scroll");

  };

  bye_modal = function(){
      $("html,body").removeClass("modal_not_scroll");
  };

  $(function(){  
    $(".btn-chk").click(function(){ 
        modaldiv = $('.modal_con');
        go_modal();
        $("#modalLogin").show();
    }); 
    $("#modalLogin-close").click(function(){ 
        bye_modal();
        $("#modalLogin").hide();
    }); 
  });

})


/* 탭 */
$(function(){

  $('ul.tabs li').click(function(){
    console.log('눌림')
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tabs-inner').removeClass('current');


		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    
	})
})