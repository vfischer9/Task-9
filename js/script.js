jQuery(document).ready(function($){

    $('#greeting-form').on('submit', function(e){
       
        e.preventDefault();
        console.log('Submission detected.');
        var name = $('#name').val();
        var para = $('<p></p>');        //output in a paragraph
        $("#tasks").prepend(para, name);
      
    });
});