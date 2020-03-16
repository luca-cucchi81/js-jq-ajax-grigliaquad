// SCOPO DEL GIOCO: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.
for (var i = 0; i < 36; i++) {
    var source = $('#square-template').html();
    var template = Handlebars.compile(source);

    var context = { numero: ""};
    var num = template(context);
    $('.container').append(num);
}

$(document).on('click', '.square', function(event){
    if ($(event.target).find('h1').text() == ""){
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (data, stato){
                $(event.target).find('h1').text(data.response);
                if (data.response <= 5){
                    $(event.target).addClass('yellow');
                }else{
                    $(event.target).addClass('green');
                }
            },
            error: function (richiesta, stato, errori) {
            alert("E' avvenuto un errore. " + errore);
            },
        });
    }
});
