$(document).ready(function() {
        $('.masterTooltip').hover(function(){
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 2;
                var mousey = e.pageY + 2;
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
});