import Button from '@components/@shared/Button';
import { IconInput } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import NetworkError from '@components/@shared/NetworkError';
import { usePasswordChange } from '@hooks/mysetting/usePasswordChange';
import { useModal } from '@hooks/useModal';
import { useState } from 'react';

interface PasswordChangeProps {
  onSubmit: () => Promise<number>; // onSubmit 프롭 추가
}

export default function PasswordChange({ onSubmit }: PasswordChangeProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const mutation = usePasswordChange();

  const handelSubmit = () => {
    mutation.mutate({ passwordConfirmation, password });
    closeModal();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handlePasswordConfirmation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPasswordConfirmation(value);
  };

  const handleSubmit = async () => {
    try {
      const statusCode = await onSubmit(); // onSubmit 호출 후 상태 코드 확인

      if (statusCode === 200) {
        openModal(); // 상태 코드가 200일 때 모달 열기
      } else if (statusCode === 400) {
        alert('비밀번호가 틀렸습니다.'); // 400 에러 처리
      }
    } catch {
      <NetworkError />;
    }
  };
  return (
    <>
      <Button onClick={handleSubmit} fontSize="14" width={70} height={20}>
        변경하기
      </Button>

      <Modal
        isOpen={isOpen}
        isXButton={false}
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
          <Modal.Header fontColor="primary">
            <header className="mb-4 text-lg-medium text-text-primary">
              비밀번호 변경하기
            </header>
          </Modal.Header>
          <Modal.Content fontColor="secondary" fontSize="14" fontArray="left">
            <div className="flex flex-col gap-4">
              <IconInput
                label="새 비밀번호"
                placeholder="비밀번호를 입력해주세요"
                inputProps={{
                  value: password,
                  onChange: handlePasswordChange,
                }}
              />
              <IconInput
                label="새 비밀번호 확인"
                placeholder="비밀번호를 입력해주세요"
                inputProps={{
                  value: passwordConfirmation,
                  onChange: handlePasswordConfirmation,
                }}
              />
            </div>
          </Modal.Content>
        </Modal.Wrapper>
        <Modal.Footer>
          {/* 공통 버튼 적용 전 */}
          <div className="flex items-center justify-center gap-2">
            <Button
              bgColor="white"
              fontColor="green"
              fontSize="16"
              width={136}
              height={48}
              border="gray"
              onClick={closeModal}
            >
              닫기
            </Button>
            <Button
              bgColor="green"
              fontColor="white"
              width={136}
              height={48}
              onClick={handelSubmit}
              className="bg-amber-400 text-red-50"
            >
              변경하기
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
