/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

"use strict";
(function($) {

	$(document).ready(function () {
        /* ONLY WORDPRESS */
        $('.pag-more.team').click(function(e) {
            if ($(this).hasClass('disable')) {return false;}
            $(this).addClass('disable');
            var el = $(this);
            e.stopImmediatePropagation();
            $.get( $(this).attr('href') + '?perpage=' + $(this).data('perpage') + '&paged=' + (($('.team-member').length/$(this).data('perpage'))+1) , function( data ) {
                var newItems = $(data);
                $( ".team-wrapper" ).append(newItems);
                if ($('.team-member').length < el.data('total')) { $('#load-more').removeClass('disable'); }
            })
            e.preventDefault();
        });

        $('#more-works').click(function(e) {
            if ($(this).hasClass('disable')) {return false;}
            $(this).addClass('disable');
            e.stopImmediatePropagation();
            $.get( $(this).attr('href') + '?perpage=' + $(this).data('perpage') + '&paged=' + (($('.folio-item').length/$(this).data('perpage'))+1) + '&height=' + $('.folio-item').height(), function( data ) {
                var newItems = $(data);
                $( "#folio" ).isotope('insert', newItems, function() {
                    if ($('.folio-item').length < $('#more-works').data('total')) { $('#more-works').removeClass('disable');  }
                    $('#folio-filter a:first-child').click();
                    $( "#folio" ).isotope();
                });
                if ($('.folio-item').length < $('#more-works').data('total')) { $('#more-works').removeClass('disable');  }

            })

            e.preventDefault();

        });
        /* FINISH ONLY WORDPRESS */

        $('.megabutton').click(function(e) {
            $('.md-overlay').addClass('show');
            $('.modal-form').addClass('show');
            $('.md-overlay').on('click',function() {
                $('.md-overlay').removeClass('show');
                $('.modal-form').removeClass('show');
            });
            e.preventDefault();
        });
        $('.modal-form .close').click(function (e) {
            $('.md-overlay').removeClass('show');
            $('.modal-form').removeClass('show');
            e.preventDefault();
        });

        /*Validation*/
        $("#contactform").validate({
            submitHandler: function(form) {
                $(form).ajaxSubmit();
                $(form).find('.formSent').show();
                $(form).find('input[type=text]').val('');
                $(form).find('input[type=email]').val('');
                $(form).find('textarea').val('');
            }
        });

        /*Validation*/
        $("#contact-project").validate({
            submitHandler: function(form) {
                $(form).ajaxSubmit();
                $(form).find('.formSent').show();
            }
        });

        $(document).on('click', '.folio-project', function(e) {
            console.log('portfolio click');
            var href = $(this).attr('href');
            if ($('#ajax').is(':visible')) {
                $('#ajax').css({ display:'block' }).animate({ height:'0' }).hide().slideUp('slow');
            }
            $('#ajax').html('');

            $('#ajax').show(0).animate({ height:'1200px' }, 500 ,function() {
                $('#ajax').load(href, function() {
                    $('#ajax').css('height','auto');
                    $("html, body").animate({ scrollTop: $('#ajax').offset().top }, 300);
                });
            });
            e.preventDefault();
        });
        if (!$('#ip-container').hasClass('single')) {
            $(window).bind("scroll", function(){ //when the user is scrolling...
                if ($(window).scrollTop() >= 100) { //header hide by scroll
                    $('#header').addClass('overflow');
                } else {
                    $('#header').removeClass('overflow');
                }
                if ($(window).scrollTop() >= ($('#owl-main').height()/2)) { //If user scroll entire home slider
                    $('#header').addClass('fixed');
                } else {
                    $('#header').removeClass('fixed');
                }
            });
        }

        if ($(".player").length>0 && $(window).width()>1024) { //If there are video backgrounds
            $(".player").mb_YTPlayer();
        }

        /*Sections appears in scroll*/
        $('.jt_row').bind('inview', function(event, visible) {
            if (visible === true) {
                $(this).addClass('visible');
            }
        });


        /*Scroll to sections*/
        if (!$('#ip-container').hasClass('single') && $('.current-menu-item').length==0) {
            $('#nav').onePageNav();
        }

        $('#header').on('click', '.collapse.in .menu-item a', function() {
            $('.collapse.in').collapse('hide');
        });

    }); // End document ready

    $(document).ajaxComplete(function() {
        "use strict";
        $("#owl-project-single").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });
        $(".close").click(function(e) {
            $('#ajax').html('').css('height','0px');
            e.preventDefault();
        });
    }); // End ajax complete

	$(window).load(function() {
        //Set Google maps
        if ($('#maps').length>0) {wpgmappity_maps_loaded();}

        // Set video player buttons behaviour
        $(".player").each(function () {
            var btn = $(this).find('.playstop');
            var player = $(this);
            if ($(this).getPlayer()==='undefined') {
                var state = $(this).getPlayer().getPlayerState();
            } else {state=1;}
            if (state==1) {
                btn.text('Pause');
                btn.addClass('stop')
            } else {
                btn.text('Play');
                btn.removeClass('stop');
            }
            if (btn.length>0) {
                btn.click(function(e) {
                    if ($(this).hasClass('stop')) {
                        player.pauseYTP();
                        btn.text('Play');
                    } else {
                        player.playYTP();
                        btn.text('Pause');
                    }
                    $(this).toggleClass('stop');
                    e.preventDefault();
                });
            }
        });

    	$("#owl-main-text").owlCarousel({
    		autoPlay: 3500,
    		goToFirst: true,
    		goToFirstSpeed: 2000,
    		navigation: false,
    		slideSpeed: 700,
    		pagination: false,
    		transitionStyle: "fadeUp",
    		singleItem: true
    	});
        $('#home-slider').height($(window).height());
        $('.slider-parallax').css('padding-top', $(window).height() + 'px');
    	/* Home background slider */
		$("#owl-main").owlCarousel({
			autoPlay: 3500,
			navigation: true,
            goToFirst: true,
            goToFirstSpeed: 2000,
			slideSpeed: 700,
			pagination: true,
			transitionStyle: "fade",
			singleItem: true,
			afterInit: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-main .item').height($(window).height());
                    $('#home-slider #owl-main img').height($(window).height());
                } else {
                    $('#home-slider #owl-main .item').height(600);
                }

                $('#home-slider #owl-main img').width('auto');

                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-main img').css('top', '0px' );

                    $('#home-slider #owl-main img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-main img').css('left', '0px' );
                    $('#home-slider #owl-main img').height('auto');
                    $('#home-slider #owl-main img').width($(window).width());
                    $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }

            },
            afterUpdate: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-main .item').height($(window).height());
                    $('#home-slider #owl-main img').height($(window).height());
                } else {
                    $('#home-slider #owl-main .item').height(600);
                }
                $('#home-slider #owl-main img').width('auto');
                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-main img').css('top', '0px' );
                    $('#home-slider #owl-main img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-main img').css('left', '0px' );
                    $('#home-slider #owl-main img').height('auto');
                    $('#home-slider #owl-main img').width($(window).width());
                    $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }
            }
		});

        //Generic carousel
        $(".generic-carousel").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });

        var $container = $('#folio');
        $container.isotope({
            itemSelector: '.folio-item'
        });
        var $optionSets = $('.folio-filter'),
            $optionLinks = $optionSets.find('a');
        $optionLinks.click(function() {
            var $this = $(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('.folio-filter');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            value = value === 'false' ? false : value;
            options[key] = value;
            if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                changeLayoutMode($this, options);
            } else {
                $container.isotope(options);
            }
            return false;
        });
        if (!$('#ip-container').hasClass('single') && $('.current-menu-item').length==0) {
            $('#nav li').removeClass('current');
            $('#nav li:first-child').addClass('current');
            $(window).scroll();
        }


    }); // End Window Load

    //Set home slider height on resize
    $(window).resize(function () {
        $('#home-slider').height($(window).height());
        $('.slider-parallax').css('padding-top', $(window).height() + 'px');
    });

    function wpgmappity_maps_loaded() {
        /* googleMaps Footer Map */
        var blue = "#00D6FF"
        var black = "-100"
        var green = "#77be32"
        var yellow = "#f1d301"
        var orange = "#fda527"
        var purple = "#d786fe"
        var red = "#f2333a"
        var turquoise = "#29deb5"

        var color = blue; // set your map color here! (blue, black, green, yellow, purple, orange...)
        var saturation = 100;
        var pointerUrl = jellythemes.theme_path + '/images/map/pointer-'+jellythemes.color+'.png'; // set your color pointer here! (pointer-blue/green/yellow/fucsia/purple/turquoise/red/orange.png)
        switch(color) {
            case ('blue'):
            var color = blue;
            var saturation = 100;
            break;
        case ('black'):
            var saturation = black;
            break;
        case ('green'):
            var color = green;
            var saturation = 100;
            break;
        case ('yellow'):
            var color = yellow;
            var saturation = 100;
            break;
        case ('red'):
            var color = red;
            var saturation = 100;
            break;
        case ('turquoise'):
            var color = turquoise;
            var saturation = 100;
            break;
        case ('orange'):
            var color = orange;
            var saturation = 100;
            break;
        case ('purple'):
            var color = purple;
            var saturation = 100;
            break;
        } //end switch
        var latlng = new google.maps.LatLng($('#maps').data('lat'), $('#maps').data('lon')); <!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var styles = [
            {
                "featureType": "landscape",
                "stylers": [
                    {"hue": "#000"},
                    {"saturation": -100},
                    {"lightness": 40},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {"hue": color},
                    {"saturation": saturation},
                    {"lightness": 20},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {"hue": color},
                    {"saturation": saturation},
                    {"lightness": 20},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {"hue": color},
                    {"saturation": saturation},
                    {"lightness": 50},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {"hue": "#000"},
                    {"saturation": -100},
                    {"lightness": 15},
                    {"gamma": 1}
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {"hue": "#000"},
                    {"saturation": -100},
                    {"lightness": 25},
                    {"gamma": 1}
                ]
            }
        ];
        var drag;
        if($(window).width()<796){drag=false;}else{drag=true;}
        var options = {
            center : latlng,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            zoomControl : false,
            mapTypeControl : false,
            scaleControl : false,
            streetViewControl : false,
            draggable:drag,
            scrollwheel:false,
            panControl : false, zoom : 18,
            styles: styles
        };
        var wpgmappitymap = new google.maps.Map(document.getElementById('wpgmappitymap'), options);
        var point0 = new google.maps.LatLng($('#maps').data('lat'),$('#maps').data('lon'));
        var marker0 = new google.maps.Marker({
            position : point0,
            map : wpgmappitymap,
            icon: pointerUrl //Custom Pointer URL
        });
        google.maps.event.addListener( marker0, 'click',
            function() {
                var infowindow = new google.maps.InfoWindow({content: $('#maps').data('marker')});
                infowindow.open(wpgmappitymap,marker0);
        });
    } // end wpgmappity_maps_loaded();


    /* Parallax */
    jQuery(document).ready(function($) {
        "use strict";
        if ($(window).width()>1024) {
            jQuery(window).bind("scroll", function(){//when the user is scrolling...
                /* Parallax */
                Move('.paraOn'); //move the background images in relation to the movement of the scrollbar
            });
        }
    });
    function Move(seccio){
        jQuery(seccio).each(function(){
            //var posY = jQuery(window).scrollTop()+jQuery(window).height()-jQuery(this).attr('yPos')/10+jQuery(this).height()+'px';
            //jQuery(this).css('background-position', '0 ' + posY);
            $(this).css('background-position', '0 '+(($(window).scrollTop()+$(window).height()-$(this).attr('yPos'))/3+$(this).height())+'px');


        });
    }
    jQuery('.parallax').bind('inview', function(event, visible) {
            if (visible === true) {
                // element is now visible in the viewport
                var offset = jQuery(this).offset();
                jQuery(this).addClass('paraOn').attr('yPos',offset.top);
            } else {
                // element has gone out of viewport
                jQuery(this).removeClass('paraOn');
            }
    });


    jQuery(document).ready(function(){
        jQuery(".corner").click(function(){
            jQuery('#customizer').toggleClass('s-open');
        });
    });

    function swapStyleSheet(sheet){
        document.getElementById('general-css').setAttribute('href', sheet);
    }
}(jQuery));

