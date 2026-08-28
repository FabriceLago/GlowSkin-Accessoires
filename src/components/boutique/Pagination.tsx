import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination({
  page,
  pageCount,
  onChange,
}: {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}) {
  if (pageCount <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-16 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label="Page précédente"
        className="flex h-8 w-8 items-center justify-center rounded-full text-brun/50 transition-colors hover:text-brun disabled:opacity-30"
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>

      {Array.from({ length: pageCount }).map((_, i) => {
        const n = i + 1;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-current={page === n ? 'page' : undefined}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
              page === n
                ? 'bg-brun text-ivoire'
                : 'text-brun/60 hover:text-brun'
            }`}
          >
            {n}
          </button>
        );
      })}

      <button
        type="button"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
        aria-label="Page suivante"
        className="flex h-8 w-8 items-center justify-center rounded-full text-brun/50 transition-colors hover:text-brun disabled:opacity-30"
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </nav>
  );
}
