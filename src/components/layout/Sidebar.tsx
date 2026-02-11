import { AdSidebar } from "@/components/ads/AdSidebar";

export function Sidebar() {
  return (
    <aside className="hidden lg:block lg:w-[300px] lg:shrink-0">
      <div className="sticky top-20">
        <AdSidebar />
      </div>
    </aside>
  );
}
