( function() {
    
    window.Proxy = Class.extend({
        
        getName: function() {
            return this._name;
        },
        
        getData: function() {
            return this._data;
        },
        
        setData: function( value ) {
            this._data = value;
        },
        
        _name: null,
        _data: null,
        
        init: function( name, data ) {
            this._name = name;
            this.setData( data );
        },
        
        added: function() {
            
        },
        
        removed: function() {
            
        }
        
    });
    
})( window );