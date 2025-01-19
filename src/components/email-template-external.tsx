import * as React from "react";

interface EmailTemplateProps {
  name: string;
}

export const ExternalEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => (
  <div
    style={{
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      maxWidth: "600px",
      margin: "0 auto",
      padding: "30px",
      backgroundColor: "#ebf8ff",
      borderRadius: "16px",
    }}
  >
    <div>
      {/* Header with title and logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "25px",
          padding: "20px 0",
        }}
      >
        <h1
          style={{
            color: "#070035",
            fontSize: "24px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Köszönjük a megkeresést! 🎉
        </h1>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wenovate-nTR3PcN9HFJO6SYpY8aKREAfDB6u6B.png"
          alt="Wenovate Logo"
          style={{
            maxWidth: "120px",
            height: "auto",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(7,0,53,0.1)",
        }}
      >
        <p
          style={{
            color: "rgba(7,0,53,.7)",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Kedves {name}! 👋
        </p>

        <p
          style={{
            color: "rgba(7,0,53,.7)",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Köszönjük, hogy felvette velünk a kapcsolatot. Megkaptuk az üzenetét,
          és hamarosan válaszolunk rá.
        </p>

        <div
          style={{
            backgroundColor: "#f0f8ff",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "2px solid #82d7ff",
          }}
        >
          <p
            style={{
              color: "#070035",
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "1.6",
              margin: "0 0 15px 0",
            }}
          >
            Mit várhat ezután?
          </p>
          <div
            style={{
              color: "#070035",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            {[
              "Csapatunk átnézi az Ön megkeresését",
              "24-48 órán belül személyesen felvesszük Önnel a kapcsolatot",
              "Megbeszéljük az Ön egyedi igényeit és lehetséges megoldásokat kínálunk",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    minWidth: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#82d7ff",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            color: "rgba(7,0,53,.7)",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Addig is, ha bármilyen kérdése van, ne habozzon kapcsolatba lépni
          velünk!
        </p>

        <p
          style={{
            color: "rgba(7,0,53,.7)",
            fontSize: "18px",
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          Üdvözlettel,
          <br />A Wenovate Csapata 🚀
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "25px",
          color: "rgba(7,0,53,.7)",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Wenovate. Minden jog fenntartva. ✨
      </div>
    </div>
  </div>
);
