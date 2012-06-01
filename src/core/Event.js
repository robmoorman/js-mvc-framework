( function() {

    window.Event = new ( Class.extend({
        
        _eventMap: [],
        
        init: function() {
            
        },
        
        bind: function( eventType, callback, context ) {
            var name = callback.toString();
            var callbacks = this._eventMap[ eventType ] ? this._eventMap[ eventType ] : {};
            
            if( !callbacks[ name ]) {
                callbacks[ name ] = {
                    callback: callback,
                    context: context ? context : null
                };
            }
            
            this._eventMap[ eventType ] = callbacks;
        },
        
        unbind: function( eventType, callback ) {
            var name = callback.toString();
            var callbacks = this._eventMap[ eventType ] ? this._eventMap[ eventType ] : {};
            
            if( callbacks[ name ]) {
                delete callbacks[ name ];
            }
            
            this._eventMap[ eventType ] = callbacks;
        },
        
        unbindAll: function() {
            this._eventMap = [];
        },
        
        trigger: function( eventType, payload, context ) {
            var callbacks = this._eventMap[ eventType ];
            
            if( callbacks ) {
                var callbackPayload = [{ type:eventType, data:{} }];
                
                for( var i in callbacks ) {
                    callbacks[ i ].callback.apply( context ? context : callbacks[ i ].context, payload ? [{ type:eventType, data:payload }] : callbackPayload );
                }
            }
        },
        
        willTrigger: function( eventType, callback ) {
            var callbacks = this._eventMap[ eventType ] ? this._eventMap[ eventType ] : {};
            
            return callbacks[ callback.toString() ] != null;
        }
        
    }));
    
})( window );