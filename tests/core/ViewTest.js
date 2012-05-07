module( "core.View", {
    setup: function() {
        View.removeAllMediators();
    }
});

var TestMediator = Mediator.extend({
    init: function( name, element ) {
        this._super( name, element );
    }
});

test( "mediatorIsAdded", 4, function() {
    var mediator = new TestMediator( "testName", {});
    
    View.addMediator( mediator );
    
    ok( View.hasMediator( "testName" ), "mediator is added" );
    ok( mediator.isActive(), "mediator added() is called" );
    
    raises( function() {
        View.addMediator( mediator );
    }, "raises error if mediator already added" );
    
    strictEqual( View.getMediator( "testName" ), mediator, "fetched mediator is equal" );
});

test( "mediatorIsRemoved", 2, function() {
    var mediator = new TestMediator( "testName", {});
    
    View.addMediator( mediator );
    View.removeMediator( "testName" );
    
    ok( !View.hasMediator( "testName" ), "mediator is removed" );
    ok( !mediator.isActive(), "mediator removed() is called" );
});