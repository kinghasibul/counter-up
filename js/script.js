$(document).ready(function(){
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    if($('.pragress-line').length) {
        $('.pragress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
    }
    
    
});