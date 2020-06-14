import $ from "jquery";

const Context = () => {
  let darkEnabled = false;

  $(document).ready(function () {
    $("#darkToggle").on("click", switchDarkMode);
    $("#reset").on("click", reset);
  });

  function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }

  function switchDarkMode() {
    darkEnabled = !darkEnabled;
    const moonIcons = document.getElementById("moonIcons");
    const sunIcons = document.getElementById("sunIcons");

    let darkTheme = $("body").addClass("darkmode");
    $(".loaderlight").addClass("loaderdark");
    $(".ui-light").addClass("ui-dark");
    $(".ui-light-form").addClass("ui-dark-form");
    $(".bg-ui-light").addClass("bg-ui-dark");

    if (darkEnabled) {
      darkTheme;
      moonIcons.style.display = "none";
      sunIcons.style.display = "block";
    } else {
      sunIcons.style.display = "none";
      moonIcons.style.display = "block";
      $("body").removeClass("darkmode");
    }
  }

  function reset() {
    $("body").removeClass("darkmode");
  }
};

export default Context;
