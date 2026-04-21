type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="w-8 h-0.5 bg-gold" />
      <h2 className="text-xl font-serif font-bold text-navy">
        {title}
        {subtitle && (
          <span className="text-sm font-sans font-normal text-gray-400 ml-2">{subtitle}</span>
        )}
      </h2>
    </div>
  );
}
