import "./globals.css";

export const metadata = {
  title: "Oxycea",
  description:
    "It is an advance hyperbaric oxygen therapy (HBOT) system compliant to international standards and regulations for operations and safety.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
