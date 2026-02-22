import { FAQItem } from "@/types/tool";

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <dl className="mt-4 space-y-4">
        {items.map((item, i) => (
          <div key={i}>
            <dt className="font-medium text-gray-900 dark:text-gray-100">
              {item.question}
            </dt>
            <dd className="mt-1 text-gray-600 dark:text-gray-400">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
