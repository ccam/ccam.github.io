$(document).ready( function() {
    $(".form").hide();
    $(".add").click(function() {
        $(".form").show();
        $(".add").hide()

    });


    $('form input[name="email"]').blur(function () {
    	var email = $(this).val();
    	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
    	if (re.test(email)) {
    		$('.msg').hide();
    		$('.success').show();
    	} else {
    		$('.msg').hide();
    		$('.error').show();
    	}

    });

});