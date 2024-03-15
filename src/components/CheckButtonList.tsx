import { useState } from "react";
import CheckButton from "./CheckButton";

interface ICheckButtonListProps<T extends string> {
  checkedList: T[];
  onCheckedClick: (checked: string) => void;
}

export default function CheckButtonList<T extends string>({
  checkedList,
  // onCheckedClick,
}: ICheckButtonListProps<T>) {
  const [selectedChecked, setSelectedChecked] = useState(checkedList[0]);
  return (
    <div className="flex justify-between">
      {checkedList.map(c => (
        <CheckButton
          key={c}
          label={c}
          isChecked={c === selectedChecked}
          onClick={() => setSelectedChecked(c)}
        />
      ))}
    </div>
  );
}
