( function() {
    
    window.Module = Class.extend({
        
        getName: function() {
            return this._name;
        },
        
        isActive: function() {
            return this._active;
        },
        
        _name: null,
        _mediatorNames: [],
        _active: false,
        
        init: function( name, mediatorNames ) {
            this._name = name;
            this._mediatorNames = mediatorNames ? mediatorNames : [];
        },
        
        validate: function( context ) {
            return false;
        },
        
        activate: function() {
            this._active = true;
            
            for( var i in this._mediatorNames ) {
                var mediatorName = this._mediatorNames[ i ];
                
                if( View.hasMediator( mediatorName )) {
                    var mediator = View.getMediator( mediatorName );
                    
                    if( !mediator.isActive()) {
                        mediator.activate();
                    }
                }
            }
        },
        
        deactivate: function() {
            this._active = false;
            
            for( var i in this._mediatorNames ) {
                var mediatorName = this._mediatorNames[ i ];
                
                if( View.hasMediator( mediatorName )) {
                    var mediator = View.getMediator( mediatorName );
                    
                    if( mediator.isActive()) {
                        mediator.deactivate();
                    }
                }
            }
        },
        
        getMediatorNames: function() {
            return this._mediatorNames;
        }
        
    });
    
})( window );