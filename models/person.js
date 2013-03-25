Person = Backbone.Model.extend({
    defaults: {
        name: 'Fetus',
        age: 0,
        child: ''
    },
    initialize: function() {
        alert("Welcome to this world.");
    },
    adopt: function(newChildsName) {
        this.set({child: newChildsName});
    }
});