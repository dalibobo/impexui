/**
 * impex-date组件
 */
impex.component('impex-datebox', {
	template: "<input name='{{=name}}' x-model='dateValue' type='text' value='{{dateValue}}' id='{{id}}' placeholder='{{=placeholder}}' x-disabled='{{xDisabled}}' x-validate='{{xValidate}}'  class='{{=class}}' :click='wdatePickerOpen(this)'>",   
	data:{
		id:"",
		dateValue:"",
	},
	onInit: function() {
		this.data.id = this.data.id ? this.data.id:"impex-date-" + getId();
		var that = this;
		//监控赋值变化
		if(this.data.value){
			this.parent.closest('d',this.data.value).watch(this.data.value, function(todos,name,type,newVal) {
				that.$_setValue(newVal);
			});
		}
		
	},
	methods:{
		
		_setValue:function(value){
			this.data.dateValue = value;
			var that = this;
			setTimeout(function() {				
				if(that.find("x-validate")){
					var model = that.find("x-validate")[0];
					model.do();
					model.emit("validate.fire", model.do());
				}
			}, 50);
		},
		wdatePickerOpen :function(element){
			var that = this;
			WdatePicker({
			el:element.view.el,
			onpicking:function(dp){
				//console.log(dp.cal.getNewDateStr());
				that.$_setValue(dp.cal.getNewDateStr());
			},
			onclearing:function(){
				that.$_setValue("");
			},
			dateFmt:this.data.dateFmt
			});
		}
	},
	
	events: {
		//重置
		"form.reset": function() {
			if(this.data.value){
				var value = getData(this,this.data.value);
				this.$_setValue(value);
			}else{
				this.$_setValue("");
			}
			
		},
		"impex.validate.result":function(v,validateResult){
			if(!validateResult.result){
				var el = $(v.view.el);
				var of = el.offset() ;
				Tip.show("tip-"+this.data.id,{
					left:of.left+of.width,
					top:of.top,
					dir:v.data.tipPosition,
					message:validateResult.msg
				});
			}
		}
	},
	onDisplay:function(){
		if(this.data.value){
			this.$_setValue(getData(this,this.data.value));
		}
		
	}
		

});