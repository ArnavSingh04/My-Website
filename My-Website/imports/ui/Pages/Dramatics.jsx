import React from "react";

export const Dramatics = () => {
    const certificates = [
      "/certificates/Dramatics/1. Trophy Best Actor.jpeg",
      "/certificates/Dramatics/2. Trophy dramactis first prize.jpeg",
      "/certificates/Dramatics/3.Tamapsha Improv `new.pdf",
      "/certificates/Dramatics/4. Tamasha Bizare new.pdf",
      "/certificates/Dramatics/5. Dramatics.pdf",
      "/certificates/Dramatics/6. on spot comedy 2.png",
      "/certificates/Dramatics/7. Curtains Up _ English play.JPG",
      "/certificates/Dramatics/8. Stand up comedy.png",
      "/certificates/Dramatics/9. Theatron 21-22 participation.pdf",
      "/certificates/Dramatics/10. Theatre hindi.pdf",
    ];
    return (
      <main>
        <h2>Dramatics & Theatre</h2>
        <p>Details about the dramatics competitons I've participated in.</p>
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
