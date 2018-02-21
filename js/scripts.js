$(document).ready(function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-shadow'
    });
  /*Вскрыть показать блок новости*/
    $('.news_hidden').hide();
    $('#show-block').on('click', function(){
        var textLink = $('.news_hidden').is(':visible') ? 'Показать архив' : 'Скрыть архив';
        $('#show-block').text(textLink);
        $('.news_hidden').slideToggle(500);
    });
});



