import type { ReactNode } from 'react';

export function LegalLayout({
  title,
  updatedDate,
  children,
}: {
  title: string;
  updatedDate: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 lg:py-24">
      <h1 className="font-heading text-3xl font-light tracking-title text-brun sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-xs text-brun/45">
        Dernière mise à jour : {updatedDate}
      </p>

      <div className="prose-legal mt-10 flex flex-col gap-8">{children}</div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-lg font-normal text-brun">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-body text-brun/70">
        {children}
      </div>
    </section>
  );
}
