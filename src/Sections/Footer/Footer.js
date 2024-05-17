import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${style.footer} container text-center text-capitalize p-5`}>
      Copyright &copy; 2024 Cyborg Gaming Company. All rights reserved. Design:
      TemplateMo
    </div>
  );
};

export default Footer;
