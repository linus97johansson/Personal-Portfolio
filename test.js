const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

//Dont really know what this is...
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use('/public', express.static(path.join(__dirname, 'public')));


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});
app.listen(bodyParser.testButton)
function test(){
    console.log("This could theoretically send the email");
}

app.post('/send', (req, res) => {

    console.log(req.body);

    const output = `
        <p>New Message!</p>
        <h3>Details:</h3>
        <ul>
        <li>email:${req.body.email}</li>
        <li>phone:${req.body.phone}</li>
</ul>
<h3>Message:</h3>
<p>${req.body.message}</p>
    `;

let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "linus97johansson@gmail.com", // generated ethereal user
        pass: "TrollinWolf" // generated ethereal password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Test! 👻" <linus97johansson@gmail.com>', // sender address
    to: 'bloodedmaniac@gmail.com', // list of receivers
    subject: ' | new message !', // Subject line
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

res.render('index', {msg: "Email Sent!"});

});

});

app.listen(3000, () => console.log('server started...'));