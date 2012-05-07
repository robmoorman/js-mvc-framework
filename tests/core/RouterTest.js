module( "core.Router", {
    setup: function() {
        Router.reset();
    }
});

test( "routeIsAdded", 3, function() {
    var command = {
        execute: function( event ) {}
    };
    
    var route = Router.add( /home/, command );
    var length = Router.getRouteMap().length;
    
    ok( length, "route is added" );
    strictEqual( Router.getRouteMap()[ length - 1 ], route, "route is returned" );
    
    raises( function() {
        Router.add( "string", command );
    }, "router throws error on non regular expression" );
});

test( "routeIsTriggered", 2, function() {
    var route = Router.add( /page/, "eventType" );
    
    ok( Router.trigger( "/page/" ), "route is triggered" );
    strictEqual( Router.trigger( "/does/not/exists/" ), false, "non existing route is not triggered" );
});