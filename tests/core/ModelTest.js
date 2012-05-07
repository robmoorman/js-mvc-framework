module( "core.Model", {
    setup: function() {
        Model.removeAllProxies();
    }
});

var TestProxy = Proxy.extend({
    isAdded: false,
    init: function( name, data ) {
        this._super( name, data );
    },
    added: function() {
        this.isAdded = true;
    },
    removed: function() {
        this.isAdded = false;
    }
});

test( "proxyIsAdded", 4, function() {
    var proxy = new TestProxy( "testName", {});
    
    Model.addProxy( proxy );
    
    ok( Model.hasProxy( "testName" ), "proxy is added" );
    ok( proxy.isAdded, "proxy added() is called" );
    
    raises( function() {
        Model.addProxy( proxy );
    }, "raises error if proxy already added" );
    
    strictEqual( Model.getProxy( "testName" ), proxy, "fetched proxy is equal" );
});

test( "proxyIsRemoved", 2, function() {
    var proxy = new TestProxy( "testName", {});
    
    Model.addProxy( proxy );
    Model.removeProxy( "testName" );
    
    ok( !Model.hasProxy( "testName" ), "proxy is removed" );
    ok( !proxy.isAdded, "proxy removed() is called" );
});