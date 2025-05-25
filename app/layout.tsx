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
        <Script
          id="metricool-be"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(callback) {
                var head = document.getElementsByTagName("head")[0];
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "https://tracker.metricool.com/resources/be.js";
                script.onreadystatechange = callback;
                script.onload = callback;
                head.appendChild(script);
              }
              loadScript(function() {
                beTracker.t({ hash: "365fcbdf8c1325ae7bc34ee1ab3e8fd3" });
              });
            `
          }}
        />
        {children}
      </body>
    </html>
  )
}