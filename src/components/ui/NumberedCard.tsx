type Props = {
  number: string;
  title: string;
  text: string;
};

export default function NumberedCard({ number, title, text }: Props) {
  return (
    <div className="relative overflow-hidden p-8 rounded-2xl bg-white border border-sky shadow-sm hover:shadow-lg hover:border-gold/40 transition-all group">
      <span className="absolute top-4 right-5 text-6xl font-bold text-sky group-hover:text-gold/10 transition-colors select-none leading-none">
        {number}
      </span>
      <div className="w-8 h-0.5 bg-gold mb-4" />
      <h3 className="text-navy font-serif font-bold text-base mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed relative z-10">{text}</p>
    </div>
  );
}
