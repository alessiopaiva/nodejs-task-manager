const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRIP_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alessio.bertolini@gmail.com',
        subject: 'Hello World',
        text: `Hello World, ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alessio.bertolini@gmail.com',
        subject: 'Sorry',
        text: `Sorry World, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}