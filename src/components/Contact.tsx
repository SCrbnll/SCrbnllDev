import { useState } from 'react';

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "samuelcarbonell1203@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); 
      })
      .catch((err) => console.error("Error copiando al portapapeles: ", err));
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="contact" className="container text-white mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="email-box p-3 mb-3 border rounded" style={{ width: '400px', backgroundColor: '#333' }}>
          <p className="text-center mb-0" style={{ fontSize: '18px' }}>
            {emailCopied ? '¡Correo copiado!' : email}
          </p>
        </div>

        <div className="p-3 mb-3 d-flex justify-content-center align-items-center">
          <button 
            className="btn btn-outline-light rounded-circle me-3" 
            style={{ width: '45px', height: '45px', border: '2px solid white' }}
            onClick={handleCopy}
          >
            <span className="material-icons" style={{ fontSize: '24px' }}>content_copy</span>
          </button>

          <button 
            className="btn btn-outline-light rounded-circle"
            style={{ width: '45px', height: '45px', border: '2px solid white' }}
            onClick={handleSendEmail}
          >
            <span className="material-icons" style={{ fontSize: '24px' }}>send</span>
          </button>
        </div>
      </div>

      <style>{`
        .email-box p {
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          animation: typing 3s steps(30) forwards;
        }

        @keyframes typing {
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
