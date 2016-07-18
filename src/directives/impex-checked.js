/**
 * 自定义checkbox选中指令
 */
impex.directive("checked", {
	observe: function(rs) {
		this.view.el.checked = rs;
	}
});