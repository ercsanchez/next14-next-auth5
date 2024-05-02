export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">
        Shared navbar for dashboard pages
      </nav>
      {children}
    </div>
  );
}