(function($) {

    var support = { animations : Modernizr.cssanimations },
        container = document.getElementById( 'ip-container' ),
        header = container.querySelector( 'header.ip-header' ),
        loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
        animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
        // animation end event name
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

    function init() {
        var onEndInitialAnimation = function() {
            if( support.animations ) {
                this.removeEventListener( animEndEventName, onEndInitialAnimation );
            }

            startLoading();
        };

        // disable scrolling
        //window.addEventListener( 'scroll', noscroll );

        // initial animation
        classie.add( container, 'loading' );

        if( support.animations ) {
            container.addEventListener( animEndEventName, onEndInitialAnimation );
        }
        else {
            onEndInitialAnimation();
        }


    }

    function startLoading() {
        // simulate loading something..
        var simulationFn = function(instance) {
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.1, 1 );

                    instance.setProgress( progress );

                    // reached the end
                    if( progress === 1 ) {
                        classie.remove( container, 'loading' );
                        classie.add( container, 'loaded' );
                        clearInterval( interval );

                        var onEndHeaderAnimation = function(ev) {
                            if( support.animations ) {
                                if( ev.target !== header ) return;
                                this.removeEventListener( animEndEventName, onEndHeaderAnimation );
                            }

                            classie.add( document.body, 'layout-switch' );
                            window.removeEventListener( 'scroll', noscroll );
                        };

                        if( support.animations ) {
                            header.addEventListener( animEndEventName, onEndHeaderAnimation );
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                        $('#ip-container').imagesLoaded(function() {
                            var hashtag = document.location.hash;
                            if (hashtag.length>0) {
                                jQuery(window).scrollTop(1);
                                jQuery('body').animate({
                                    scrollTop: jQuery(jQuery(hashtag)).offset().top
                                }, 1500);
                            } else {
                                if (!$('.ip-header').hasClass('disabled')) 
                                    jQuery(window).scrollTop(1); //move scroll to fires inview events
                            }
                        });
                    }
                }, 80 );
        };

        loader.setProgressFn( simulationFn );

    }

    function noscroll() {
        //window.scrollTo( 0, 0 );
    }

    $(window).load(function() {
        init();

    });

})(jQuery);