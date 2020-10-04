$(document).ready(function() {
    const page = $('.hover-section');
    const block = $('.action-block');

    const cursor = $('.cursor');
    const dot = $('.dot');
    const box = $('.box');

    page.mousemove(function(event) {

        let pos = $(this).offset();
        let pageX = event.pageX;
        let pageY = event.pageY;
        let x = pageX - pos.left;
        let y = pageY - pos.top;

        cursor.css({
            'left' : (x - 12) + 'px',
            'top' : (y - 12) + 'px',
        });
        dot.css({
            'left' : (x - 1) + 'px',
            'top' : (y - 1) + 'px',
        });
    });

    block.mouseenter(function(event){
        box.css({
        'transition' : '0.175s ease-out'
      });
    })

    block.mousemove(function(event){

      let pos = $(this).offset();
      let pageX = event.pageX;
      let pageY = event.pageY;
      let x = pageX - pos.left;
      let y = pageY - pos.top;

        box.css({
        'left' : (x - 0) + 'px',
        'top' : (y - 0) + 'px',
        'opacity' : '1',
        // 'transition' : '0.075s ease-in-out'
      });
      cursor.css({
          'transform' : 'scale(1.4)',
          'border' : '3px solid ',
          'opacity' : '0.375'
      });
      dot.css({
          'display' : 'none'
      });
    });

    block.mouseleave(function(){
        box.css({
        'left' : '30%',
        'top' : '30%',
        'opacity' : '0.75',
        'transition' : '0.5s cubic-bezier(0.5, 1.6, 0.7, 1.0)'
      });
      cursor.css({
          'transform' : 'scale(1.0)',
          'border' : '2px solid ',
          'opacity' : '1'
      });
      dot.css({
          'display' : 'block'
      });
    })
})
