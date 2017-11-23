Template.registerHelper(
    "uToHours", (d) => {
        var r = addZero(new Date(d).getHours());
        return r;
    }
);

Template.registerHelper(
    "uToMinutes", (d) => {
        var r  = addZero(new Date(d).getMinutes())
        return r;
    }
);

Template.registerHelper(
  "selectedChapitre", ()=> {
    return Chapitre.findOne({_id:selectedChapitre.get()});
  }    
)

function addZero(i) {
      if (i < 10) {
                i = "0" + i;
                    }
          return i;
}



selectedNote = new ReactiveVar(null);


Template.registerHelper(
  "editing", (id)=> {
    return selectedNote.get() == id;
  }    
)
