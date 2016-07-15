/**
 * 指令扩展
 */
;!function(impex){
	
    /**
     * 电子邮箱格式输入错误
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
				if($(this.view.el).next().hasClass("impexDirectiveValidateDiv")) {
					$(this.view.el).next().html(validateResult.msg);
				}else{
					$(this.view.el).after("<div class='impexDirectiveValidateDiv'>"+validateResult.msg+"<div/>");
				}
				var of = $(this.view.el).offset() ;
			}else{
				if($(this.view.el).next().hasClass("impexDirectiveValidateDiv")) $(this.view.el).next().remove();
			}
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

}(impex);
