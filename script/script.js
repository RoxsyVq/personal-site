$(document).ready(function(){
    


	var height = $(window).height();

	ajustesIniciales();


	function ajustesIniciales(){
		$("section#body").css({"margin-top": height - 80 + "px"});
	}


	$(document).scroll(function(){
        
		var scrollTop = $(this).scrollTop();
        console.log(scrollTop)
		var pixels = scrollTop / 70;

		if(scrollTop < height){
			$("section#contenedor_general").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});

		}
       if(scrollTop >= 1277 & scrollTop < 2045 ){
          $('.s_responsive').addClass('anime1');
            $('.s_fotografia').addClass('anime2');
            $('.s_video').addClass('anime3');
            $('.s_imagen').addClass('anime4');
            $('.s_animacion').addClass('anime5');
           
           console.log("holas");
       }
        else{
            $('.s_responsive').removeClass('anime1');
            $('.s_fotografia').removeClass('anime2');
            $('.s_video').removeClass('anime3');
            $('.s_imagen').removeClass('anime4');
            $('.s_animacion').removeClass('anime5');
        }
        if(scrollTop>=629){
           $('header').addClass('color-header') ;
        }
        else{
             $('header').removeClass('color-header')
        }
        

	});

});




