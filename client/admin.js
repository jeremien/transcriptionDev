isAdmin = new ReactiveVar(false);

Template.registerHelper(
    "isAdmin", () => {
        return isAdmin.get();
    }
);
