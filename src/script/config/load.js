import $ from "jquery";

const preLoader = () => {
  $("#loader").fadeTo(5000, 1).fadeOut(1000);
};

export default preLoader;
