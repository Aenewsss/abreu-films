const contactName = document.getElementById("contact-name");
const email = document.getElementById("contact-email");
const phone = document.getElementById("contact-phone");
const message = document.getElementById("contact-message");

function handleSubmit(e) {
    e.preventDefault()
    const templateParams = {
        user_name: contactName.value,
        user_phone: phone.value,
        user_email: email.value,
        user_message: message.value
    }

    const data = {
        service_id: "service_6tmgyph",
        template_id: "template_tlhkhrm",
        user_id: "template_tlhkhrm",
        template_params: templateParams
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(result => console.log(result))
        .catch(e => console.error(e))

    window.open("https://api.whatsapp.com/send?phone=5561991174617&text=Olá,%20Rodrigo.%20%20%20%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20referentes%20a%20criação%20de%20vídeos!", "_blank")
}