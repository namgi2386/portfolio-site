'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email);
    localStorage.setItem(
      'emailSubmitted',
      JSON.stringify({
        submitted: true,
        timestamp: Date.now(),
      }),
    );
    setIsSubmitted(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit} aria-label="submitForm">
        <input id="name" type="text" value={name} aria-label="nameInput" onChange={(e) => setName(e.target.value)} />
        <input id="email" type="text" value={email} aria-label="emailInput" onChange={(e) => setEmail(e.target.value)} disabled={isSubmitted} />
        <button aria-label="submitBtn" type="submit" disabled={isSubmitted}>
          {isSubmitted ? '제출완료' : '제출하기'}
        </button>
      </form>
    </>
  );
}
