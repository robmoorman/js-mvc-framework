( function() {
    
    var SubCommandOneSet = false;
    var SubCommandTwoSet = false;
    var SubCommandThreeSet = false;
    
    var SubCommandOne = ASyncCommand.extend({
        execute: function( event ) {
            SubCommandOneSet = true;
            
            this.commandComplete();
        }
    });
    
    var SubCommandTwo = ASyncCommand.extend({
        execute: function( event ) {
            SubCommandTwoSet = true;
            
            this.commandComplete();
        }
    });
    
    var SubCommandThree = ASyncCommand.extend({
        execute: function( event ) {
            SubCommandThreeSet = true;
            
            this.commandComplete();
        }
    });
    
    var MacroCommandTest = ASyncMacroCommand.extend({
        addSubCommands: function() {
            this.addSubCommand( SubCommandOne );
            this.addSubCommand( SubCommandTwo );
            this.addSubCommand( SubCommandThree );
        }
    });
    
    module( "patterns.ASyncMacroCommand", {
        setup: function() {
            Controller.bind( "macro", MacroCommandTest );
        },
        teardown: function() {
            Controller.unbind( "macro", MacroCommandTest );
        }
    });
    
    test( "subCommandsAreExecuted", 3, function() {
        Event.trigger( "macro" );
        
        ok( SubCommandOneSet, "first async subcommand is executed" );
        ok( SubCommandTwoSet, "second async subcommand is executed" );
        ok( SubCommandThreeSet, "third async subcommand is executed" );
    });
    
})( window );