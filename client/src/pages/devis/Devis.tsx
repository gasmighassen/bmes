import React, { useEffect, useRef, useState } from "react";
import ButtonBmes from "../../components/button/ButtonBmes";
import "../../_dist/Devis.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Select, Input } from "antd";
type Props = {};
interface Option {
  label: string;
  value: string;
}
const Devis = ({}: Props) => {
  const options: Option[] = [
    {
      label: "Dossier architectural",
      value: "-Dossier architectural",
    },
    {
      label: "Dossier structure en béton armé",
      value: "-Dossier structure en béton armé",
    },
    {
      label: "Dossier design d'intérieur",
      value: "-Dossier design d'intérieur",
    },
    {
      label: "Dossier électricité",
      value: "-Dossier électricité",
    },
    {
      label: "Dossier plomberie",
      value: "-Dossier plomberie",
    },
  ];
  const [servicesDemandes, setServicesDemandes] = useState<Option[]>([]);

  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (form.current) {
      form.current.setAttribute("rel", "prefetch");
    }
  }, []);

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (form.current) {
      const selectedOptions = servicesDemandes
        .map((option) => option.label)
        .join(", ");
      console.log(selectedOptions);
      form.current["selectedOptions"].value = selectedOptions;
      emailjs
        .sendForm(
          "service_rz275s1",
          "template_x0prm2t",
          form.current,
          "Fzrl-0RJSBqkn4ZsO"
        )
        .then(
          (result) => {},
          (error) => {}
        );
    }
  };
  const handleSelectChange = (selectedOptions: string[]) => {
    const selectedItems: Option[] = options.filter((option) =>
      selectedOptions.includes(option.value)
    );
    setServicesDemandes(selectedItems);
  };
  return (
    <div className="bmes__devis__section">
      <div className="devis_Wrap">
        <div className="devis_Form">
          <form className="formInputs" ref={form}>
            <p>Nom et prénom</p>
            <Input
              type="text"
              name="nom-Prenom"
              required
              placeholder="votre nom et prénom"
            />
            <p>Adresse</p>
            <Input
              type="text"
              name="adresse"
              placeholder="votre adresse"
              required
            />
            <p>Adresse e-mail</p>
            <Input
              type="text"
              name="email"
              placeholder="votre e-mail"
              required
            />
            <p>Numéro de téléphone</p>
            <Input
              type="text"
              name="phone"
              placeholder="votre numéro de téléphone"
              required
            />
            <p>Surface du terrain ( en m²)</p>
            <Input
              type="number"
              name="surface"
              placeholder="Surface en m²"
              min="1"
              max="9999"
              required
            />
            <p>Localisation du terrain</p>
            <Input
              type="text"
              name="localisation"
              placeholder="Localisation de terrain"
              required
            />
            <p>Service(s) demandé(s)</p>
            <input type="hidden" name="selectedOptions" />
            <Select
              mode="multiple"
              allowClear
              placeholder="slectionnez au moins un service"
              onChange={handleSelectChange}
            >
              {options.map((option, i) => (
                <Select.Option
                  key={i}
                  value={option.value}
                  onClick={(e) => console.log(e.target.value)}
                >
                  {option.label}
                </Select.Option>
              ))}
            </Select>{" "}
            <ButtonBmes onClick={sendEmail}>Envoyer</ButtonBmes>
          </form>
          <h4>
            Note:le devis sera transmis par mail ou on vous contactera par
            téléphone
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Devis;
