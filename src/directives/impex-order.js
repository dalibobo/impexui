/**
 * 排序
 */
impex.directive("order", {
	onDisplay: function() {
		var view = this.view;
		view.addClass("x-order");
		var el = view.el;
		var top = impex.$top();
		if (!top.data) top.data = {};
		if (!top.data[this.value]) top.data[this.value] = {key: "", dir: ""};
		var that = this;
		setTimeout(function() {
			var cns = el.children;
			for (var i = cns.length; i--;) {
				if (cns[i].hasAttribute("order")) {
					var order = cns[i].getAttribute("order");
					if (order == '') continue;
					addClass(cns[i], "sorticon");
					addEvent(cns[i], "click", function() {
						that.order(this);
					});
				}
			}
		}, 20);
	},
	order: function(dom) {
		var t1 = Date.now();
		console.log(t1)
		var order = dom.getAttribute("order");
		var top = impex.$top();
		var orderObj = top.data[this.value];
		if (orderObj.key != order) {
			orderObj.dir = "asc";
		}else{
			orderObj.dir = orderObj.dir == "asc" ? "desc" : "asc";
		}
		var el = this.view.el;
		orderObj.key = order;
		var desc_els = el.querySelectorAll(".sorticon-desc");
		var asc_els = el.querySelectorAll(".sorticon-asc");
		for (var i = desc_els.length; i--;) {
			removeClass(desc_els[i], "sorticon-desc");
		}
		for (var i = asc_els.length; i--;) {
			removeClass(asc_els[i], "sorticon-asc");
		}
		addClass(dom, "sorticon-" + orderObj.dir);
	}
});