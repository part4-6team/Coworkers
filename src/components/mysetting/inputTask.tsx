import ProfileEditIcon from 'public/icons/profile_edit.svg';
import { useEffect, useRef, useState } from 'react';
import { useUserData } from '@hooks/mysetting/useUserData';
import NetworkError from '@components/@shared/NetworkError';
import Image from 'next/image';
import PasswordInput from './PasswordInput';

export default function InputTask() {
  const [ProfileImage, setProfileImage] = useState<string | JSX.Element>(
    <ProfileEditIcon />
  );
  const fileInput = useRef<HTMLInputElement | null>(null);

  const { data, isLoading, isError } = useUserData();

  useEffect(() => {
    if (data && data.image) {
      setProfileImage(
        <Image
          width={64}
          height={64}
          src={data.image}
          alt="프로필 이미지"
          className="h-16 w-16 rounded-full object-cover "
        />
      );
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <NetworkError />;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2 && reader.result) {
          setProfileImage(
            <Image
              src={reader.result as string}
              alt="프로필이미지"
              className="h-16 w-16 rounded-full object-cover "
            />
          );
        }
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(<ProfileEditIcon />);
    }
  };

  return (
    <main className="mx-6 flex max-w-[792px] flex-col gap-6">
      <div>
        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={() => {
            if (fileInput.current) {
              fileInput.current.click();
            }
          }}
        >
          {ProfileImage}
        </button>
      </div>
      <div className="flex w-full flex-col">
        <span className="mb-3 text-lg-medium text-text-primary">이름</span>
        <div
          className="h-[48px] w-full rounded-[12px] bg-background-secondary p-[15px] text-lg-regular text-text-primary outline outline-[1px]
            outline-[#343E4E] focus:outline-none"
        >
          {data?.nickname}
        </div>
      </div>
      <PasswordInput />
    </main>
  );
}
