( function() {
    
    window.Router = new ( Class.extend({
        
        getRouteMap: function() {
            return this._routeMap;
        },
        
        isActive: function() {
            return this._active;
        },
        
        _active: null,
        _history: null,
        _routeMap: [],
        
        init: function() {
            this._active = false;
            this._history = window.History;
            
            this.defineEventModel();
        },
        
        defineEventModel: function() {
            this._history.Adapter.bind( window, "statechange", this._onStateChange );
        },
        
        activate: function( triggerCurrentState ) {
            this._active = true;
            
            if( triggerCurrentState ) {
                this._onStateChange();
            }
        },
        
        deactivate: function() {
            this._active = false;
        },
        
        getState: function() {
            return this._history.getState();
        },
        
        reset: function() {
            this._routeMap = [];
        },
        
        add: function( regExp, eventType ) {
            if( !regExp.test || typeof regExp.test != "function" ) {
                throw "Route " + regExp + " is not added as a regular expression!";
            }
            
            var route = {
                route: regExp,
                eventType: eventType
            }
            
            this._routeMap.push( route );
            
            return route;
        },
        
        navigate: function( url ) {
            this._history.pushState( {}, null, url );
        },
        
        trigger: function( path ) {
            var triggered = false;
            
            for( var i in this._routeMap ) {
                var route = this._routeMap[ i ];
                
                if( route.route.test( path )) {
                    triggered = true;
                    
                    Event.trigger( route.eventType, this._history.getState());
                    
                    break;
                }
            }
            
            return triggered;
        },
        
        _onStateChange: function() {
            if( this._active ) {
                Router.trigger( this._history.getState().url );
            }
        }
        
    }));
    
})( window );