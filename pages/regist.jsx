import React from 'react';
import { useRouter } from 'next/router';

export default function Regist() {
  const router = useRouter();

  const goMainPage = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Hello, Im Regist</h1>
      <button
        onClick={goMainPage}
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '10px',
          backgroundColor: '#4db7e6',
          color: 'white',
          margin: '5rem',
        }}
      >
        MainPage
      </button>
    </div>
  );
}
