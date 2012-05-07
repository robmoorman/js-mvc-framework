var Event = Class.extend({
    
    _eventMap: [],
    
    init: function() {
        
    },
    
    bind: function( eventType, callback ) {
        var callbacks = this._eventMap[ eventType ] ? this._eventMap[ eventType ] : [];
        
        if( callbacks.indexOf( callback ) == -1 ) {
            callbacks.push( callback );
        }
        
        this._eventMap[ eventType ] = callbacks;
    },
    
    unbind: function( eventType, callback ) {
        var callbacks = this._eventMap[ eventType ] ? this._eventMap[ eventType ] : [];
        var index = callbacks.indexOf( callback );
        
        if( index != -1 ) {
            callbacks.splice( index, 1 );
        }
        
        this._eventMap[ eventType ] = callbacks;
    },
    
    unbindAll: function() {
        this._eventMap = [];
    },
    
    trigger: function( eventType, payload, context ) {
        var callbacks = this._eventMap[ eventType ];
        var callbackPayload = [{ type:eventType, data:{} }];
        
        if( callbacks ) {
            for( var i in callbacks ) {
                callbacks[ i ].apply( context ? context : null, payload ? [{ type:eventType, data:payload }] : callbackPayload );
            }
        }
    },
    
    willTrigger: function( eventType, callback ) {
        var callbacks = this._eventMap[ eventType ] ? this._eventMap[ eventType ] : [];
        
        return callbacks.indexOf( callback ) != -1;
    }
    
});

var Event = new Event();