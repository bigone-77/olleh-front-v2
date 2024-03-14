interface IWideCheckButtonProps {
  children: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function WideCheckButton({
  children,
  isChecked,
  onClick,
}: IWideCheckButtonProps) {
  const isCheckedStyle = isChecked
    ? "font-semibold text-warm50 bg-primary"
    : "font-regular text-warm600 bg-transparent";
  return (
    <button
      className={`
        ${isCheckedStyle}
        rounded-wide-check-button
        flex
        h-[49px]
        w-[384px]
        items-center
        justify-between
        border
        border-warm200
        px-5
        py-4
        transition-all
    `}
      onClick={onClick}
    >
      {children}
      <img
        src="https://res.cloudinary.com/dl31hx4rn/image/upload/v1710408792/wide-check.svg"
        alt="wide-check-icon"
      />
    </button>
  );
}
