impex.filter('orderBy',{
    to:function(key,dir){
        if(!key && !dir)return this.value;
        if(!(this.value instanceof Array)){
            LOGGER.warn('can only filter array');
            return this.value;
        }
		
		var vls = this.value;
		var vs = [], vs1 = [];
		for (var i = vls.length;i--;) {
			if (vls[i][key] != null && vls[i][key] != undefined) {
				vs.push(vls[i]);
			}else{
				vs1.push(vls[i]);
			}
		}
        vs.sort(function(a,b){
            var x = key?a[key]:a,
                y = key?b[key]:b;

			if (x == undefined || x == null) return 0;
			if (y == undefined || y == null) return 1;

            if(typeof x === "string"){
                return x.localeCompare(y);
            }else if(typeof x === "number"){
                return x - y;
            }else{
                return (x+'').localeCompare(y);
            }
        });
		
        if(dir === 'desc'){
           vs.reverse();
        }
		vs = vs.concat(vs1);
        return vs;
    }
});