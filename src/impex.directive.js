/**
 * 安装验证
 * @param  com  	组件模型
 */
var _setupValidate = function(com) {
	var comName = com.$name;
	comName = comName.substring(comName.indexOf("-") + 1, comName.length);
	com.$view.on("input", "validate()");
	var form = getForm(com.$view.el);
	if (null == form) {
		setTimeout(function() {
			_setupValidate(com);
		}, 20);
		return;
	}
	var formName = form.getAttribute("name");
	var top = impex.$top();
	if (!top[formName]) {
		top[formName] = {valid: true, invalid: false, __coms: []};
	}else{
		if (!top[formName].hasOwnProperty("valid")) {
			top[formName].valid = true;
			top[formName].invalid = false;
			top[formName].__coms = [];
		}
	}
	top[formName].__coms.push(com);
	var name = com.$view.attr("name");
	if (name.indexOf(".") != -1) {
		var names = name.split(".");
		var n1 = names[0], n2 = names[1];
		if (!top[formName][n1]) top[formName][n1] = {};
		top[formName][n1][n2] = {
			invalid: false,
			valid: true,
			validTypes: {}
		}
	}else{
		if (!top[formName][name]) {
			top[formName][name] = {
				invalid: false,
				valid: true,
				validTypes: {}
			}
		}
	}
	
	var fobj = top[formName];
	var vobj = getObjByPath(fobj, name);
	vobj.validTypes[comName] = true;
	com.setValidity = function(value) {
		var comName = this.$name;
		comName = comName.substring(comName.indexOf("-") + 1, comName.length);
		var form = getForm(this.$view.el);
		var formName = form.getAttribute("name");
		var name = this.$view.attr("name");
		var top = impex.$top();
		var fobj = top[formName];
		var vobj = getObjByPath(fobj, name);
		if (fobj.__initCheck) {	// 初始化时，先进行form验证
			if (fobj.valid) {
				fobj.valid = value;
				fobj.invalid = !value;
			}
			return;
		}
		
		vobj.validTypes[comName] = value;
		var rs = true;
		for (var k in vobj.validTypes) {
			if (!vobj.validTypes[k]) {
				rs = false;
				break;
			}
		}

		vobj.valid = rs;
		vobj.invalid = !rs;
		var frs = true;
		for (var i = fobj.__coms.length; i--;) {
			var com = fobj.__coms[i];
			var elName = com.$view.attr("name");
			var fel = getObjByPath(fobj, elName);
			if (!fel.valid) {
				frs = false;
				break;
			}
		}
		fobj.valid = frs;
		fobj.invalid = !frs;
	}
}

/**
 * 最小长度
 */

impex.validate.directive("minlength", function(com) {
	var view = com.$view;
	var value = view.el.value;
	if (value == "") {
		com.setValidity(true);
		return;
	}
	var len = value.length;
	var max = parseInt(com.$value);
	com.setValidity(len >= max);
});

/**
 * 最大长度
 */
impex.validate.directive("maxlength", function(com) {
	var view = com.$view;
	var value = view.el.value;
	if (value == "") {
		com.setValidity(true);
		return;
	}
	var len = value.length;
	var max = parseInt(com.$value);
	com.setValidity(len <= max);
});

/**
 * 模式匹配
 */
impex.validate.directive('pattern', function(com) {
	var view = com.$view;
	var value = view.el.value;
	if (value == "") {
		com.setValidity(true);
		return;
	}
	var regStr = "/^" + com.$value + "$/";
	com.setValidity(eval(regStr + ".test('"+ value +"')"));
});

/**
 * 非空
 */
impex.validate.directive('required', function(com) {
	var view = com.$view;
	var value = view.el.value;
	com.setValidity(value != "");
});

/**
 * 表单提交
 */
