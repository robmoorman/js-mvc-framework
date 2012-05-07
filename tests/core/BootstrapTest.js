module( "core.Bootstrap" );

var BootstrapTest = false;

test( "bootsrapIsInitialized", 2, function() {
    var TestCommand = Command.extend({
        execute: function( event ) {
            BootstrapTest = true;
        }
    });
    var Application = Bootstrap.extend({
        addCommands: function() {
           Controller.bind( Bootstrap.STARTUP, TestCommand );
        }
    });
    
    var app = new Application();
    
    ok( app.initialized, "bootstrap.initialized is set to true" );
    ok( BootstrapTest, "bootstrap triggered startup" );
});