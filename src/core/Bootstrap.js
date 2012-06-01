( function() {
    
    window.Bootstrap = Class.extend({
        
        initialized: function() {
            return this._initialized;
        },
        
        _initialized: false,
        
        init: function( autoStartup ) {
            this.defineModel();
            this.defineView();
            this.defineController();
            
            this._initialized = true;
            
            if( autoStartup == undefined || autoStartup && autoStartup.toString().toLowerCase() == "true" ) {
                this.startup();
            }
        },
        
        startup: function() {
            Event.trigger( Bootstrap.STARTUP );
        },
        
        defineModel: function() {},
        defineView: function() {},
        defineController: function() {}
        
    });
    
})( window );