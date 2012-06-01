( function() {
    
    window.MacroCommand = Command.extend({
        
        _subCommands: [],
        
        init: function() {
            this.addSubCommands();
        },
        
        execute: function( event ) {
            while( this._subCommands.length ) {
                Controller.execute( this._subCommands.shift(), event );
            }
        },
        
        addSubCommands: function() {
            
        },
        
        addSubCommand: function( commandClass ) {
            this._subCommands.push( commandClass );
        }
        
    });
    
})( window );