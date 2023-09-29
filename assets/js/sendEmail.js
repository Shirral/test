function sendMail(contactForm) {
    emailjs.send('default_service', 'rosie', {
        'from_name': contactForm.name.value,
        'from_mail': contactForm.emailaddress.value,
        'message': contactForm.projectsummary.value
    })
    .then (
        function (response) {
            console.log('SUCCESS!', response);
        },
        function (error) {
            console.log('FAILED!', error);
        },
    );

    contactForm.name.value = '';
    contactForm.emailaddress.value = '';
    contactForm.projectsummary.value = '';

    return false;
}