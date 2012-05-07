var View = Class.extend({
    
    _mediatorMap: {},
    
    init: function() {
        
    },
    
    addMediator: function( mediator ) {
        if( this.hasMediator( mediator.getName())) {
            throw "Mediator already under the name " + mediator.getName();
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
            this._mediatorMap[ name ] = null;
            
            mediator.removed();
        }
        
        return mediator;
    },
    
    removeAllMediators: function() {
        for( var i in this._mediatorMap ) {
            var mediator = this._mediatorMap[ i ];
            mediator.removed();
        }
        
        this._mediatorMap = {};
    }
    
});

var View = new View();