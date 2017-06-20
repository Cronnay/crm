$(document).ready(function(){
    $('.new-status').on('change', function(){
        $(this).parent().submit();
    });
});