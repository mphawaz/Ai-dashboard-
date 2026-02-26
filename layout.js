export const metadata = {
  title: "AI Productivity Dashboard",
  description: "Next.js Animated Dashboard",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
