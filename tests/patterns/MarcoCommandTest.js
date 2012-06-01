( function() {
    
    var SubCommandOneSet = false;
    var SubCommandTwoSet = false;
    var SubCommandThreeSet = false;
    
    var SubCommandOne = Command.extend({
        execute: function( event ) {
            SubCommandOneSet = true;
        }
    });
    
    var SubCommandTwo = Command.extend({
        execute: function( event ) {
            SubCommandTwoSet = true;
        }
    });
    
    var SubCommandThree = Command.extend({
        execute: function( event ) {
            SubCommandThreeSet = true;
        }
    });
    
    var MacroCommandTest = MacroCommand.extend({
        addSubCommands: function() {
            this.addSubCommand( SubCommandOne );
            this.addSubCommand( SubCommandTwo );
            this.addSubCommand( SubCommandThree );
        }
    });
    
    module( "patterns.MacroCommand", {
        setup: function() {
            Controller.bind( "macro", MacroCommandTest );
        },
        teardown: function() {
            Controller.unbind( "macro", MacroCommandTest );
        }
    });
    
    test( "subCommandsAreExecuted", 3, function() {
        Event.trigger( "macro" );
        
        ok( SubCommandOneSet, "first subcommand is executed" );
        ok( SubCommandTwoSet, "second subcommand is executed" );
        ok( SubCommandThreeSet, "third subcommand is executed" );
    });
    
})( window );