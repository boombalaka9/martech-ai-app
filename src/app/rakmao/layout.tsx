import { Sidebar } from "@/components/rakmao/sidebar";

export default function RakmaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex font-sans text-rk-on-surface">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 md:ml-64 bg-rk-bg-neutral min-h-screen">
        {children}
      </main>
    </div>
  );
}
