Template.registerHelper(
  "uToHours", (d) => {

    var r = new Date(d).getHours();
    return r;
  });

  Template.registerHelper(
    "uToMinutes", (d) => {

      var r  = new Date(d).getMinutes()
      return r;
    });
