import type { ReactNode } from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-md bg-white p-8 shadow-[0_2px_12px_rgba(23,23,72,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(23,23,72,0.12)]">
      <h3 className="mb-3 text-2xl font-semibold text-navy">{title}</h3>
      <p className="text-body leading-relaxed">{children}</p>
    </div>
  );
}
