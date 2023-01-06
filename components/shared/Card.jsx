import React from 'react';
import clsx from 'clsx';

export const Card = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-100 bg-white p-2 shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};
