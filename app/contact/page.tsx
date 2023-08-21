import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import styles from './styles';

const ContactPage = () => {
  const classes = styles();

  return (
    <div className={classes.contactContainer}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
