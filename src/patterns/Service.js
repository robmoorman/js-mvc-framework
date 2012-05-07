var Service = Class.extend({
    
    getName: function() {
        return this._name;
    },
    
    _name: null,
    
    init: function( name ) {
        this._name = name;
    },
    
    added: function() {
        
    },
    
    removed: function() {
        
    }
    
});