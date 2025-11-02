// components/FilterBar.tsx
export type DateRange = "today" | "7d" | "30d";

export default function FilterBar({ current }: { current: DateRange }) {
  return (
    <div
      role="toolbar"
      aria-label="Filters"
      className="h-14 w-full border-b border-gray-300 bg-black/5 flex items-center px-4 text-sm"

    >
      {/* Поки просто текст, як ти просив */}
      <span className="select-none">
        Сьогодні / 7 днів / 30 днів
      </span>
    </div>
  );
}
