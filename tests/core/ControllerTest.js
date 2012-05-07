module( "core.Controller" );

var ControllerTest = false;

test( "commandIsAdded", 1, function() {
    var TestCommand = Command.extend({
        execute: function( event ) {}
    });
    
    Controller.bind( "eventType", TestCommand );
    
    strictEqual( Controller.getCommandsByEventType( "eventType" )[ 0 ], TestCommand, "command is added" );
});

test( "commandIsExecuted", 1, function() {
    var TestCommand = Command.extend({
        execute: function( event ) {
            ControllerTest = true;
        }
    });
    
    Controller.bind( "eventType", TestCommand );
    Event.trigger( "eventType" );
    
    ok( ControllerTest, "command is executed" );
});