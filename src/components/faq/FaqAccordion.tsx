import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqCategory } from '../../data/faq';

function AccordionItem({
  categoryId,
  index,
  question,
  answer,
}: {
  categoryId: string;
  index: number;
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${categoryId}-${index}`;
  const buttonId = `faq-button-${categoryId}-${index}`;

  return (
    <div className="border-b border-dore/20">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm text-brun transition-colors hover:text-terracotta-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
        >
          <span>{question}</span>
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-5 pr-8 text-sm leading-body text-brun/70"
      >
        {answer}
      </div>
    </div>
  );
}

export function FaqAccordion({ category }: { category: FaqCategory }) {
  return (
    <div>
      {category.items.map((item, i) => (
        <AccordionItem
          key={i}
          categoryId={category.id}
          index={i}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
