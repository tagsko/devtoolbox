"use client";

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export function AdBanner({ slot = "header" }: { slot?: string }) {
  if (adsenseId) {
    return (
      <div className="mx-auto my-4 max-w-7xl px-4">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adsenseId}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto my-4 max-w-7xl px-4">
      <div className="flex h-[90px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400 dark:border-gray-700 dark:bg-gray-900">
        Ad Banner ({slot})
      </div>
    </div>
  );
}
