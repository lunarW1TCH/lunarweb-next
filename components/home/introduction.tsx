/** @jsxImportSource @emotion/react */
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { THEME } from '@/styles/global-styles';
import styles from '@/styles/components/home/introduction';

const Introduction = () => {
  return (
    <div css={styles.outerContainer}>
      <h1 css={styles.header}>
        Hello, I am Adrian Żegnałek <br /> a self-taught software developer
      </h1>
      <div css={styles.innerContainer}>
        <p css={styles.paragraph}>
          You can see some of my projects <a href='projects'>here</a> and on my
          GitHub account. Head on over to the <a href='skills'>skills</a> page
          to see the list of skills I have and technologies I worked with.
        </p>
        <div css={styles.links}>
          <span>
            <a css={styles.link} href='https://github.com/lunarW1TCH'>
              <FaGithub
                color={THEME.primary700}
                css={styles.icon}
                fontSize='18'
              />
              GitHub
            </a>
          </span>
          <span>
            <a
              css={styles.link}
              href='https://www.linkedin.com/in/adrian-zegnalek/'
            >
              <FaLinkedin
                color={THEME.primary700}
                css={styles.icon}
                fontSize='18'
              />
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      <p css={styles.catCredit}>The cat name&apos;s Freja</p>
    </div>
  );
};

export default Introduction;
