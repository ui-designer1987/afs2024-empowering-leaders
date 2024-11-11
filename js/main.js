

//HORIZONTAL TAB PRODUCTS section  
	
	$('#horizontalTab-first-block').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            //closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
			activetab_bg: '#fff', // background color for active tabs in this group
			inactive_bg: '#fff', // background color for inactive tabs in this group
			active_border_color: '', // border color for active tabs heads in this group
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
    
                $name.text($tab.text());
    
                $info.show();
            }
        });
		$('#horizontalTab-first-block2').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
           // closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_2', // The tab groups identifier
			activetab_bg: '#fff', // background color for active tabs in this group
			inactive_bg: '#fff', // background color for inactive tabs in this group
			active_border_color: '', // border color for active tabs heads in this group
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo1');
                var $name = $('span', $info);
    
                $name.text($tab.text());
    
                $info.show();
            }
        });
		
				$('#horizontalTab-first-block3').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
           // closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_3', // The tab groups identifier
			activetab_bg: '#fff', // background color for active tabs in this group
			inactive_bg: '#fff', // background color for inactive tabs in this group
			active_border_color: '', // border color for active tabs heads in this group
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo1');
                var $name = $('span', $info);
    
                $name.text($tab.text());
    
                $info.show();
            }
        });
				$('#horizontalTab-first-block4').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
           // closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_4', // The tab groups identifier
			activetab_bg: '#fff', // background color for active tabs in this group
			inactive_bg: '#fff', // background color for inactive tabs in this group
			active_border_color: '', // border color for active tabs heads in this group
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo1');
                var $name = $('span', $info);
    
                $name.text($tab.text());
    
                $info.show();
            }
        });
				$('#horizontalTab-first-block5').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
           // closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_5', // The tab groups identifier
			activetab_bg: '#fff', // background color for active tabs in this group
			inactive_bg: '#fff', // background color for inactive tabs in this group
			active_border_color: '', // border color for active tabs heads in this group
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo1');
                var $name = $('span', $info);
    
                $name.text($tab.text());
    
                $info.show();
            }
        });

 <!--Banner Slider-->
	  var indexLast = 0;
      $(document).ready(function(e) {
		  var navall = $("#bannermain #bannernav a");
		 var timeSpan;
        	navall.hover(function(){
			var index = navall.index(this);
			if(indexLast !=  index)
			{
				indexLast = index;
				callSlide();					
			}
			clearInterval(timeSpan);
			return false;
		}, function(){
			timeSpan = setInterval(function(){
			setAutoPlay();
		}, 8000)
		})
		
		timeSpan = setInterval(function(){
			setAutoPlay();
		}, 8000)
		
		
		function setAutoPlay() {
		  indexLast++;
			//alert(indexLast)
			if(indexLast == navall.size())
			{
				indexLast = 0;
			}
			callSlide();
	}
		
    });
	  
	  
	
	function callSlide() {
		$("#bannerbg").find("li:visible").fadeOut("slow");
		$("#bannerbg").find("li:eq("+indexLast+")").fadeIn("slow");
		
		$("#bannerslide").find("li:visible").fadeOut("slow");
		$("#bannerslide").find("li:eq("+indexLast+")").fadeIn("slow");
		
		$("#bannermain #bannernav a").parent("li").removeClass("sectedtab");
		$("#bannermain #bannernav a:eq("+indexLast+")").parent("li").addClass("sectedtab");		
		
	}
	
	callSlide()
	
	
	
	
	
	
    $(document).ready(function() {

      var owl = $("#owl-demo");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });



    });
	
	
	
	    $(document).ready(function() {

      var owl = $("#owl-demo34");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });



    });
	
	
 $(document).ready(function() {

      var owl = $("#owl-demo1");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });



    });
	
	
	 $(document).ready(function() {

      var owl = $("#owl-demo2");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });



    });	
	
		 $(document).ready(function() {

      var owl = $("#owl-demo3");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });



    });	
	


		 $(document).ready(function() {

      var owl = $("#owl-demo4");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });
	  



    });	
	
	
	
		 $(document).ready(function() {

      var owl = $("#owl-demo5");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
        ],
        navigation : true,
		 autoPlay: 3000,

      });
	  



    });	
	
	
	
	  $(document).ready(function() {

      var owl = $("#owl-demo6");

      owl.owlCarousel({
        
        itemsCustom : [
   [0, 1],
        [479, 1],
        [480, 1],
        [768, 3],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
        ],
        navigation : true,
		 autoPlay: 3000,

      });



    });
		
