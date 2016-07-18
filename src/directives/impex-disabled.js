/**
 * 可用性
 */
impex.directive("disabled", {
	observe: function(rs) {
		if (!rs) {
			this.view.removeAttr("disabled");
		}else{
			this.view.attr("disabled", true);
		}
	}
});