import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import styles from './styles';
import PageProps from '@/interfaces/page-props';
import { fallbackLng, languages } from '@/app/i18n/settings';

const ContactPage = (props: PageProps) => {
  const { params } = props;
  let lng = params.lng;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const classes = styles();

  return (
    <div className={classes.contactContainer}>
      <ContactInfo />
      <ContactForm lng={lng} />
    </div>
  );
};

export default ContactPage;
