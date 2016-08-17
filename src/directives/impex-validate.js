/**
 * 校验指令
 * <br/>使用方式：<input x-validate="required,isint:'+',length:2:6}"></input>
 * true:表示需要校验，false:不做校验
 * msg:提示消息
 * tipInner: 将提示消息插入哪个元素中
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
		var tipInnerModel = null;//将提示框插入到哪个元素里
		for ( var p in obj ){ // 方法 
			v = obj[p];
			var lr = v.split(":");
			if(!lr[0] || lr[0] === 'msg' || lr[0]==='undefined' || lr[0]===undefined){
				continue;
			}
			if(lr[0] === 'tipInner'){
				tipInnerModel = $("#"+lr[1]);
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
			var top  = 0;
			if(tipInnerModel){
				top = tipInnerModel.scrollTop();
			}else{
				top = $(document).scrollTop() ;
			}
			Tip.show("tip-"+(this.view.el.id || this.view.el.name).replace(/\./g,'-'),tipInnerModel,{
				left:of.left+el.width(),
				top:of.top+top,
				right:0,
				bottom:0,
				dir:'right',
				message:validateResult.msg
			});
		}else{
			$("#tip-"+(this.view.el.id || this.view.el.name).replace(/\./g,'-')).remove();
		}
		this.emit("impex.validate.result",  validateResult,tipInnerModel);
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