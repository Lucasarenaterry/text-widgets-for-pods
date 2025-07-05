import './global.css';

export const metadata = {
  title: 'Text Widgets for Pods',
  description: 'This is a web application for text widgets in pods',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
