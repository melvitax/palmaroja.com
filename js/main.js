$( document ).ready(function() {

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]').click(function(e) {
        var hash = this.hash;
        e.preventDefault();
        var location = hash == "" ? 0 : $(hash).offset().top - 50
        $('html, body').animate({
            scrollTop: location
            }, 500, function(){
            window.location.hash = hash;
        });
    });

    $('#carousel-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        var title = button.data('title') 
        var images = button.data('images')
        var modal = $(this)
        var inner = ""
        var indicator = ""
        for (var i in images) {
            var active = (i == 0) ? "active" : ""
            inner += '<div class="carousel-item '+active+'"> <img class="d-block w-100 img-fluid" src="'+images[i]+'" alt="" ></div>';
            indicator += '<li data-target="#carousel" data-slide-to="'+i+'" class="'+active+'"></li>'
        }
        modal.find('.modal-title').text(title)
        modal.find('.modal-body .carousel-indicators').html(indicator)
        modal.find('.modal-body .carousel-inner').html(inner)
      })

}); 