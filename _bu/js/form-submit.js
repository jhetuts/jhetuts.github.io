$(document).ready(function(){
    $('#contact-form').on('submit', function(e){
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var status = $('.status');

        status.empty();

        if(!(email.length > 5 && email.includes('@') && email.includes('.'))){
            e.preventDefault();
            status.append('<e>Email is invalid</e>');
        }
    });
});