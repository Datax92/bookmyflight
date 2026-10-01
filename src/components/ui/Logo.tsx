import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className, markClassName, textClassName }: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <Link href="/" className={className} aria-label="BookMyFlight home">
      <Image
        src="/images/brand/logo-mark-gradient.png"
        alt=""
        width={32}
        height={30}
        priority
        className={markClassName}
      />
      <span className={['bmf-brand-text', textClassName].filter(Boolean).join(' ')}>BookMyFlight</span>
    </Link>
  );
}
