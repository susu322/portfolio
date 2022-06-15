$(document).ready(function(){
    $('#fullpage').fullpage({
        slidesNavigation: true,
        autoScrolling: true
    });

    $('.tabSet').each(function(){       
        var anchor = $(this).find('.tabs a');
        var anchor_on = $(this).find('.tabs a.on');
        var phref_on =  anchor_on.attr('phref');
        var this_panel = $(this).find('.panel')
  
        $(phref_on).show();
        anchor.each(function(){
             var phref = $(this).attr('phref');
             
              $(this).click(function(){
                  this_panel.hide();
                anchor.removeClass('on'); //$('.tabs a')
                $(phref).show();
                $(this).addClass('on');
  
            }) //click
         }) //anchor
       })  //tabSet
});