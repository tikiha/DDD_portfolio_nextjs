export const metadata = {
  title: "NEWS | DDD",
  description: "Driven Design Duo web creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
