/* HOME */
var janela = $(window).width();


if(janela>767){
    
    $('').css('opacity','0');
        
        $('h1.m2e-home').one('inview', function (event, visible) {
            if (visible) {        
              $(this).addClass('animated bounceInDown').css('opacity','1');   
            } 
        });    
        $('.destaque img').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeInRightBig');   
            } 
        });   
        $('.destaque .chamada').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeInLeftBig');   
            } 
        });  
        $('.destaque .fb').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeInLeftBig delay4');   
            } 
        });    
        $('.destaque .twitter').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeInRightBig delay6');   
            } 
        });   
        $('.bloco.portfolio').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeInUp delay10');   
            } 
        }); 
        $('.bloco.orcamento').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeInUp delay12');   
            } 
        }); 
        $('.servico.logo').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeIn');   
            } 
        }); 
        $('.servico.webdesign').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeIn');   
            } 
        }); 
        $('.servico.emailmkt').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeIn');   
            } 
        }); 
         $('.servico.impressos').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeIn');   
            } 
        }); 
        $('.servico.facebook').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeIn');   
            } 
        }); 
        $('.servico.google').one('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated fadeIn');   
            } 
        }); 
}