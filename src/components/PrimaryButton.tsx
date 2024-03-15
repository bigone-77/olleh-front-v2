type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  disabled: boolean;
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
  disabled,
  onClick,
  children,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`
        h-[59px] 
        w-[360px]
        rounded-primary-button 
        ${color[theme]}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
