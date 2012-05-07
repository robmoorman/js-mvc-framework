module( "core.Controller" );

test( "commandIsAdded", 1, function() {
    var command = {
        execute: function() {}
    };
    
    Controller.bind( "eventType", command );
    
    strictEqual( Controller.getCommandsByEventType( "eventType" )[ 0 ], command, "command is added" );
});

test( "commandIsExecuted", 1, function() {
    var command = {
        isSet: false,
        execute: function( event ) {
            this.isSet = true;
        }
    };
    
    Controller.bind( "eventType", command );
    Event.trigger( "eventType" );
    
    ok( command.isSet, "command is executed" );
});