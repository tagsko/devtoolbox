interface WhatIsProps {
  toolName: string;
  content: string;
}

export function WhatIs({ toolName, content }: WhatIsProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        What Is {toolName}?
      </h2>
      <div className="mt-3 space-y-4 text-gray-600 dark:text-gray-400">
        {content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
