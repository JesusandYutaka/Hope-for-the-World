import { ICONS, BRAND_GRADIENTS } from "@/lib/constants";

type Props = {
  href: string;
  handle: string;
  label?: string;
  description?: string;
  className?: string;
};

export default function InstagramCard({ href, handle, label = "Instagram", description, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-5 p-6 rounded-2xl border border-sky hover:border-gold/40 hover:shadow-md transition-all ${className}`}
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: BRAND_GRADIENTS.INSTAGRAM }}
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d={ICONS.INSTAGRAM} />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        <p className="font-bold text-navy group-hover:text-gold transition-colors">@{handle}</p>
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
