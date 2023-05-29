import React, { useRef } from "react";
import "../../_dist/ContactUs.css";
import BmesInput from "../../components/Input/BmesInput";
import BmesTextArea from "../../components/textArea/BmesTextArea";
import ButtonBmes from "../../components/button/ButtonBmes";
import emailjs from "@emailjs/browser";
type Props = {};

const ContactUs = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("send");
    if (form.current) {
      emailjs
        .sendForm(
          "service_rz275s1",
          "template_x0prm2t",
          form.current,
          "Fzrl-0RJSBqkn4ZsO"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="bmes__contact-us">
      <form className="bmes__contact__form" ref={form}>
        <h1>Merci de nous contacter</h1>
        <BmesInput placeholder="Nom & Prenom" name="user_name" />
        <BmesInput placeholder="Votre email" name="user_email" />
        <BmesTextArea placeholder="Votre message" name="message" />
        <ButtonBmes onClick={sendEmail}>Envoyer</ButtonBmes>
      </form>
    </div>
  );
};

export default ContactUs;
