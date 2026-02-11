interface HowToUseProps {
  steps: string[];
}

export function HowToUse({ steps }: HowToUseProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        How to Use
      </h2>
      <ol className="list-inside list-decimal space-y-2 text-gray-600 dark:text-gray-400">
        {steps.map((step, i) => (
          <li key={i} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
