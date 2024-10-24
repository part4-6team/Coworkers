import { useModal } from '@hooks/useModal';
import { Option } from '@components/@shared/Dropdown';

const useDropdownModals = (
  options: Option[],
  modals: ReturnType<typeof useModal>[]
) => {
  const handleOptionSelect = (selectedOption: Option) => {
    const index = options.findIndex(
      (option) => option.label === selectedOption.label
    );
    if (index !== -1) {
      modals[index].onOpen();
    }
  };

  // 모달의 상태 정보를 저장하는 객체 배열
  const modalStates = modals.map((modal) => ({
    isOpen: modal.isOpen,
    onClose: modal.onClose,
  }));

  return {
    handleOptionSelect,
    modalStates,
  };
};

export default useDropdownModals;
