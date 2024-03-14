interface ICheckButtonProps {
  label: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CheckButton({
  label,
  isChecked,
  onClick,
}: ICheckButtonProps) {
  const isCheckedStyle = isChecked ? "bg-primary" : "bg-transparent";

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-sm font-regular text-warm600">{label}</p>
      <button
        className={`
        rounded-check-button
        flex
        h-8
        w-8
        items-center
        justify-center
        border 
        border-primary
        transition-all
        ${isCheckedStyle}
      `}
        onClick={onClick}
      >
        <img
          src="https://res.cloudinary.com/dl31hx4rn/image/upload/v1710393499/check.svg"
          alt="checked-icon"
        />
      </button>
    </div>
  );
}
