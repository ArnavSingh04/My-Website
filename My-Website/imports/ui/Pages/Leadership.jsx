import React from "react";

export const Leadership = () => {
    const certificates = [
      "/certificates/Leadership/1. Trophy Young leadership club.jpeg",
      "/certificates/Leadership/2, School Vice Head Boy.pdf",
      "/certificates/Leadership/3. Junior Vice Captain.JPG",
      "/certificates/Leadership/4. Peer Educator.pdf",
      "/certificates/Leadership/5. Student Ambasdor 1.pdf",
      "/certificates/Leadership/6. VY Leap.JPG",
      "/certificates/Leadership/7. W- Leap _ 11th.pdf",
      "/certificates/Leadership/8. YLC Conference _11th.pdf",
      "/certificates/Leadership/9. YLC Event 11th.pdf",
      "/certificates/Leadership/10. Webnair Particiaption.pdf"
    ];
    return (
      <main>
        <h2>Leadership</h2>
        <p>Details about the Leadership programmes I've participated in.</p>
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
