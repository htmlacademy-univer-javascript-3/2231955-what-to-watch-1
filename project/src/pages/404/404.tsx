function Page404(){
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>
      <h1 style={{textAlign: 'center'}}>404. Такой страницы не существует</h1>
    </div>);
}

export default Page404;
