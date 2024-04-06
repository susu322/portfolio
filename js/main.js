$(document).ready(function(){
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

       $('.panel_1, .zoom').each(function(){
        $(this).click(function(event){
            event.preventDefault();
            var img_name = $(this).find('.pin');
            var img_src = $(img_name).attr('href');
            var img_alt = $(img_name).attr('title');
            var height = $(img_name).attr('rel');

            $('#modal').addClass('on');
            $('#modal').show();
            $('#modal img').attr('src',img_src);

            $('.body').removeClass('longh');
            $('.body').addClass(height);
            })
          })
        $("#modal").click(function() {
          $('#modal').removeClass('on');
      });
});