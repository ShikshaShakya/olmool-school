import React from "react";
import "../styles/AssociatePartners.css";
import img1 from "./mission.svg";
import img2 from "./vision.svg";
import img3 from "./team.svg";
import img4 from "./mission.svg";
import img5 from "./vision.svg";

const AssociatePartners = () => {
  const partners = [
    { id: 1, name: "Partner 1", logo: img1 },
    { id: 2, name: "Partner 2", logo: img2 },
    { id: 3, name: "Partner 3", logo: img3 },
    { id: 4, name: "Partner 4", logo: img4 },
    { id: 5, name: "Partner 5", logo: img5 },
    // Add more partners here
  ];

  return (
    <div className="partners-banner" id="partners">
      <div className="partners-track">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
        {/* Repeat the logos for infinite scroll effect */}
        {partners.map((partner) => (
          <div key={`${partner.id}-duplicate`} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociatePartners;
