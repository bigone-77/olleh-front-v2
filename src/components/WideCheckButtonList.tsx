import { useState } from "react";
import WideCheckButton from "./WideCheckButton";

interface IWideCheckButtonListProps<T extends string> {
  checkedList: T[];
  onCheckedClick: (checked: string) => void;
}

export default function WideCheckButtonList<T extends string>({
  checkedList,
  onCheckedClick,
}: IWideCheckButtonListProps<T>) {
  const [selectedChecked, setSelectedChecked] = useState(checkedList[0]);

  return (
    <div
      className="flex flex-col gap-2"
      onClick={event => {
        const eventTarget = event.target as HTMLButtonElement;
        const checked = eventTarget.textContent as T;
        onCheckedClick(checked);
      }}
    >
      {checkedList.map(c => (
        <WideCheckButton
          key={c}
          isChecked={c === selectedChecked}
          onClick={() => setSelectedChecked(c)}
        >
          {c}
        </WideCheckButton>
      ))}
    </div>
  );
}
