( function() {
    
    window.Mediator = Class.extend({
        
        getName: function() {
            return this._name;
        },
        
        getElement: function() {
            return this._element;
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
            
            this.activated();
        },
        
        deactivate: function() {
            this._active = false;
            
            this.deactivated();
        },
        
        activated: function() {},
        deactivated: function() {},
        added: function() {},
        removed: function() {}
        
    });
    
})( window );