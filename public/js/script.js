$(document).ready(function(){
    $('.new-status').on('change', function(){
        $(this).parent().submit();
    });
    $("#customertabs a").on("click", function(e){
        $(this).tab('show');
    });
});
