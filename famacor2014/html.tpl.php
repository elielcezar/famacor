<!DOCTYPE html>
<html>
	<head>
 
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php if ($is_front):  ?>	
<?php endif; ?>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php print $styles; ?>
<?php print $scripts; ?>
<link href="<?php print base_path() . path_to_theme() .'/' ?>/css/bootstrap-theme.min.css" rel="stylesheet">

<link href="<?php print base_path() . path_to_theme() .'/' ?>/css/bootstrap.min.css" rel="stylesheet">

<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet">

<link href="<?php print base_path() . path_to_theme() .'/' ?>/css/home.css" rel="stylesheet">

<link href="<?php print base_path() . path_to_theme() .'/' ?>/css/animate.css" rel="stylesheet">


<!--[if lt IE 7]>
	<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome-ie7.min.css" rel="stylesheet">
	<![endif]-->
<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
<![endif]-->
<!-- Le fav and touch icons -->

<!--link rel="shortcut icon" href="<?php print $GLOBALS['base_path']; ?>sites/all/themes/detroitbr/img/favicon.png"-->

<!-- GOOGLE FONT-->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,800,600,700,300' rel='stylesheet' type='text/css'>
<!-- /GOOGLE FONT-->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>



</head>
<body data-spy="scroll" data-target=".navbar" class="<?php print $classes; ?>" <?php print $attributes;?>>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '488099737997233',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/pt_BR/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
	
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
</body>
</html>