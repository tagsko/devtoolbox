"use client";

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export function AdSidebar() {
  if (adsenseId) {
    return (
      <div className="my-4">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adsenseId}
          data-ad-slot="sidebar"
          data-ad-format="vertical"
        />
      </div>
    );
  }

  return (
    <div className="my-4">
      <div className="flex h-[600px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400 dark:border-gray-700 dark:bg-gray-900">
        Sidebar Ad
      </div>
    </div>
  );
}
