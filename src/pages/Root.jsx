export function RootPage() {
    return (
        <div>
            <div className="container">
            <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                <p class="title">
                  Primary hero
                </p>
                <p class="subtitle">
                     Primary subtitle
                    </p>
                  </div>
                  </div>
                </section>
                </div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>
                </div>

            </nav>

            <body>
            こんにちは。
            <div class="container">
                こんにちは。
            </div>

            <section class="section">
                <div className="container">
                <div class="columns">
                <div class="column notification is-danger">
                 First column
                </div>
                <div class="column">
                   Second column
                 </div>
                   <div class="column">
                 Third column
                </div>
                <div class="column notification is-primary is-3">
                  Fourth column
                 </div>
                    </div>
                     </div>
            </section>

            <section class="section">
                <div className="container">
                <h1 class="title">Section</h1>
                    <h2 class="subtitle">
                     A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
                     </h2>
                     </div>
            </section>


<nav class="level">
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <strong>123</strong> posts
      </p>
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <p>Hello from the other side!</p>
            
        </p>
        <p class="control">
          <button class="button">
            Search
          </button>
        </p>
      </div>
    </div>
  </div>

  <div class="level-right">
    <p class="level-item"><strong>All</strong></p>
    <p class="level-item"><a>Published</a></p>
    <p class="level-item"><a>Drafts</a></p>
    <p class="level-item"><a>Deleted</a></p>
    <p class="level-item"><a class="button is-success">New</a></p>
  </div>
</nav>

            
            </body>
            <footer class="footer">
                 <div class="content has-text-centered">
                     <p>
                      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                     </p>
                 </div>
            </footer>

            
            
  
        </div>

        
    )
}