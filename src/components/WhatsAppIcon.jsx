import React from "react";
const WhatsAppIcon = () => {
  const whatsappLink = "https://wa.me/0678197663";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <img
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        className="whatsapp-icon-svg"
      />
    </a>
  );
};

export default WhatsAppIcon;
