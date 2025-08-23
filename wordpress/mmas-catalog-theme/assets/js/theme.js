(function($){
  $(function(){
    var $nav = $('.mmas-nav');
    var $burger = $('.mmas-burger');
    var $allCats = $('.mmas-all-cats');
    var $btn = $('.mmas-all-cats-btn');

    $burger.on('click', function(){
      $nav.toggleClass('open');
    });

    $btn.on('click', function(){
      $allCats.toggleClass('open');
    });

    $(document).on('click', function(e){
      if(!$(e.target).closest('.mmas-all-cats').length){
        $allCats.removeClass('open');
      }
    });
  });
})(jQuery);
