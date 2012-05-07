module( "core.Bootstrap" );

test( "bootsrapIsInitialized", 2, function() {
    var command = {
        isSet: false,
        execute: function( event ) {
            this.isSet = true;
        }
    };
    var application = Bootstrap.extend({
        addCommands: function() {
           Controller.bind( Bootstrap.STARTUP, command );
        }
    });
    
    var app = new application();
    
    ok( app.initialized, "bootstrap.initialized is set to true" );
    ok( command.isSet, "bootstrap triggered startup" );
});