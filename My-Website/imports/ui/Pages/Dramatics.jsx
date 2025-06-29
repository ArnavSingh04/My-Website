import React from "react";

export const Dramatics = () => {
    const certificates = [
      "/certificates/Dramatics/1. Trophy Best Actor.jpeg",
      "/certificates/Dramatics/2. Trophy dramactis first prize.jpeg",
      "/certificates/Dramatics/improv Tamasha.png",
      "/certificates/Dramatics/bizzare.png",
      "/certificates/Dramatics/tamasha.png",
      "/certificates/Dramatics/6. on spot comedy 2.png",
      "/certificates/Dramatics/7. Curtains Up _ English play.JPG",
      "/certificates/Dramatics/8. Stand up comedy.png",
      "/certificates/Dramatics/prop-o-sition.png",
      "/certificates/Dramatics/hindi debate.png",
    ];
    return (
      <main>
        <h2>Dramatics & Theatre</h2>
        <p>
          Represented school in debates, group discussions, conferences, and
          convocations.
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
