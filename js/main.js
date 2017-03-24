$(document).ready(function(){
  
    sliderContn();
  $(".slides").slidesjs({
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 3000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });
    $('.carousel').carousel({
  interval: 3000,
  pause: false
})
    llamarcontac();
    volverForm();
    
});

// funcion para llmar a contacto formulario flotante

function llamarcontac(){
    $('#contacto-form').click(onclickContac);
}
function onclickContac(evt){
     evt.preventDefault();
	$('#formulario').addClass('visible');
    
   // alert('holiss');
    
}
function volverForm(){
    $('#close').click(onclickform);
}
function onclickform(){
    $('#formulario').removeClass('visible');
}





function sliderContn(){
    $(".slider").slidesjs({
    play: {
      active: true,
        
      effect: "fade",
        
      interval: 3000,
        
      auto: true,
        
      swap: true,
        
      pauseOnHover: false,
        
      restartDelay: 2500
        
    }
  });
}
jQuery(document).ready(function($){
 
    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];
 
    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
     
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){
         
        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
 
});

