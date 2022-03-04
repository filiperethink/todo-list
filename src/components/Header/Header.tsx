import "./styles.css";

type HeaderProps = {
  title?: string;
};

function Header({ title = "Rethink | Todo List App" }: HeaderProps) {
  return (
    <header className='header'>
      <h1 className='title'>{title}</h1>
    </header>
  );
}

export default Header;
