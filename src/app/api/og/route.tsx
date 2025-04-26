import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

// Load custom font
const dietherRoundBold = fetch(
  new URL('../../../fonts/DietherRound-Bold.otf', import.meta.url),
).then((res) => res.arrayBuffer())

export async function GET(req: NextRequest) {
  try {
    // Load font
    const dietherRoundBoldData = await dietherRoundBold

    const { searchParams } = new URL(req.url)
    const title =
      searchParams.get('title') || 'Fejlesszük együtt a digitális jövődet'

    // SVG for noise texture
    const noiseSvg = `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>
    `

    // Base64 encode the SVG
    const noiseSvgBase64 = Buffer.from(noiseSvg).toString('base64')

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            backgroundImage: `
            url("data:image/svg+xml;base64,${noiseSvgBase64}"),
            linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 50%, #93c5fd 100%)
          `,
            padding: '80px',
            position: 'relative',
          }}
        >
          {/* Title - left aligned in center */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: '80%',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontFamily: 'DietherRound',
                fontWeight: 'bold',
                color: '#1e293b',
                lineHeight: 1.2,
                margin: 0,
                padding: 0,
                textAlign: 'left',
              }}
            >
              {title}
            </h1>
          </div>

          {/* Domain at bottom left */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '80px',
              fontFamily: 'DietherRound',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#334155',
            }}
          >
            wenovate.io
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'DietherRound',
            data: dietherRoundBoldData,
            weight: 700,
            style: 'normal',
          },
        ],
      },
    )
  } catch (error: unknown) {
    console.log(
      `Error generating OG image: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
