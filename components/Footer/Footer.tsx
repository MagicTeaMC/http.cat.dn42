'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import GithubButton from '@/components/GithubButton';

import styles from './Footer.module.css';

type FooterProps = {
  t: { [key: string]: string };
};

const Footer = ({ t }: FooterProps) => {
  const pathname = usePathname();

  const localeHref = t.LOCALE === 'ca' ? '/' : '/ca';

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <GithubButton width={70} height={70} />
      </div>

      <nav>
        <Link href={localeHref}>{t.LANGUAGE_LINK_TEXT}</Link>
      </nav>

      <p>
        Hosted by{' '}
        <a href="https://cat.dn42">AS4242423942</a>
      </p>
      <p>
        {t.DEVELOPED_BY}{' '}
        <a href="https://twitter.com/rogeriopvl">@rogeriopvl</a>
      </p>
      <p>
        {t.IMAGES_BY} Tomomi Imura (
        <a href="https://twitter.com/girlie_mac">@girlie_mac</a>)
      </p>
    </div>
  );
};

export default Footer;
