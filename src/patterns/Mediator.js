var Mediator = Class.extend({
    
    getName: function() {
        return this._name;
    },
    
    getElement: function() {
        return this._data;
    },
    
    setElement: function( value ) {
        this._element = value;
    },
    
    _name: null,
    _element: null,
    
    init: function( name, element ) {
        this._name = name;
        this.setElement( element );
    },
    
    added: function() {
        
    },
    
    removed: function() {
        
    }
    
});