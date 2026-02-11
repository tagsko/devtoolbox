"use client";

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export function AdInArticle() {
  if (adsenseId) {
    return (
      <div className="my-6">
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client={adsenseId}
          data-ad-slot="in-article"
          data-ad-format="fluid"
          data-ad-layout="in-article"
        />
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex h-[250px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400 dark:border-gray-700 dark:bg-gray-900">
        In-Article Ad
      </div>
    </div>
  );
}
