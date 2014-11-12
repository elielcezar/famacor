<header>
	<div class="container">

		<div class="wrapper">

			<div class="sidebar col-sm-4 col-lg-4">
				<div class="logo">
					<a class="brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
						<img class="img-responsive" src="<?php print base_path() . path_to_theme() .'/' ?>/img/famacor.png" alt="logo" />
					</a>
				</div><!-- logo -->
			</div>

			<div class="sidebar col-sm-8 col-lg-8">							
				<?php print render($page['header']); ?>				
				<!--div class="menu-social-media">
					<ul>
						<li class="facebook"><a href="https://www.facebook.com/detroit.brasil" target="_blank">Facebook</a></li>
						<li class="rss"><a href="http://www.detroitbr.org/feed/rss" target="_blank">RSS</a></li>
					</ul>
				</div-->				

				<!-- Static navbar -->
			      <div class="navbar navbar-default menu-principal" role="navigation">
			        
			          <div class="navbar-header">
			            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			              <span class="sr-only">Toggle navigation</span>
			              <span class="icon-bar"></span>
			              <span class="icon-bar"></span>
			              <span class="icon-bar"></span>
			            </button>            
			          </div>
			          <div class="navbar-collapse collapse">
			            <ul class="nav navbar-nav">
			              <li><a href="<?php print $front_page; ?>">Home</a></li>
			              <li><a href="<?php print $front_page; ?>blog">Blog</a></li>
			              <li><a href="<?php print $front_page; ?>auto-clube">Auto Clube</a></li>			              
			              <li><a href="<?php print $front_page; ?>sinistros">Sinistros</a></li>
			              <li><a href="<?php print $front_page; ?>contato">Contato</a></li>			              			              
			            </ul>            
			          </div><!--/.nav-collapse -->        			          
			      </div> 

			</div><!-- conteudo header -->

		</div>
					
	</div>      

</header><!-- PAGE-HEADER-->

<?php if (($title)&&(!$is_front)): ?>
		<div class="titulo-pagina">
			<div class="container">
				<div id="conteudo" class="col-sm-12">
					<h1 class="title" id="page-title"><?php print $title; ?></h1>          
          		</div>
          	</div>
      	</div>
     <?php endif; ?>

<section id="principal">

	<div class="container">
		
		<div class="row">

			<div id="conteudo" class="col-sm-9">								
				 <?php if ($messages): ?>
		          <div id="messages">
		          	<div class="section clearfix">
		            <?php print $messages; ?>
		          </div></div> <!-- /.section, /#messages -->          
		          <?php endif; ?>
		          <?php if ($tabs): ?>
		            <div class="tabs">
		              <?php print render($tabs); ?>
		            </div>
		          <?php endif; ?>      		    
		          
		          <?php print render($page['content']); ?>		      	
	        </div> <!-- conteudo -->

			<div id="sidebar" class="col-sm-3">				
				<?php print render($page['sidebar']); ?>
			</div><!-- sidebar -->

		</div>	   
	</div><!-- container -->
</section><!-- principal -->
 
<!-- FOOTER-->
<div class="container">
<footer> 
        
        <?php print render($page['footer']); ?>
        
       
		<p class="legal">
			As opiniões e comentários publicados neste blog são de responsabilidade de seus respectivos autores.<br />
			O conteúdo deste site é livre para ser reproduzido, desde que a fonte seja citada de maneira clara junto de um link para o artigo original. Dúvidas, reclamações ou sugestões: <a href="mailto:contato@famacorseguros.com.br">contato@famacorseguros.com.br</a><br />
			Desenvolvido por <A href="http://agenciam2e.com.br">M2E Comunicação Digital</a>.
		</p>
        
</footer>
</div>	 
 
</div> <!-- /container -->
<!--/ CONTENT -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="<?php print base_path() . path_to_theme() .'/' ?>/js/bootstrap.js" type="text/javascript"></script>
<script src="<?php print base_path() . path_to_theme() .'/' ?>/js/geral.js" type="text/javascript"></script>
