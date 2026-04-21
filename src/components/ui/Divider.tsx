type Props = { className?: string };

export default function Divider({ className = "" }: Props) {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-sky to-transparent${className ? ` ${className}` : ""}`} />
  );
}
