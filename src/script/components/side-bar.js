class SideBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar_app" role="tablist">
      <ul class="navbar_card">
        <li class="navbar_logo">
          <a href="#" class="navbar_link navbar_active">
            <i class="fas fa-virus navbar_icon"></i>
            <span class="navbar_text">Covid App</span>
          </a>
        </li>
        <li class="navbar_list" data-tab-index="0" tabindex="0">
          <a href="#data" class="navbar_link">
            <i class="fa fa-database navbar_icon"></i>
            <span class="navbar_text">Data</span>
          </a>
        </li>

        <li class="navbar_list" data-tab-index="1" tabindex="0">
          <a href="#wismaatlet" class="navbar_link">
            <i class="fa fa-hospital-alt navbar_icon"></i>
            <span class="navbar_text">Wisma</span>
          </a>
        </li>

        <li class="navbar_list" data-tab-index="2" tabindex="0">
          <a href="#dunia" class="navbar_link">
            <i class="fas fa-globe navbar_icon"></i>
            <span class="navbar_text">Dunia</span>
          </a>
        </li>

        <li class="navbar_list">
          <span class="navbar_link" id="darkToggle">
            <i class="fas fa-moon navbar_icon" id="moonIcons"></i>
            <i class="fas fa-sun navbar_icon" id="sunIcons" style="display: none;"></i> 
            <span class="navbar_text">Tema</span>
          </span>
        </li>
      </ul>
    </nav>
        `;
  }
}

customElements.define("side-bar", SideBar);
