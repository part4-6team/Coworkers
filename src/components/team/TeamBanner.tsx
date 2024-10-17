import Image from 'next/image';
import EditDropdown from './EditDropdown';

export default function TeamBanner({ name }: any) {
  const gearIcon = (
    <Image width={24} height={24} src="/icons/gear.svg" alt="톱니바퀴 아이콘" />
  );
  return (
    <div className="flex justify-between rounded-[12px] border border-border-primary border-opacity-10 bg-slate-50 bg-opacity-10 bg-[url('/images/thumbnail_team.png')] bg-contain bg-[90%] bg-no-repeat p-[24px]">
      <p className="text-xl-bold">{name}</p>
      <EditDropdown triggerIcon={gearIcon} />
    </div>
  );
}
