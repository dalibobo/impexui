/**
 * 表单提交
 */
impex.directive('submit',{
	form: null,
	onCreate: function() {
		this.view.on("submit", "submit($event)");
	},
	onInit: function() {
		var fname = this.view.attr("name");
		var top = impex.$top();
		if (!top[fname]) top[fname] = {};
		var form = top[fname];
		if (!form.hasOwnProperty("valid")) {
			form.valid = true;
			form.invalid = false;
			form.__coms = [];
		}
		if (!form.clear) {
			// 清除表单验证
			form.clear = function() {
				for (var i = this.__coms.length; i--;) {
					var com = this.__coms[i];
					var elName = com.view.attr("name");
					var fel = getObjByPath(this, elName);
					fel.valid = true;
					fel.invalid = false;
				}
				this.__initCheck = true;
				var that = this;
				setTimeout(function() {
					that.validate();
				}, 20);
			}
		}
		this.form = form;
		// 表单初始化验证标记
		form.__initCheck = true;
		form.validate = function(delay) {
			var dy = delay || 0;
			var that = this;
			setTimeout(function() {
				var coms = that.__coms;
				if (!coms) {
					that.__initCheck = false;
					return;
				}
				for (var i = coms.length;i--;) {
					coms[i].validate();
				}
				that.__initCheck = false;
			}, dy);
		}
		setTimeout(function() {
			form.validate();
		}, 20);
	},
	submit: function(e) {
		this.form.validate();
		var that = this;
		var obj = that.closest(that.$value);
		if (obj && is.function(obj[that.$value])) obj[that.$value](this);

		// 阻止浏览器默认提交行为
		if (is.ie()) {
			window.event.returnValue = false;
		}else{
			e.preventDefault();
		}
	}
});

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

/**
 * 排序
 */
impex.directive("order", {
	onCreate: function() {
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

/**
 * 自定义checkbox选中指令
 */
impex.directive("checked", {
	observe: function(rs) {
		this.view.el.checked = rs;
	}
})