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

/**
 * 自定义checkbox选中指令
 */
impex.directive("checked", {
	observe: function(rs) {
		this.view.el.checked = rs;
	}
});

/**
 * 校验指令
 * <br/>使用方式：<input x-validate="required,isint:'+',length:2:6}"></input>
 * true:表示需要校验，false:不做校验
 * msg:提示消息
 * 例子：required,  需要做required校验，
 * isint:'+'
 */
impex.directive('validate',{
	checkModel:"",
	enabled: true,
	do: function() {
		if (!this.enabled) return true;
		var obj = this.checkModel.split(",");
		var objValue = this.view.el.value;
		var reType = true;
		var msg = "验证通过！";
		var v;
		var validateResult = {result: true};
		for ( var p in obj ){ // 方法 
			v = obj[p];
			var lr = v.split(":");
			if(!lr[0] || lr[0] === 'msg'){
				continue;
			}
			
			var rs = {type:true,msg:""};
			if(undefined === impex.validate[lr[0]]){
				rs.type = false;
				rs.msg = lr[0]+"函数不存在!";
			}else{
				rs = impex.validate[lr[0]](objValue,lr.splice(1));
			}
			
			if(!rs.type){
				reType = false;
				validateResult.result = false;
				validateResult.msg = obj.msg || rs.msg ;
				break;
			}
		}
		//this.emit("impex.validate.result",  validateResult);
		
		if(!validateResult.result){
			var el = $(this.view.el);
			var of = el.offset() ;
			Tip.show("tip-"+this.view.el.id,{
				left:of.left+of.width,
				top:of.top,
				right:0,
				bottom:0,
				dir:'right',
				message:validateResult.msg
			});
		}else{
			$("#tip-"+this.view.el.id).remove();
		}
		this.emit("impex.validate.result",  validateResult);
		return reType;
	},
	onInit: function() {
		var that = this;
		$(this.view.el).on("input", function() {
			that.emit("validate.fire", that.do());
		});
		this.checkModel = this.value + "";
		if (undefined == this.data.xDisabled) {
			this.enabled = true;
		}else{
			this.enabled = this.data.xDisabled;
		}
	}
		
});