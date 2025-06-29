import React from "react";

export const Debates = () => {
    const certificates = [
      "/certificates/Debates/1. Perfect Interview First ranking.jpg",
      "/certificates/Debates/warp gd.png",
      "/certificates/Debates/english debate.png",
      "/certificates/Debates/parlance.png",
      "/certificates/Debates/5. MOOT Court.png",
      "/certificates/Debates/youth parliament.png",
      "/certificates/Debates/7. Old Essay Writing First Prize.JPG",
      "/certificates/Debates/steins gate 20.png",
      "/certificates/Debates/steins gate 21.png",
      "/certificates/Debates/steins gate 22.png",
      "/certificates/Debates/hindi debate.png"
    ];

    return (
      <div>
        <main>
          <h2>Debates</h2>
          <p>
            Member of the high school dramatics team; represented school in
            dramatics, and comedy competitions.
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
      </div>
    );
};
