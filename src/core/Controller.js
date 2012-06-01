( function() {
    
    window.Controller = new ( Class.extend({
        
        _commandMap: [],
        
        init: function() {
            
        },
        
        bind: function( eventType, command ) {
            var commands = this.getCommandsByEventType( eventType );
            
            if( commands.indexOf( command ) == -1 ) {
                Event.bind( eventType, this._onEventTriggered, this );
                
                commands.push( command );
            }
            
            this._commandMap[ eventType ] = commands;
        },
        
        unbind: function( eventType, command ) {
            var commands = this.getCommandsByEventType( eventType );
            var index = commands.indexOf( command );
            
            if( index != -1 ) {
                commands.splice( index, 1 );
                
                if( !commands.length ) {
                    Event.unbind( eventType, this._onEventTriggered );
                }
            }
            
            this._commandMap[ eventType ] = commands;
        },
        
        execute: function( commandOrCommandClass, event ) {
            var command = ( typeof commandOrCommandClass.execute == "function" ) ? commandOrCommandClass : new commandOrCommandClass;
            
            if( typeof command.execute == "function" ) {
                command.execute.apply( command, [ event ]);
            }
        },
        
        getCommandsByEventType: function( eventType ) {
            return this._commandMap[ eventType ] ? this._commandMap[ eventType ] : [];
        },
        
        _onEventTriggered: function( event ) {
            var commands = this.getCommandsByEventType( event.type );
            
            for( var i in commands ) {
                this.execute( commands[ i ], event );
            }
        }
        
    }));
    
})( window );