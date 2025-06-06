export const metadata = {
  title: "Trackify Authentication | ",
  description:
    "Trackify is a robust expense tracking and management tool designed to simplify financial oversight for individuals and businesses.",
};

export default function AuthenticationLayout({ children }) {
    return (
    <>
      <main className="relative flex min-h-full min-w-full bg-background">
        {children}
      </main>
    </>
  );
}
