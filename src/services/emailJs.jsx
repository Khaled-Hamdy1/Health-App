import emailjs from "emailjs-com";

const YOUR_SERVICE_ID = "service_g64v3nr";
const YOUR_TEMPLATE_ID = "template_mk35fsr";
const USER_ID = "HmBkOqS1645QF50ky";

export default function emailJs({user_name, user_email, message}) {
    const templateParams = {
      user_name: user_name,
      user_email: user_email,
      message: message,
    };
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual service and template IDs
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
}
