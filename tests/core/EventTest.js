module( "core.Event", {
    setup: function() {
        Event.unbindAll();
    }
});

test( "eventIsBinded", 1, function() {
    var callback = function() {
        return "eventIsBinded";
    };
    
    Event.bind( "eventType", callback );
    
    ok( Event.willTrigger( "eventType", callback ), "event is binded" );
});

test( "eventIsUnbinded", 1, function() {
    var callback = function() {
        return "eventIsUnbinded";
    };
    
    Event.bind( "eventType", callback );
    Event.unbind( "eventType", callback );
    
    ok( !Event.willTrigger( "eventType", callback ), "event is unbinded" );
});


test( "eventTypeTriggeredCallback", 1, function() {
    var callback = {
        isSet: false,
        triggerMe: function() {
            callback.isSet = true;
        }
    };
    
    Event.bind( "triggerMe", callback.triggerMe );
    Event.trigger( "triggerMe" );
    
    ok( callback.isSet, "event triggered callback" );
});

test( "eventTypeTriggeredCallbackWithPayload", 1, function() {
    var callback = {
        payload: null,
        triggerMe: function( event ) {
            callback.payload = event.data;
        }
    };
    var payload = { set:true };
    
    Event.bind( "triggerMe", callback.triggerMe );
    Event.trigger( "triggerMe", payload );
    
    strictEqual( callback.payload, payload, "event triggered callback with payload" );
});

test( "eventTypeTriggeredCallbackWithContext", 1, function() {
    var callback = {
        element: null,
        triggerMe: function() {
            callback.element = this;
        }
    };
    var link = $( "<a href='/path/to/page/'>Link</a>" );
    
    Event.bind( "triggerMe", callback.triggerMe );
    Event.trigger( "triggerMe", null, link );
    
    strictEqual( callback.element.attr( "href" ), "/path/to/page/", "event triggered callback with context" );
});