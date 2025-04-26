import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Wenovate Blog'
    const author = searchParams.get('author') || 'Wenovate'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(to bottom, #ffffff, #f3f4f6)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              maxWidth: '1000px',
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: 1.2,
                marginBottom: '30px',
                textAlign: 'center',
                color: '#111827',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 30,
                fontStyle: 'normal',
                lineHeight: 1.2,
                color: '#4B5563',
                textAlign: 'center',
              }}
            >
              {author}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
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
