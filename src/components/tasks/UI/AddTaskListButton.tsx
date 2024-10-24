import { useModal } from '@hooks/useModal';
import AddTaskListModal from './AddTaskListModal';

export default function AddTaskListButton() {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <button
        className="text-md-regular text-brand-primary"
        type="button"
        onClick={onOpen}
      >
        + 새로운 목록 추가하기
      </button>

      {isOpen && <AddTaskListModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
}
