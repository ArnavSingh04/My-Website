import React from "react";

export const Debates = () => {
    const certificates = [
      "/certificates/Debates/1. Perfect Interview First ranking.jpg",
      "/certificates/Debates/2. Group Discussion _ 11th.pdf",
      "/certificates/Debates/3. English Debate.pdf",
      "/certificates/Debates/4 orator forum_11th.pdf",
      "/certificates/Debates/5. MOOT Court.png",
      "/certificates/Debates/6. Youth Parliament new.pdf",
      "/certificates/Debates/7. Old Essay Writing First Prize.JPG",
      "/certificates/Debates/8. Quiz _Steins _ new.pdf",
      "/certificates/Debates/9 Quiz Steins 2_ new.pdf",
      "/certificates/Debates/10.Debate hindi.pdf",
    ];

    return (
      <div>
        <main>
          <h2>Debates</h2>
          <p>Details about my debating experience.</p>
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
      </div>
    );
};
