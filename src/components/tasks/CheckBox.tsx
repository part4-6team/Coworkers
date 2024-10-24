import { useEffect, useState } from 'react';

import ActiveCheckBoxIcon from '@icons/checkbox_active.svg';
import InActiveCheckBoxIcon from '@icons/checkbox_inactive.svg';

interface CheckBoxProps {
  doneAt: string | null;
  onChange: (doneAt: string | null) => void;
}

export default function CheckBox({ doneAt, onChange }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(doneAt !== null);

  // doneAt 값이 변경될 때마다 체크 상태 업데이트
  useEffect(() => {
    setIsChecked(doneAt !== null);
  }, [doneAt]);

  const handleClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState); // 체크 상태 업데이트

    // doneAt 값 업데이트
    const updatedDoneAt = newCheckedState ? new Date().toISOString() : null;
    onChange(updatedDoneAt); // 변경된 doneAt 값 부모 컴포넌트로 전달
  };

  return (
    <button type="button" onClick={handleClick}>
      {isChecked ? <ActiveCheckBoxIcon /> : <InActiveCheckBoxIcon />}
    </button>
  );
}