impex.directive('submit',{
	form: null,
	onCreate: function() {
		this.$view.on("submit", "submit($event)");
	},
	onInit: function() {
		var fname = this.$view.attr("name");
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
					var elName = com.$view.attr("name");
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
		form.validate = function() {
			var that = this;
			var coms = that.__coms;
			if (!coms) {
				that.__initCheck = false;
				return;
			}
			for (var i = coms.length;i--;) {
				coms[i].validate();
			}
			that.__initCheck = false;
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
		var that = this;
		setTimeout(function() {
			var obj = that.closest(that.$value);
			var v = that.$value;
			var vs = v.split(".");
			var o = obj;
			for (var i = 0; i <= vs.length; i++) {
				if (!o) {
					that.$view.removeAttr("disabled");
					return;
				}
				if (vs[i]) {
					o = o[vs[i]];
				}
			}
			if (o) {
				that.$view.attr("disabled", true);
			}else{
				that.$view.removeAttr("disabled");
			}
		}, 10);
	}
});

/**
 * 消息
 */
impex.directive("messages", {
	observe: function(rs) {
		if (rs) {
			this.$view.show();
		}else{
			this.$view.hide();
		}
	}
});

/**
 * 消息
 */
impex.directive("message", {
	onCreate: function() {
		this.create();
	},
	create: function() {
		this.$view.hide();
		var el = this.$view.el;
		var form = getForm(el);
		if (null == form) {
			var that = this;
			setTimeout(function() {
				that.create();
			}, 20);
			return;
		}
		var fname = form.getAttribute("name");
		// 监控的表单dom
		var forEl = getForElement(el);
		var iname = forEl.getAttribute("for");
		// 是否显示多个校验结果
		var multiple = forEl.hasAttribute("multiple");
		var obj = this.closest(iname + "." + "validTypes." + this.$value);
		var vp = fname + "." + iname + "." + "validTypes";
		var path = vp + "." + this.$value;
		var top = impex.$top();
		var form = top[fname];
		if (!form) form = {};
		if (!form.__showMessage) {
			// 处理只显示单条验证信息
			form.__showMessage = function(path) {
				var vp = path.substring(0, path.lastIndexOf("."));
				var fvp = form[vp];
				var allHide = false;
				for (var i = 0; i < fvp.length; i++) {
					if (!fvp[i].result && !allHide) {
						allHide = true;
						fvp[i].view.show();
					}else{
						fvp[i].view.hide();
					}
				}
			}
		}
		if (!form[vp]) form[vp] = [];
		var fvp = form[vp];
		fvp.push({view: this.$view, result: true, path: path});
		this.watch(path, function(type, newValue) {
			if (multiple) {	// 如果是多条显示
				if (newValue) {
					this.$view.hide();
				}else{
					this.$view.show();
				}
				return;
			}
			
			// 显示单条验证
			for (var i = fvp.length; i--;) {
				if (fvp[i].path == path) {
					fvp[i].result = newValue;
				}
			}
			form.__showMessage(path);
		});
	}
});

/**
 * 排序
 */
impex.directive("order", {
	onCreate: function() {
		var view = this.$view;
		view.addClass("x-order");
		var el = view.el;
		var cns = el.children;
		var top = impex.$top();
		if (!top[this.$value]) top[this.$value] = {key: "", dir: ""};
		var that = this;
		for (var i = cns.length; i--;) {
			if (cns[i].hasAttribute("order")) {
				var order = cns[i].getAttribute("order");
				addClass(cns[i], "sorticon");
				addEvent(cns[i], "click", function() {
					that.order(this);
				});
			}
		}
	},
	order: function(dom) {
		var order = dom.getAttribute("order");
		var top = impex.$top();
		var orderObj = top[this.$value];
		if (orderObj.key != order) {
			orderObj.dir = "asc";
		}else{
			orderObj.dir = orderObj.dir == "asc" ? "desc" : "asc";
		}
		var el = this.$view.el;
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
 * 自定义验证函数
 */
impex.validate.directive('validate', function(com) {
	var view = com.$view;
	var value = view.el.value;
	
	var el = view.el;
	var form = getForm(el);
	var elements = form.elements;
	var values = {};
	for (var i = elements.length;i--;) {
		if (elements[i].hasAttribute("name")) {
			values[elements[i].getAttribute("name")] = elements[i].value;			
		}
	}
	var p = com.closest(com.$value);
	if (p != null) {
		com.setValidity(p[com.$value](view, values));
	}else{
		com.setValidity(true);
	}
});