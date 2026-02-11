import { Sidebar } from "@/components/layout/Sidebar";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        <div className="min-w-0 flex-1">{children}</div>
        <Sidebar />
      </div>
    </div>
  );
}
