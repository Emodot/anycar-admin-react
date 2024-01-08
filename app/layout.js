import './globals.css'
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";


export const metadata = {
  title: 'Anycar Admin',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            draggable={false}
            closeOnClick
            pauseOnHover
          />
        </Providers>
      </body>
    </html>
  );
}
