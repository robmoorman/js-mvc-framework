var Model = Class.extend({
    
    _proxyMap: {},
    _serviceMap: {},
    
    init: function() {
        
    },
    
    addProxy: function( proxy ) {
        if( this.hasProxy( proxy.getName())) {
            throw "Proxy already added under the name " + proxy.getName();
        }
        
        this._proxyMap[ proxy.getName() ] = proxy;
        
        proxy.added();
    },
    
    getProxy: function( name ) {
        return this._proxyMap[ name ];
    },
    
    hasProxy: function( name ) {
        return this._proxyMap[ name ] != null;
    },
    
    removeProxy: function( name ) {
        var proxy = this.getProxy( name );
        
        if( proxy ) {
            this._proxyMap[ name ] = null;
            
            proxy.removed();
        }
        
        return proxy;
    },
    
    removeAllProxies: function() {
        for( var i in this._proxyMap ) {
            var proxy = this._proxyMap[ i ];
            proxy.removed();
        }
        
        this._proxyMap = {};
    },
    
    addService: function( service ) {
        if( this.hasService( service.getName())) {
            throw "Service already added under the name " + service.getName();
        }
        
        this._serviceMap[ service.getName() ] = service;
        
        service.added();
    },
    
    getService: function( name ) {
        return this._serviceMap[ name ];
    },
    
    hasService: function( name ) {
        return this._serviceMap[ name ] != null;
    },
    
    removeService: function( name ) {
        var service = this.getService( name );
        
        if( service ) {
            this._serviceMap[ name ] = null;
            
            service.removed();
        }
        
        return service;
    },
    
    removeAllServices: function() {
        for( var i in this._serviceMap ) {
            var service = this._serviceMap[ i ];
            service.removed();
        }
        
        this._serviceMap = {};
    }
    
});

var Model = new Model();