if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
} else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

(function($) {
    $.fn.autosubmit = function() {
        this.submit(function(event) {
            event.preventDefault();
            emptyForm();
            var form = $(this);
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).done(function(data) {
                formSent(true);
            }).fail(function(data) {
                formSent(false);
            });
        });
        return this;
    }
})(jQuery)

$(function() {
    $('form[data-autosubmit]').autosubmit();
});

function formSent(boolean){

    if(boolean == true){
        //alert("The email was sent!");
        document.getElementById("submited").style.zIndex = "10";
        document.getElementById("submited").style.opacity = "1";

    }
    if(boolean == false){

    }

}
function emptyForm(){
    document.getElementById("sub").disabled = true;
    document.getElementById("contactForm").reset();
}