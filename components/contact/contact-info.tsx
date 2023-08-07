/** @jsxImportSource @emotion/react */
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { THEME } from '@/styles/global-styles';
import styles from '@/styles/components/contact/contact-info';

const ContactInfo = () => {
  return (
    <div css={styles.infoContainer}>
      <a css={styles.link} href='https://github.com/lunarW1TCH'>
        <FaGithub color={THEME.primary700} css={styles.icon} fontSize='18' />
        GitHub
      </a>
      <a css={styles.link} href='https://www.linkedin.com/in/adrian-zegnalek/'>
        <FaLinkedin color={THEME.primary700} css={styles.icon} fontSize='18' />
        LinkedIn
      </a>
    </div>
  );
};

export default ContactInfo;
