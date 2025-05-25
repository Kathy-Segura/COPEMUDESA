import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Script de Metricool */}
        <Script id="metricool" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].q=m[i].q||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://tracker.metricool.com/resources/be.js", "metr");

            metr('init', { apiKey: "365fcbdf8c1325ae7bc34ee1ab3e8fd3" });
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}