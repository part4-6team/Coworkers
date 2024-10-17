import BasicDropdown from '@components/@shared/BasicDropdown';
import { ReactNode } from 'react';

interface EditDropdownProps {
  triggerIcon: ReactNode;
}

export default function EditDropdown({ triggerIcon }: EditDropdownProps) {
  const editOption = [
    { component: <div>수정하기</div> },
    { component: <div>삭제하기</div> },
  ];

  return <BasicDropdown options={editOption} triggerIcon={triggerIcon} />;
}
