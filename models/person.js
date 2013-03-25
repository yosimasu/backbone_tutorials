Person = Backbone.Model.extend({
    defaults: {
        name: 'Fetus',
        age: 0,
        child: ''
    },
    initialize: function() {
        alert("Welcome to this world.");
        this.on("change:name", function(model) {
            var name = model.get("name");
            alert("Changed my name to " + name);
        });
    },
    adopt: function(newChildsName) {
        this.set({child: newChildsName});
    }
});