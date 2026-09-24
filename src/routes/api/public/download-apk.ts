import { createFileRoute } from '@tanstack/react-router'

const APK_URL =
  'https://github.com/nexora-solutionske/kibarua-connect-local/releases/download/main/kibaruaConnect.apk'

export const Route = createFileRoute('/api/public/download-apk')({
  server: {
    handlers: {
      GET: async () => {
        const upstream = await fetch(APK_URL, { redirect: 'follow' })
        if (!upstream.ok || !upstream.body) {
          return new Response('Download unavailable', { status: 502 })
        }
        return new Response(upstream.body, {
          status: 200,
          headers: {
            'Content-Type': 'application/vnd.android.package-archive',
            'Content-Disposition': 'attachment; filename="Kibarua.apk"',
            ...(upstream.headers.get('content-length')
              ? { 'Content-Length': upstream.headers.get('content-length')! }
              : {}),
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
