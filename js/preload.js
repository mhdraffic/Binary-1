    
$(document).ready(function(){
    setTimeout(function(){
        $('#loading').show().fadeOut();
    },1500);

    setTimeout(function(){
        $('#popUpMain').css('display','block');
    },5000);

    $('.submitId').click(function(){
        $('#popUpMain').css('display','none');
    });
    $('#popUpMain').click(function(){
        $('#popUpMain').css('display','none');
    });
});
