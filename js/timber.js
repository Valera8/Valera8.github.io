$(document).ready(function(){
    /*Всплитые увеличенной картинки*/
    $('.popup').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
    });
});
