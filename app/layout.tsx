/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css'
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>
          Next.js + TypeScript + Tailwind CSS + MUI + ESLint + Prettier Boilerplate
        </title>
      </head>
      <body>
        <div className='flex flex-col justify-center items-center'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
