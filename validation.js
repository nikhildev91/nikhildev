function validatesubmitform(){
    var valid = $("#submitform").validate({
        rules:{
            name:{
                required: true,
                minlength: 5,
                maxlength: 30,
                lettersonly: true
            },
            email:{
                required: true,
                email: true,
                minlength: 5
            },
            subject:{
                required: true,
                minlength: 5,
                maxlength: 30
            },
            message:{
                required: true,
                minlength: 8,
                maxlength: 30
            }
        }
    })
    return valid;
}


jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Only letters and spaces are allowed");


$(document).ready(function(){
    validatesubmitform();
})