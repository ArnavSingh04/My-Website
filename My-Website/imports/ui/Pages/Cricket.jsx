import React from "react";

export const Cricket = () => {
    const certificates = [
      "/certificates/Cricket/1. Man of the Match.jpg",
      "/certificates/Cricket/2. Man of teh match U 14.jpg",
      "/certificates/Cricket/3. Cricket tournament Winner.jpg",
      "/certificates/Cricket/4. All India Cricket Tournament 2019.pdf",
      "/certificates/Cricket/WhatsApp Image 2025-06-29 at 11.24.44 (1).jpeg",
      "/certificates/Cricket/WhatsApp Image 2025-06-29 at 11.24.44.jpeg"
    ];
    
    return (
      <main>
        <h2>Cricket</h2>
        <p>Details about my cricket experience I've participated in.</p>
        <div className="certificate-grid">
          {certificates.map((src, index) => {
            const isPDF = src.endsWith(".pdf");

            return (
              <div key={index} className="certificate-card">
                {isPDF ? (
                  <embed src={src} type="application/pdf" />
                ) : (
                  <img src={src} alt={`Certificate ${index + 1}`} />
                )}
              </div>
            );
          })}
        </div>
      </main>
    );
};

