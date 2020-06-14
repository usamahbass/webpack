import $ from "jquery";

const filterSearch = () => {
  $(document).ready(function () {
    $(".search").keyup(function () {
      const searchTerm = $(".search").val();
      const searchSplit = searchTerm.replace(/ /g, "'):containsi('");

      $.extend($.expr[":"], {
        containsi: function (elem, i, match, array) {
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          );
        },
      });

      $(".results tbody tr")
        .not(`:containsi('" ${searchSplit} "')`)
        .each(function (e) {
          $(this).attr("visible", "false");
        });

      $(`.results tbody tr:containsi('" ${searchSplit} "')`).each(function (e) {
        $(this).attr("visible", "true");
      });

      const cityCount = $('.results tbody tr[visible="true"]').length;
      $(".counter").text(`${cityCount} kota`);

      if (cityCount == "0") {
        $(".no-result").show();
      } else {
        $(".no-result").hide();
      }
    });
  });
};

export default filterSearch;
