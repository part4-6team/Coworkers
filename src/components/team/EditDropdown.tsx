import BasicDropdown from '@components/@shared/BasicDropdown';
import { ReactNode } from 'react';
import { Option } from '../@shared/Dropdown';

export const editOption = [
  { label: 'edit', component: <div>수정하기</div> },
  { label: 'delete', component: <div>삭제하기</div> },
];

interface EditDropdownProps {
  triggerIcon: ReactNode;
  onSelect: (option: Option) => void;
}

export default function EditDropdown({
  triggerIcon,
  onSelect,
}: EditDropdownProps) {
  return (
    <BasicDropdown
      options={editOption}
      triggerIcon={triggerIcon}
      onSelect={onSelect}
    />
  );
}
