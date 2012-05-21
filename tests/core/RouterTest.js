module( "core.Router", {
    setup: function() {
        Router.reset();
    }
});

test( "routeIsAdded", 3, function() {
    var route = Router.add( /home/, "eventType" );
    var length = Router.getRouteMap().length;
    
    ok( length, "route is added" );
    strictEqual( Router.getRouteMap()[ length - 1 ], route, "route is returned" );
    
    raises( function() {
        Router.add( "string", TestCommand );
    }, "router throws error on non regular expression" );
});

test( "routeIsTriggered", 2, function() {
    var route = Router.add( /page/, "eventType" );
    
    ok( Router.trigger( "/page/" ), "route is triggered" );
    strictEqual( Router.trigger( "/does/not/exists/" ), false, "non existing route is not triggered" );
});