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
    
    isActive: function() {
        return this._active;
    },
    
    _name: null,
    _element: null,
    _active: false,
    
    init: function( name, element ) {
        this._name = name;
        this.setElement( element );
    },
    
    activate: function() {
        this._active = true;
    },
    
    deactivate: function() {
        this._active = false;
    },
    
    added: function() {
        this.activate();
    },
    
    removed: function() {
        this.deactivate();
    }
    
});