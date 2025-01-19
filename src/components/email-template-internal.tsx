import * as React from 'react'

interface EmailTemplateProps {
  name: string
  message: string
  company: string
  budget: string
  phone: string
}

export const InternalEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  company,
  budget,
  phone,
}) => (
  <div
    style={{
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#ebf8ff',
      borderRadius: '16px',
    }}
  >
    {/* Content container */}
    <div>
      {/* Logo */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wenovate-nTR3PcN9HFJO6SYpY8aKREAfDB6u6B.png"
          alt="Wenovate Logo"
          style={{
            maxWidth: '200px',
            height: 'auto',
          }}
        />
      </div>

      <h1
        style={{
          color: '#070035',
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '25px',
          textAlign: 'center',
        }}
      >
        Új megkeresés érkezett! 🎉
      </h1>

      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(7,0,53,0.1)',
        }}
      >
        <p
          style={{
            color: 'rgba(7,0,53,.7)',
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
          Szia Admin! 👋 Izgalmas híreink vannak:
        </p>

        <div
          style={{
            backgroundColor: '#f0f8ff',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '2px solid #82d7ff',
          }}
        >
          <p
            style={{
              color: '#070035',
              fontSize: '18px',
              lineHeight: '1.6',
              margin: '0 0 10px 0',
            }}
          >
            <strong>Név:</strong> {name}
          </p>
          <p
            style={{
              color: '#070035',
              fontSize: '18px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            <strong>Üzenet:</strong> {message}
          </p>
          <p
            style={{
              color: '#070035',
              fontSize: '18px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            <strong>Cég:</strong> {company}
          </p>
          <p
            style={{
              color: '#070035',
              fontSize: '18px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            <strong>Telefonszám:</strong> {phone}
          </p>
          <p
            style={{
              color: '#070035',
              fontSize: '18px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            <strong>Költségvetés:</strong> {budget}
          </p>
        </div>

        <p
          style={{
            color: 'rgba(7,0,53,.7)',
            fontSize: '18px',
            lineHeight: '1.6',
          }}
        >
          Ideje akcióba lendülni! 🚀 Válaszolj a megkeresésre, amint lehetséges.
        </p>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '25px',
          color: 'rgba(7,0,53,.7)',
          fontSize: '14px',
        }}
      >
        © {new Date().getFullYear()} Wenovate. Minden jog fenntartva. ✨
      </div>
    </div>
  </div>
)
