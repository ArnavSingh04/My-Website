import React from "react";

export const Olympiads = () => {
    const certificates = [
      "/certificates/Olympiads/Silverzone English 21-22.pdf",
      "/certificates/Olympiads/Silverzone International Reasoning & Aptitude 21-22.pdf",
      "/certificates/Olympiads/Silverzone Maths 21-22.pdf",
      "/certificates/Olympiads/Silverzone Maths 21-22.pdf",
      "/certificates/Olympiads/Unified council_ national level science new.pdf",
    ];
    return (
      <main>
        <h2>Olympiads</h2>
        <p>Details about the Olympiads I've participated in.</p>
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
