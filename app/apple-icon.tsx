import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#132D20',
        fontFamily: 'serif',
        gap: 6,
      }}
    >
      <span
        style={{
          color: '#C4A96B',
          fontSize: 100,
          fontWeight: 400,
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        M
      </span>
      <span
        style={{
          color: '#C4A96B',
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: '0.3em',
          opacity: 0.8,
        }}
      >
        ADVISORY
      </span>
    </div>,
    { ...size }
  )
}
