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
              <SpeedInsights />
          </body>
      </html>
  );
}
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"