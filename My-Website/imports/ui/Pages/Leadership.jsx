import React from "react";

export const Leadership = () => {
  const certificates = [
    "/certificates/Leadership/1. Trophy Young leadership club.jpeg",
    "/certificates/Leadership/vice head boy.png",
    "/certificates/Leadership/3. Junior Vice Captain.JPG",
    "/certificates/Leadership/cbse life skills.png",
    "/certificates/Leadership/student ambassador.png",
    "/certificates/Leadership/6. VY Leap.JPG",
    "/certificates/Leadership/vp leap active.png",
    "/certificates/Leadership/ylc conference.png",
    "/certificates/Leadership/surprise event.png",
    "/certificates/Leadership/edumate panelist.png"
  ];
  return (
    <main>
      <h2>Leadership</h2>
      <p>Leadership programmes I've participated in...</p>
      <div className="certificate-grid">
        {certificates.map((src, index) => {
          return (
            <div key={index} className="certificate-card">
                <img src={src} alt={`Certificate ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </main>
  );
};
