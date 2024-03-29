import React, { useEffect, useRef } from "react";
import "../../_dist/ContactUs.css";
import BmesInput from "../../components/Input/BmesInput";
import BmesTextArea from "../../components/textArea/BmesTextArea";
import ButtonBmes from "../../components/button/ButtonBmes";
import emailjs from "@emailjs/browser";
type Props = {};

const ContactUs = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (form.current) {
      // Enable back/forward cache restoration for the form
      form.current.setAttribute("rel", "prefetch");
    }
  }, []);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
   
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
         
          },
          (error) => {
         
          }
        );
    }
  };
  return (
    <div className="bmes__contact-us">
      <div className="bmes__form__container">
        <div className="contact__us__image">
          <img src="/images/contact_us-2.jpg" alt="" loading="lazy" />
        </div>
        <div className="form__container">
          {" "}
          <div className="contact__welcome">
            <h1>Contactez nous</h1>
            <h3>Contactez nous maintenant</h3>
          </div>
          <div className="bmes__contact_content">
            <form className="bmes__contact__form" ref={form}>
              <h1>
                Êtes-vous convaincu que nous sommes les meilleurs ?
                Contactez-Nous !
              </h1>
              <BmesInput placeholder="Nom & Prenom" name="user_name" />
              <BmesInput placeholder="Votre email" name="user_email" />
              <BmesTextArea placeholder="Votre message" name="message" />
              <ButtonBmes onClick={sendEmail}>Envoyer</ButtonBmes>
            </form>{" "}
            <div className="bmes__contact__image">
              <img src="/images/contact_left.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
