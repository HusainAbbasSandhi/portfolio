export default function Layout({ children }) {
  return (
      <html lang="en">
          <body>
              <nav>
                  <a href="/">🏠 Home</a> | <a href="/projects">💼 Projects</a>
              </nav>
              {children}
          </body>
      </html>
  );
}
import './globals.css';
