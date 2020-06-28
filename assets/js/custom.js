$(window).scroll( () => {
    if($(this).scrollTop() > 0){
        $('.btn-up').slideDown(300)
    }else {
        $('.btn-up').slideUp(300)

    }
})
const db = firebase.firestore();

const clientForm = document.getElementById('client-form');

const saveClient = (name,email,message) =>
    db.collection('stelhax-clientes').doc().set({
     name,
     email,
	 message
});



clientForm.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const name = clientForm['client-name'];
    const email = clientForm['client-email'];
	const message = clientForm['client-message'];

    await saveClient(name.value,email.value,message.value);

    clientForm.reset();

});