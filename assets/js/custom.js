$(window).scroll( () => {
    if($(this).scrollTop() > 0){
        $('.btn-up').slideDown(300)
    }else {
        $('.btn-up').slideUp(300)

    }
})