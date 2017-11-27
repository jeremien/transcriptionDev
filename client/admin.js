isAdmin = new ReactiveVar(true);

Template.registerHelper(
    "isAdmin", () => {
        return isAdmin.get();
    }
);
