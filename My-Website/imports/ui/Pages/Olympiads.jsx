import React from "react";

export const Olympiads = () => {
  const certificates = [
    "/certificates/Olympiads/irao silverzone.png",
    "/certificates/Olympiads/imo silverzone.png",
    "/certificates/Olympiads/silverzone english.png",
    "/certificates/Olympiads/SOF English Olympiad.png",
    "/certificates/Olympiads/ntse.png"
  ];
  return (
    <main>
      <h2>Olympiads</h2>
      <p>The Olympiads I've participated in...</p>
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
