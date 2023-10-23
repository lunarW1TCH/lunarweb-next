import { defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    display: 'block',
    fontFamily: 'Ysabeau Infant, sans-serif',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("/img/freja.jpeg")',
    height: '100%',
    color: '#86624c',
  },
  '*::-webkit-scrollbar': {
    width: '8px',
  },
  '*::-webkit-scrollbar-track': {
    boxShadow: 'accent',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: 'primary.700',
    borderRadius: 'xs',
    border: 'subtleNegative',
  },

  'html, #__next': {
    height: '100%',
  },
});

export default globalCss;
