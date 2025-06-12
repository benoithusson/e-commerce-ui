import "../styles/globals.scss";
import Header from "../components/_layout/Header/Header";
import Footer from "../components/_layout/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
