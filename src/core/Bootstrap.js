var Bootstrap = Class.extend({
    
    initialized: false,
    
    init: function() {
        this.addCommands();
        this.addProxies();
        this.addServices();
        this.addMediators();
        this.addRoutes();
        this.addModules();
        
        this.initialized = true;
        
        this.startup();
    },
    
    startup: function() {
        Event.trigger( Bootstrap.STARTUP );
    },
    
    addCommands: function() {
        
    },
    
    addProxies: function(  ) {
        
    },
    
    addServices: function() {
        
    },
    
    addMediators: function() {
        
    },
    
    addRoutes: function() {
        
    },
    
    addModules: function() {
        
    }
     
});

Bootstrap.STARTUP = "startup";