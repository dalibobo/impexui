/**
 * impex-form组件
 */
impex.component('impex-form', {
	template: '<form id={{id}} :submit="onSubmit()" class="impex-form {{=class}}" style="{{=style}}">{{=CONTENT}}</form>',   

	// 组件初始化	
	onInit: function() {
		this._findValidateCom();
		this.data.novalidate = _.isString(this.data.novalidate);

		if (!_.isString(this.data.id)) this.data.id = "impex_form_" + getId();
	},

	// 组件显示
	onDisplay: function() {
		this.validate();
	},
	
	// form内部所有的validate组件
	validates: [],
	// 查找form组件内部的validate组件
	_findValidateCom: function() {	
		var cs = this.children;
		for (var i = 0; i < cs.length; i++) {
			if (cs[i].name && cs[i].name == "x-validate") {
				this.validates.push({
					com: cs[i],
					invalid: false
				});
			}
		}
	},
	
	// 阻止浏览器默认提交行为
	_preventSubmit: function(event) {
		if (is.ie()) {
			window.event.returnValue = false;
		}else{
			event.preventDefault();
		}
	},
	
	data: {
		novalidate: false,
		invalid: false,
		url: ""
	},

	validate: function() {	// 验证表单
		var formValidate = true;
		// 验证
		if (!this.data.novalidate && this.validates.length > 0) {
			for (var i = this.validates.length; i--;) {
				var v = this.validates[i];
				var vc = v.com;
				var el = $(vc.view.el);
				if (el.attr("disabled") || el.css("display") == "none") break;
				v.invalid = !vc.do();
				if (v.invalid && formValidate) formValidate = false;
			}
		}					
		this.data.invalid = !formValidate;
		return formValidate;
	},
	
	reset: function() {	// 重置表单
		this.view.el.reset();
		this.broadcast("form.reset");
	},
	
	submit: function() {	// 提交表单
		this.$onSubmit();
	},

	_sendAjax: function(data, hasFile) {	// 发送ajax请求
		if (_.isString(this.data.onbeforesubmit)) {
			if (!this.m(this.data.onbeforesubmit)(data)) return;
		}

		var hasFile = hasFile || false;
		var that = this;
		var setting = {
			url: this.data.url,
			data: data,
			type: "post",
			success: function(rs) {
				if (_.isString(that.data.onsuccess)) {
					var success = that.m(that.data.onsuccess);
					success.apply(that, arguments);
				}
				that.emit("form.success", rs);
			},
			error: function(rs) {
				if (_.isString(that.data.onerror)) {
					var error = that.m(that.data.onerror);
					error.apply(that, arguments);
				}
				that.emit("form.error", rs);
			}
		};
		if (hasFile) {
			setting.processData = false;
			setting.contentType = false;
		}
		$.ajax(setting);
	},
	
	methods: {
		onSubmit: function() {
			if (this.validate()) {
				if (_.isString(this.data.url)) {	// 设置了url地址
					var that = this;
					var files = $(this.view.el).find("input[type='file']");
					if (files.length > 0) {
						var formData = new FormData();
						var formobj =  this.view.el.elements;
						for (var k = 0; k < formobj.length; k++) {
							if(formobj[k].type != "file" && formobj[k].name != ""){
								formData.append(formobj[k].name, formobj[k].value);
							}
						}
						
						for (var i = 0; i < files.length; i++) {
							var input = files.get(i);
							var flist = input.files;
							if (input.name) {
								for (var j = 0; j < flist.length; j++) {
									formData.append(input.name, flist[j]);
								}
							}										
						}
						this._sendAjax(formData, true);
					}else{
						this._sendAjax($(this.view.el).serialize());
					}
				}
			}
			// 阻止浏览器默认提交行为
			this._preventSubmit(event);
		},
		submit: function() {	// 提交表单
			this.submit();
		},
		reset: function() {	// 重置表单
			this.reset();
		}
	},

	events: {
		"validate.fire": function(com, rs) {
			if (this.data.novalidate) return;
			var formValidate = true;
			for (var i = this.validates.length; i--;) {
				var v = this.validates[i];
				if (v.com === com) {
					v.invalid = !rs;
					if (v.invalid) {
						formValidate = false;
						break;
					}
				}
				if (v.invalid && formValidate) formValidate = false;
			}

			this.data.invalid = !formValidate;
		}
	}
});