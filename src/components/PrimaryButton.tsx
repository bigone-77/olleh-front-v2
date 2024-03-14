type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = "bg-warm300 text-warm50";
const light = "bg-primary text-warm50";
const social = "bg-warm75 text-warm600";
const text = "bg-transparent text-primary";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  onClick,
  children,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`
        rounded-primary-button 
        h-[59px] 
        w-full 
        ${color[theme]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
