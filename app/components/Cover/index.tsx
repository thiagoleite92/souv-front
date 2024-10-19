import { useWindowSize } from '@/app/hooks/useWindowSize';
import cover from '../../assets/images/cover.png';
import coverMobile from '../../assets/images/cover-mobile.png';
import Image from 'next/image';

export function Cover() {
  const { width } = useWindowSize();

  return (
    <div className="w-full">
      <Image src={width && width >= 640 ? cover : coverMobile} alt="cover" />
    </div>
  );
}
