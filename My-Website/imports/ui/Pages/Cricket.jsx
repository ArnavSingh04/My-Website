import React from "react";

export const Cricket = () => {
    const certificates = [
      "/certificates/Cricket/WhatsApp Image 2025-06-29 at 11.24.44 (1).jpeg",
      "/certificates/Cricket/WhatsApp Image 2025-06-29 at 11.24.44.jpeg",
      "/certificates/Cricket/ispc.png",
      "/certificates/Cricket/1. Man of the Match.jpg",
      "/certificates/Cricket/2. Man of teh match U 14.jpg",
      "/certificates/Cricket/3. Cricket tournament Winner.jpg",
    ];
    
    return (
      <main>
        <h2>Cricket</h2>
        <p>
          Monash University Varsity Cricket Team, Monash University Cricket
          Club, High School team Vice Captain
        </p>
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

