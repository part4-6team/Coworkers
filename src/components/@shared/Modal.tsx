import React from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import clsx from 'clsx';

import { getModalClass, ModalClassProps } from '@utils/getModalClass';

interface ModalProps extends ModalClassProps {
  isOpen?: boolean;
  onClose?: () => void;
  isDanger?: boolean;
  isProfile?: boolean;
  children: React.ReactNode;
}

export function Modal({
  isOpen,
  isDanger,
  isProfile,
  isXButton,
  onClose,
  children,
  ...props
}: ModalProps) {
  const modalClass = getModalClass({ ...props, isXButton });

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`fixed bottom-0 w-full rounded-t-xl md:relative md:w-[375px] md:rounded-xl xl:w-96 ${modalClass}`}
      >
        {isProfile && (
          <Image
            src="@icons/profile_small.svg"
            alt="프로필 아이콘"
            width={24}
            height={24}
            className="mx-auto"
          />
        )}
        {isDanger && (
          <Image
            src="@icons/alert.svg"
            alt="경고 아이콘"
            width={24}
            height={24}
            className="mx-auto"
          />
        )}
        {isXButton && (
          <button
            type="button"
            className="absolute right-4 top-4 flex justify-end"
            onClick={onClose}
          >
            <Image
              src="@icons/x.svg"
              alt="닫기 아이콘"
              width={24}
              height={24}
            />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}

// ModalSection 컴포넌트, modal의 하위 요소
function ModalSection({ children, className, ...props }: ModalProps) {
  const modalClass = getModalClass(props);
  return <div className={clsx(modalClass, className)}>{children}</div>;
}

// ModalSection 생성 함수
function createModalComponent() {
  return function ModalComponent({
    children,
    className,
    ...props
  }: ModalProps) {
    return (
      <ModalSection className={clsx(className)} {...props}>
        {children}
      </ModalSection>
    );
  };
}

// Modal에 ModalSection 추가
Modal.Wrapper = createModalComponent();
Modal.Header = createModalComponent();
Modal.Content = createModalComponent();
Modal.Footer = createModalComponent();
