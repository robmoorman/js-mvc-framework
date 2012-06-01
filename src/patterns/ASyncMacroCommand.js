( function() {
    
    window.ASyncMacroCommand = Class.extend({
        
        setOnComplete: function( value, context ) {
            this._onComplete = value;
            this._onCompleteContext = context;
        },
        
        _onComplete: null,
        _onCompleteContext: null,
        _subCommands: [],
        _event: null,
        
        init: function() {
            this.addSubCommands();
        },
        
        execute: function( event ) {
            this._event = event;
            
            this.executeNextCommand();
        },
        
        executeNextCommand: function() {
            if( this._subCommands.length ) {
                var commandClass = this._subCommands.shift();
                var command = new commandClass;
                var commandClassIsASync = command instanceof ASyncCommand;
                
                if( commandClassIsASync ) {
                    command.setOnComplete( this.executeNextCommand, this );
                }
                
                Controller.execute( command, this._event );
                
                if( !commandClassIsASync ) {
                    this.executeNextCommand();
                }
            }
            else {
                if( this._onComplete ) {
                    this._onComplete.apply( this, this._onCompleteContext );
                }
                
                this._onComplete = null;
            }
        },
        
        addSubCommands: function() {
            
        },
        
        addSubCommand: function( commandClass ) {
            this._subCommands.push( commandClass );
        }
        
    });
    
})( window );