import IconButton from "./CheckButton";

interface INavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title: string;
  onBackButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  showBackButton,
  showCloseButton,
  showTitle,
  title = "",
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: INavigationBarProps) {
  return (
    <nav className="flex w-full justify-between">
      <div className="navigation-title-wrapper flex">
        {showBackButton && (
          <IconButton
            alt="back-arrow"
            iconPath={`https://res.cloudinary.com/dl31hx4rn/image/upload/v1710382199/${isDark ? "black" : "white"}-back-arrow.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {/* 페이지 이름 */}
        {showTitle && <h1 className="text-2xl font-semibold">{title}</h1>}
      </div>
      {showCloseButton && (
        <IconButton
          alt="black-close"
          iconPath="https://res.cloudinary.com/dl31hx4rn/image/upload/v1710382199/black-close.svg"
          onClick={onCloseButtonClick}
        />
      )}
    </nav>
  );
}
