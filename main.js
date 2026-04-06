$(document).ready(function(){

   $('.fa-bars').click(function(){
      $(this).toggleClass('fa-xmark');
      $('.navbar').toggleClass('nav-toggle');
   });

   $(window).on('scroll load', function(){

      $('.fa-bars').removeClass('fa-xmark');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 30){
         $('header').addClass('header-active');
      } else {
         $('header').removeClass('header-active');
      }

      $('section').each(function(){

         var scrollTop = $(window).scrollTop();
         var offset = $(this).offset().top - 200;
         var height = $(this).height();
         var id = $(this).attr('id');

         if(scrollTop >= offset && scrollTop < offset + height){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#' + id + '"]').addClass('active');
         }

      });

   });

});