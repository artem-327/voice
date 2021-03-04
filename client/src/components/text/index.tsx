import React from 'react';

export default function Voice({ freq, clarity }: { freq: any; clarity: any }) {
  return (
    <div>
      {freq} {clarity}
    </div>
  );
}
