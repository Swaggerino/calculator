$(document).ready(
    function(){

        $('.buttons').children( ":input" ).each( function(i) {
            $(this).on('click', function() {
                $('#screen').val( $('#screen').val() + $(this).val() );
            });
        });

        $('.operators').children( ":input").each(function(i){
            $(this).on('click', function() {
                $('#screen').val( $('#screen').val()+$(this).val() );
            });
        });
        $('#eval').on('click', function(){
            $('#screen').val(eval($('#screen').val()));
        });
        $('#C').on('click', function(){
            $('#screen').val('');
        });
        $('#float').on('click', function(){
            $('#screen').val( $('#screen').val()+$(this).val() );
        });
    });
