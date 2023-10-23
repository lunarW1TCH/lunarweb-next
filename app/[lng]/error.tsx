'use client';

import { css } from '@shadow-panda/styled-system/css';

const NotFoundPage = () => {
  return (
    <h1
      className={css({
        textAlign: 'center',
        fontSize: 'xl',
      })}
    >
      Sorry! Requested resource does not exist.
    </h1>
  );
};

export default NotFoundPage;
