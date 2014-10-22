/* HOME */
var janela = $(window).width();




if(janela > 767){


/*--- Topo ----------------------------------------------------------------------*/

 $('#topo .logo').css('opacity','0');        

    $('#topo .logo').bind('inview', function (event, visible) {
          if (visible) {        
            $(this).addClass('animated zoomIn').css('opacity','1');   
          }
      });  


    $('#topo .seta img').mouseenter(function(){
      $(this).addClass('animated pulse');
    });  

    $('#topo .seta img').mouseleave(function(){
      $(this).removeClass('animated pulse');
    });  

    
    
/*--- Section 1 -----------------------------------------------------------------*/

    $('.fundacao .conteudo, .fundacao .circulo, .estados .conteudo, .estados .circulo, .qualificacao .conteudo, .qualificacao .circulo').css('opacity','0');        
        
        $('#Section-1 .line').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('open delay12');   
            } else{
              $(this).removeClass('open');   
            }
        });  
        $('.fundacao .conteudo').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn delay4').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn delay4').css('opacity','0');   
            }
        });    
        $('.fundacao .circulo').bind('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated bounceIn delay8').css('opacity','1');    
            } else{
              $(this).removeClass('animated bounceIn delay8').css('opacity','0');   
            }
        });   

        $('.estados .conteudo').bind('inview', function (event, visible) {
            if (visible) {        
              $(this).addClass('animated bounceIn delay4').css('opacity','1');   
            } else {
              $(this).removeClass('animated bounceIn delay4').css('opacity','0');   
            }
        });    
        $('.estados .circulo').bind('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated bounceIn delay8').css('opacity','1');   
            } else{
               $(this).removeClass('animated bounceIn delay8').css('opacity','0');    
            }
        });   

        $('.qualificacao .conteudo').bind('inview', function (event, visible) {
            if (visible) {        
              $(this).addClass('animated bounceIn delay4').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn delay4').css('opacity','0');   
            }
        });    
        $('.qualificacao .circulo').bind('inview', function (event, visible) {
            if (visible) {            
              $(this).addClass('animated bounceIn delay8').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn delay8').css('opacity','0');   
            }
        }); 



/*--- Section 2 -----------------------------------------------------------------*/

    $('#Section-2 ul.seguros li').css('opacity','0');                
       
        $('#Section-2 ul.seguros li.automovel').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay2').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay2').css('opacity','0');   
            }
        }); 

        $('#Section-2 ul.seguros li.motocicleta').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay4').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay4').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.residencial').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay6').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay6').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.empresarial').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay8').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay8').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.condominio').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay12').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay12').css('opacity','0');   
            }
        });       

        $('#Section-2 ul.seguros li.nautico').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay2').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay2').css('opacity','0');   
            }
        }); 

        $('#Section-2 ul.seguros li.equipamentos').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay4').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay4').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.transporte').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay6').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay6').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.garantia').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay8').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay8').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.rcdo').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay12').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay12').css('opacity','0');   
            }
        });       
        
         $('#Section-2 ul.seguros li.vida').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay2').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay2').css('opacity','0');   
            }
        }); 

        $('#Section-2 ul.seguros li.saude').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay4').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay4').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.previdencia').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay6').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay6').css('opacity','0');   
            }
        });    

        $('#Section-2 ul.seguros li.viagem').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated zoomIn delay8').css('opacity','1');   
            } else{
              $(this).removeClass('animated zoomIn delay8').css('opacity','0');   
            }
        });    


/*--- Section 3 -----------------------------------------------------------------*/

    $('#Section-3 li, #Section-3 img').css('opacity','0');    

        $('#Section-3 img').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn').css('opacity','0');   
            }
        });             
       
        $('#Section-3 li.seguradoras').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay2').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay2').css('opacity','0');   
            }
        }); 

        $('#Section-3 li.taxas').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay6').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay6').css('opacity','0');   
            }
        }); 

        $('#Section-3 li.parcerias').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay12').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay12').css('opacity','0');   
            }
        }); 

/*--- Section 4 -----------------------------------------------------------------*/

    $('#Section-4 li, #Section-4 img').css('opacity','0');                


      $('#Section-4 img').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn').css('opacity','0');   
            }
        }); 
       
        $('#Section-4 li.documentos').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn delay2').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn delay2').css('opacity','0');   
            }
        }); 

        $('#Section-4 li.softwares').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn delay6').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn delay6').css('opacity','0');   
            }
        }); 

        $('#Section-4 li.etica').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn delay12').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn delay12').css('opacity','0');   
            }
        }); 
       
/*--- Section 5 -----------------------------------------------------------------*/

    $('#Section-5 li, #Section-5 img').css('opacity','0');                

     $('#Section-5 img').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated bounceIn').css('opacity','1');   
            } else{
              $(this).removeClass('animated bounceIn').css('opacity','0');   
            }
        }); 
       
        $('#Section-5 li.balcao').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay2').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay2').css('opacity','0');   
            }
        }); 

        $('#Section-5 li.indicacao').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay4').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay4').css('opacity','0');   
            }
        }); 

        $('#Section-5 li.fidelidade').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay6').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay6').css('opacity','0');   
            }
        }); 

         $('#Section-5 li.autoclube').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay8').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay8').css('opacity','0');   
            }
        }); 

        $('#Section-5 li.apolices').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay10').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay10').css('opacity','0');   
            }
        }); 

        $('#Section-5 li.carteirinha').bind('inview', function (event, isInView) {
            if (isInView) {        
              $(this).addClass('animated fadeInRight delay12').css('opacity','1');   
            } else{
              $(this).removeClass('animated fadeInRight delay12').css('opacity','0');   
            }
        }); 
       

        
}
