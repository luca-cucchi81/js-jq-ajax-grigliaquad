// SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.
for (var i = 0; i < 36; i++) {
    var source = $('#square-template').html();
    var template = Handlebars.compile(source);

    var context = { numero: 'ciao'};
    var num = template(context);
    $('.container').append(num);
}

$(document).on('click', '#square-template', function(event){

});
