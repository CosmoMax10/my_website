function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
            alt="cute dog!"
          />
        </figure>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <Image />
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
          <p>こんにちは！</p>
        </div>
      </section>
    </main>
  );
}



function Footer() {
  return (
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>website</strong> by Cosmo Robinson. The source code is licensed 
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;