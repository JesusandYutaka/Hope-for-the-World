import Link from "next/link";

export type ButtonVariant = "primary" | "gold" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02]";

const variantClass: Record<ButtonVariant, string> = {
  primary: "px-8 py-3.5 bg-navy hover:bg-navy-dark text-white hover:shadow-lg",
  gold: "group relative px-8 py-3.5 font-semibold overflow-hidden hover:scale-105 hover:shadow-xl",
  outline: "px-6 py-3 border border-gold/50 text-gold hover:bg-gold/10",
  ghost: "px-8 py-3.5 text-white/80 hover:text-white border border-white/25 hover:border-white/50 backdrop-blur-sm hover:bg-white/5",
};

const goldStyle = {
  background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
  color: "#0e0900",
} as const;

type Props = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  external,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const cls = `${base} ${variantClass[variant]}${className ? ` ${className}` : ""}`;
  const style = variant === "gold" ? goldStyle : undefined;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        style={style}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
