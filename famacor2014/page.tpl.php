<header>
	<div class="container">

			<div class="sidebar col-sm-4 col-lg-4">
				<div class="logo">
					<a class="brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
						<img class="img-responsive" src="<?php echo $directory; ?>/img/famacor.png" />
					</a>
				</div><!-- logo -->
			</div>

			<div class="sidebar col-sm-8 col-lg-8">							
				<?php print render($page['header']); ?>				
				<div class="menu-social-media">
					<ul>
						<li class="facebook"><a href="https://www.facebook.com/detroit.brasil" target="_blank">Facebook</a></li>
						<li class="rss"><a href="http://www.detroitbr.org/feed/rss" target="_blank">RSS</a></li>
					</ul>
				</div>				
			</div><!-- conteudo header -->
					
	</div>      
</header><!-- PAGE-HEADER-->

<section id="principal">
	<div class="container">
		<div class="row">

			<div id="conteudo" class="col-sm-9 col-sm-push-3">								
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
		          <?php if (($title)&&(!$is_front)): ?>
		            <h1 class="title" id="page-title">
		              <?php print $title; ?>
		            </h1>
		          <?php endif; ?>		          
		          <?php print render($page['content']); ?>		      	
	        </div> <!-- conteudo -->

			<div id="sidebar" class="col-sm-3 col-sm-pull-9">				
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
			As opiniões e comentários publicados no detroitbr são de responsabilidade de seus respectivos autores.<br />
			O conteúdo deste site é livre para ser reproduzido, desde que a fonte seja citada de maneira clara junto de um link para o artigo original. Dúvidas, reclamações ou sugestões: <a href="mailto:contato@detroitbr.org">contato@detroitbr.org</a><br />
			Desenvolvido por <A href="http://agenciam2e.com.br">M2E Comunicação Digital</a>.
		</p>
        
</footer>
</div>	 
 
</div> <!-- /container -->
<!--/ CONTENT -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="<?php echo $directory; ?>/js/bootstrap.js" type="text/javascript"></script>
<script src="<?php echo $directory; ?>/js/geral.js" type="text/javascript"></script>
