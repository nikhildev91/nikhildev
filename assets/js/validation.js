$(document).ready(function()
{
    $("#submit-form").validation({
        rules:{
            yourname:{
                reuired:true,
                minlength:5,
                maxlength:8,
                
            }

        }
    })
})