import Link from 'next/link';

export const Nav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        fontFamily: 'system-ui, sans-serif',
        gap: '1rem',
        lineHeight: '1.8',
      }}
    >
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>

      <Link href="/">Home (client rendered)</Link>
      <Link href="/about">About (client rendered)</Link>
      <Link href="/blog">Blog (client rendered)</Link>
    </nav>
  );
};
