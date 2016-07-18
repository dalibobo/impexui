/**
 * impex-linkbutton组件
 */
impex.component("impex-linkbutton", {
	template:  '<div class="impex-linkbutton {{=class}}" :click="clickHandler()">\
					<div class="icon {{=iconcls}}" x-if="_.isString(iconcls)"></div>\
					<div class="text" x-if="_.isString(text)">{{=text}}</div>\
				</div>',
	methods: {
		clickHandler: function() {
			var fn = this.m(this.data.click);
			if (null != fn) {
				fn(this);
			}else{
				this.emit("linkbutton.click");
			}
		}
	}
});