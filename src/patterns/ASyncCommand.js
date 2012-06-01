( function() {
    
    window.ASyncCommand = Class.extend({
        
        setOnComplete: function( value, context ) {
            this._onComplete = value;
            this._onCompleteContext = context;
        },
        
        _onComplete: null,
        _onCompleteContext: null,
        
        commandComplete: function() {
            if( this._onComplete ) {
                this._onComplete.apply( this._onCompleteContext );
            }
        }
        
    });
    
})( window );