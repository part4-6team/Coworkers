import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';
import Button from '@pages/components/@shared/Button';
import Dropdown from '@components/@shared/Dropdown';
import Image from 'next/image';

export default function Test() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="m-auto grid grid-cols-3 place-items-center gap-4 p-4">
      {/* 모달 테스트, 공통 버튼 적용 전 */}
      <button
        type="button"
        onClick={openModal}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        isXButton
        onClose={closeModal}
        array="column"
        padding="default"
        bgColor="primary"
        fontSize="16"
        fontArray="center"
        gap="40"
      >
        {/* 모달의 하위 요소에 독립적인 스타일을 적용할 수 있습니다 */}
        {/* Modal.Wrapper로 헤더와 콘텐츠의 간격을 설정할 수 있습니다 */}
        <Modal.Wrapper array="column">
          <Modal.Header fontColor="primary">모달 제목</Modal.Header>
          <Modal.Content fontColor="secondary" fontSize="14" fontArray="left">
            <p>모달 내용</p>
          </Modal.Content>
        </Modal.Wrapper>
        <Modal.Footer>
          {/* 공통 버튼 적용 전 */}
          <button
            type="button"
            onClick={closeModal}
            className="w-full rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
          >
            닫기
          </button>
        </Modal.Footer>
      </Modal>

      <Button bgColor="gradient" fontSize="14" size="full" height={50}>
        버튼3
      </Button>
      <Button
        bgColor="transparent"
        fontColor="green"
        fontSize="16"
        width={100}
        height={50}
        border="green"
      >
        버튼4
      </Button>
      <Button
        bgColor="transparent"
        fontColor="white"
        fontSize="16"
        width={100}
        height={50}
        border="white"
      >
        버튼5
      </Button>
      <Button
        bgColor="white"
        fontColor="gray"
        fontSize="16"
        width={100}
        height={50}
        border="gray"
      >
        버튼6
      </Button>
      <Button fontSize="14" shape="round" width={100} height={30}>
        버튼7
      </Button>
    </div>
  );
}
