interface layoutProps {
  title: string;
  text?: string;
  children?: React.ReactNode;
}
function Layout({ title, text, children }: layoutProps) {
  return (
    <>
      <div id='main'>
        <h2>{title}</h2>
        <div className='todo'>
          {text && <p>{text}</p>}
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
