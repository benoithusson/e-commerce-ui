import "../styles/globals.scss";
import Nav from "../components/_layout/Nav/Nav";
import Footer from "../components/_layout/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
