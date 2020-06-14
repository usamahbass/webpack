import $ from "jquery";
import preLoader from "./load";

const tabsPanel = () => {
  /* 
    add Siblings nav
  */
  $("ul li a").on("click", function () {
    $("li a.navbar_active").removeClass("navbar_active");
    $(this).addClass("navbar_active");
  });

  $(document).ready(function () {
    let nextTabIndex = 0;

    $(".navbar_list").on("click keypress", function (event) {
      preLoader();
      if (
        (event.type === "keypress" && event.which === 13) ||
        event.type === "click"
      ) {
        const tabClicked = $(this).data("tab-index");

        if (tabClicked != nextTabIndex) {
          $("#allTabsContainer .tab-container").each(function () {
            if ($(this).data("tab-index") == tabClicked) {
              $(".tab-container").hide();
              $(this).show();
              nextTabIndex = $(this).data("tab-index");
              return;
            }
          });
        }
      }
    });
  });
};

export default tabsPanel;
