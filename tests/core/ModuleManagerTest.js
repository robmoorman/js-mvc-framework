module( "core.ModuleManager", {
    setup: function() {
        ModuleManager.removeAll();
    }
});

var TestModule = Module.extend({
    init: function( name, mediatorNames ) {
        this._super( name, mediatorNames );
    },
    validate: function( context ) {
        return context > 0;
    }
});

var TestMediator = Mediator.extend({
    isAdded: false,
    init: function( name, element ) {
        this._super( name, element );
    },
    added: function() {
        this.isAdded = true;
    },
    removed: function() {
        this.isAdded = false;
    }
});

test( "moduleIsAdded", 3, function() {
    var module = new TestModule( "testName", []);
    
    ModuleManager.add( module );
    
    ok( ModuleManager.has( "testName" ), "module is added" );
    
    raises( function() {
        ModuleManager.add( module );
    }, "raises error if module already added" );
    
    strictEqual( ModuleManager.get( "testName" ), module, "fetched module is equal" );
});

test( "moduleIsRemoved", 1, function() {
    var module = new TestModule( "testName", []);
    
    ModuleManager.add( module );
    ModuleManager.remove( "testName" );
    
    ok( !ModuleManager.has( "testName" ), "module is removed" );
});

test( "moduleIsActivatedAndDeactivated", 2, function() {
    var module = new TestModule( "testName", []);
    
    ModuleManager.add( module );
    ModuleManager.trigger( 100 );
    
    ok( module.isActive(), "module is activated" );
    
    ModuleManager.trigger( 0 );
    
    ok( !module.isActive(), "module is deactivated" );
});

test( "mediatorsInModuleAreAddedAndRemoved", 2, function() {
    var mediator = new TestMediator( "testName" );
    var module = new TestModule( "testName", [ "testName" ]);
    
    View.addMediator( mediator );
    
    ModuleManager.add( module );
    ModuleManager.trigger( 100 );
    
    ok( mediator.isActive(), "mediator is added" );
    
    ModuleManager.trigger( 0 );
    
    ok( !mediator.isActive(), "mediator is removed" );
});