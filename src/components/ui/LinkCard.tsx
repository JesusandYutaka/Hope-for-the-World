import type { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export default function LinkCard({
  href,
  label,
  title,
  description,
  icon,
  className = "",
  external = true,
}: Props) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group flex items-center gap-5 p-6 rounded-2xl border border-sky hover:border-gold/40 hover:shadow-md transition-all ${className}`}
    >
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        <p className="font-bold text-navy group-hover:text-gold transition-colors">{title}</p>
        {description && <p className="text-gray-500 text-sm mt-1">{description}</p>}
      </div>
      <svg
        className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
