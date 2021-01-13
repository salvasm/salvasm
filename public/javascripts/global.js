$(function () {

	// More info button
	$('#moreInfo').on('show.bs.modal', function (e) {
		var button = $(e.relatedTarget)
		var company = button.data('company')
		var description = button.data('description')
		var technologies = button.data('technologies')
		
		for (let i = 0; i < technologies.length; i++) {
			technologies[i] = '<span class="badge rounded-pill bg-light text-dark mx-2 px-2">' + technologies[i] + '</span>';
		}

		console.log(technologies);
		var modal = $(this)
		modal.find('.modal-title').html(company)
		modal.find('.modal-body').html(description)
		modal.find('.modal-technologies p').html(technologies)
	})

	// Display photo button
	$('#displayPhoto').on('show.bs.modal', function (e) {
		var button = $(e.relatedTarget)
		var displayUrl = button.data('url')
		var shortcode = button.data('shortcode')

		var modal = $(this)
		modal.find('.modal-body .img').html('<img class="img-fluid" src="' + displayUrl + '"/>')
		modal.find('.modal-body .instagram-link').html('<a class="btn btn-link" href="https://www.instagram.com/p/' + shortcode + '"><i class="fa fa-instagram fa-2x"/></a>')
	})

	// Check for click events on the navbar burger icon
	$(".navbar-burger").on('click', function () {

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");

	});

});
