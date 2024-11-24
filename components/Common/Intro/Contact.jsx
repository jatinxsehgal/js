import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6 gap-2'>
      <div className='flex flex-col gap-2'>
        <span className='text-Snow text-xs font-bold jj'>Email Address</span>

        <span className='text-xs text-Snow' mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-Snow text-xs font-bold jj'>Phone</span>
        <span className='text-xs text-Snow'>{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
