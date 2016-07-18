//保留2位小数
impex.filter('toFixed', {
    to: function(reChar){
    	var v = this.$value;
    	reChar = reChar || '2';
    	if (v != undefined && null != v && "" !== v && "null" !== v) {
    		v = v.toFixed(reChar);
    	}	
    	return v;
    }
});