/**
 * impex-date组件
 */
impex.component('impex-datebox', {
	template: "<input name='{{=name}}' x-model='value' type='text' value='{{value}}' x-on:blur='getValue()' id='{{id}}' placeholder='{{=placeholder}}' x-disabled='{{xDisabled}}' x-validate='{{xValidate}}'  class='{{=class}}' onclick=WdatePicker({dateFmt:'{{=dateFmt}}'})><div>{{value}}</div>",   
	data:{
		id:"",
		value:"",
	},
	onInit: function() {
		this.data.id = this.data.id ? this.data.id:"impex-date-" + getId();
		//监控赋值变化
		this.watch(this.data.value, function(todos,name,type,newVal) {
			this.$_setValue(newVal);
		});
	},
	methods:{
		_setValue:function(value){
			this.data.value = value;
			if(this.find("x-validate")){
				this.find("x-validate")[0].do();
			}
		}
	},
	getValue:function(){
		this.data.value = $(this.value.el).val() ;
	},
	events: {
		//重置
		"form.reset": function() {
			if(this.data.value === ""){
				this.$_setValue("");
			}else{
				var value = getData(this, this.data.value);
				this.$_setValue(value);
			}
		},
		"impex.validate.result":function(v,validateResult){
			if(!validateResult.result){
				var el = $(v.view.el);
				var of = el.offset() ;
				Tip.show("tip-"+v.data.id,{
					left:of.left+of.width,
					top:of.top,
					dir:v.data.tipPosition,
					message:validateResult.msg
				});
			}
		}
	},

});