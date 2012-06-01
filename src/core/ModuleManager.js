( function() {

    window.ModuleManager = new ( Class.extend({
        
        _moduleMap: {},
        _currentContext: null,
        
        init: function() {
            
        },
        
        add: function( module ) {
            if( this.has( module.getName())) {
                throw "Module already added under the name " + mediator.getName();
            }
            
            this._moduleMap[ module.getName() ] = module;
        },
        
        get: function( name ) {
            return this._moduleMap[ name ];
        },
        
        has: function( name ) {
            return this._moduleMap[ name ] != null;
        },
        
        remove: function( name ) {
            var module = this.get( name );
            
            if( module ) {
                if( module.isActive()) {
                    module.deactivate();
                }
                
                this._moduleMap[ name ] = null;
            }
            
            return module;
        },
        
        removeAll: function() {
            for( var i in this._moduleMap ) {
                this.remove( i );
            }
            
            this._moduleMap = {};
        },
        
        trigger: function( context ) {
            this._currentContext = context;
            
            for( var i in this._moduleMap ) {
                var module = this._moduleMap[ i ];
                
                if( module.validate( context ) && !module.isActive()) {
                    module.activate();
                }
                else if( !module.validate( context ) && module.isActive()) {
                    module.deactivate();
                }
            }
        }
        
    }));
    
})( window );