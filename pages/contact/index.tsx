/** @jsxImportSource @emotion/react */

import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import styles from '@/styles/pages/contact/index';

const ContactPage = () => {
  return (
    <div css={styles.contactContainer}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
