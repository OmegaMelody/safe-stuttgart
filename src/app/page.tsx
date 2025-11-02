// app/page.tsx
import FilterBar, { DateRange } from "@/app/components/FilterBar";
import MapShell from "@/app/components/MapShell";

export default function Page() {
  // Плейсхолдер: зараз не використовуємо, просто тип показуємо
  const currentRange: DateRange = "today";

  return (
    <main className="h-[100dvh] flex flex-col">{/* було min-h[...] */}
      <FilterBar current={currentRange} />
      <div className="flex-1 min-h-0 relative">{/* додали relative */}
        <MapShell ariaLabel="Map container (placeholder)" />
      </div>
    </main>
  );
}