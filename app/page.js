import { connection } from 'next/server';

function Jumbotron({ title, subtitle }) {
  return (
    <header className="jumbotron">
      <h1>{title}</h1>
      <p className="lead">{subtitle}</p>
    </header>
  );
}

export default async function Page() {
  // Render on every request so process.env is read at run time,
  // not frozen into a static page at build time.
  await connection();

  return (
    <>
      <Jumbotron
        title={process.env.APP_TITLE}
        subtitle={process.env.APP_SUBTITLE}
      />
      <main className="content">
        <p>
          This page is built with Next.js.
        </p>
        <p>
          The title and subtitle come from the <code>APP_TITLE</code> and{' '}
          <code>APP_SUBTITLE</code> environment variables, read on the server
          for each request.
        </p>
      </main>
    </>
  );
}
