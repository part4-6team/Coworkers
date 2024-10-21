import Button from '@components/@shared/Button';
import { IconInput, Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';
import NonVisibleIcon from '@icons/visibility_off.svg';
import VisibleIcon from '@icons/visibility_on.svg';
import { useState } from 'react';

export default function SignUpForm() {
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  return (
    <div className="mt-6 flex w-[343px] flex-col gap-10 md:mt-[100px] md:w-[460px]">
      <form className="flex w-full flex-col gap-6">
        <h1 className="flex w-full justify-center text-2xl-medium text-text-primary md:mb-[80px] xl:text-4xl">
          비밀번호 재설정
        </h1>
        <IconInput
          label="새 비밀번호"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          inputProps={{
            type: isNewPasswordVisible ? 'text' : 'password',
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
          }}
          actionIcon={
            isNewPasswordVisible ? (
              <VisibleIcon onClick={toggleNewPasswordVisibility} />
            ) : (
              <NonVisibleIcon onClick={toggleNewPasswordVisibility} />
            )
          }
        />
        <IconInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          inputProps={{
            type: isConfirmPasswordVisible ? 'text' : 'password',
            value: passwordConfirmation,
            onChange: (e) => setPasswordConfirmation(e.target.value),
          }}
          actionIcon={
            isConfirmPasswordVisible ? (
              <VisibleIcon onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <NonVisibleIcon onClick={toggleConfirmPasswordVisibility} />
            )
          }
        />
      </form>
      <Button size="full" onClick={openModal}>
        재설정
      </Button>
      <Modal
        isOpen={isOpen}
        array="column"
        padding="default"
        bgColor="primary"
        fontSize="16"
        fontArray="center"
        gap="24"
      >
        <Modal.Wrapper>
          <Modal.Header fontColor="primary">비밀번호 재설정</Modal.Header>
          <Modal.Content
            className="items-center gap-4"
            array="column"
            fontColor="secondary"
            fontSize="14"
          >
            <p className="mt-2">비밀번호 재설정 링크를 보내드립니다.</p>
            <div className="w-[280px]">
              <Input placeholder="이메일을 입력하세요." />
            </div>
          </Modal.Content>
        </Modal.Wrapper>
        <Modal.Footer className="justify-center" array="row">
          <div className="flex w-[280px] gap-2">
            <Button
              onClick={closeModal}
              bgColor="white"
              fontColor="green"
              border="green"
            >
              닫기
            </Button>
            <Button>링크 보내기</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
