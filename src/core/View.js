( function() {
    
    window.View = new ( Class.extend({
        
        _mediatorMap: {},
        
        init: function() {
            
        },
        
        addMediator: function( mediator ) {
            if( this.hasMediator( mediator.getName())) {
                throw "Mediator already added under the name " + mediator.getName();
            }
            
            this._mediatorMap[ mediator.getName() ] = mediator;
            
            mediator.added();
        },
        
        getMediator: function( name ) {
            return this._mediatorMap[ name ];
        },
        
        hasMediator: function( name ) {
            return this._mediatorMap[ name ] != null;
        },
        
        removeMediator: function( name ) {
            var mediator = this.getMediator( name );
            
            if( mediator ) {
                mediator.removed();
                
                delete this._mediatorMap[ name ];
            }
            
            return mediator;
        },
        
        removeAllMediators: function() {
            for( var i in this._mediatorMap ) {
                this.removeMediator( i );
            }
            
            this._mediatorMap = {};
        }
        
    }));
    
})( window );