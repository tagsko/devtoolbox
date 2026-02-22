import { UseCase } from "@/types/tool";

interface UseCasesProps {
  items: UseCase[];
}

export function UseCases({ items }: UseCasesProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Common Use Cases
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
