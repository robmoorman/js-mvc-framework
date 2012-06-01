( function() {
    
    window.Model = new ( Class.extend({
        
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
                proxy.removed();
                
                delete this._proxyMap[ name ];
            }
            
            return proxy;
        },
        
        removeAllProxies: function() {
            for( var i in this._proxyMap ) {
                this.removeProxy( i );
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
                service.removed();
                
                delete this._serviceMap[ name ];
            }
            
            return service;
        },
        
        removeAllServices: function() {
            for( var i in this._serviceMap ) {
                this.removeService( i );
            }
            
            this._serviceMap = {};
        }
        
    }));
    
})( window );