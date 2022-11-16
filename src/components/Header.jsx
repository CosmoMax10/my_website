export function Header() {
    return (<div>
        
<div className="container">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://127.0.0.1:5173/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/aboutme">
        About Me
      </a>

      <a class="navbar-item" href="/projectslist">
        Projects
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

   
  </div>
</nav>
</div>
</div>

    );
}