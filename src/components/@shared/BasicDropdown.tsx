import { ReactNode } from 'react';
import Dropdown, { Option } from './Dropdown';

interface BasicDropdownProps {
  options: Option[];
  triggerIcon: ReactNode;
}

export default function BasicDropdown({
  options,
  triggerIcon,
}: BasicDropdownProps) {
  return (
    <Dropdown
      options={options}
      triggerIcon={triggerIcon}
      optionsWrapClass="mt-2 right-0 rounded-[12px] border border-background-tertiary"
      optionClass="rounded-[12px] md:w-[135px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
    />
  );
}
