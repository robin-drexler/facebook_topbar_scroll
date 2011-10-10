$(function() {
    $blueBar = $('#blueBar');
    $headNav = $('#headNav');
    
    $blueBar.click(function(e) {
        $target = $(event.target);
       
        if($target.is($blueBar) || $target.is($headNav)) {
            $("body,html").animate({scrollTop: 0}, 250);
        }
    });
});
