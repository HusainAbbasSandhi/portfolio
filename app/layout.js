export default function Layout({ children }) {
  return (
      <html lang="en">
          <body>
          <nav>
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
          </nav>
              {children}
          </body>
      </html>
  );
}
import './globals.css';
