impex.component("impex-window", impex.extend(impex.coms.base, {
	template:  '<div id="{{id}}" x-show="opened" class="impex-window {{=class}}" style="{{=style}}">\
					<div class="title" x-show="hasHeader">\
						<table>\
							<tr>\
								<td class="iocn-container"><i class="icon {{=iconcls}}"></i></td>\
								<td><span>{{title}}</span>\</td>\
								<td class="right"><i :click="close()" title="关闭窗口" class="close icon icon-no"></i></td>\
							</tr>\
						</table>\
					</div>\
					<div class="body">##body</div>\
					<div class="footer" x-show="hasFooter">##footer</div>\
				</div>',
	data: {
		title: "窗口",
		modal: true,
		hasHeader: true,
		hasFooter: true
	},
	onInit: function() {
		if (_.isString(this.modal)) {
			this.data.modal = ("true" == this.data.modal);
		}
	},
	onBeforeCompile:function(str) {					
		var target = this.view.__target;
		var footer = target.querySelector("footer");
		var footerHtml = (null != footer) ? footer.innerHTML : "";
		if (null != footer) {
			target.removeChild(footer);
		}
		var bodyHtml = target.innerHTML;
		return str.replace(/##footer/g, footerHtml).replace(/##body/g, bodyHtml);
	},
	onDisplay: function() {
		if (_.isString(this.data.show)) {
			if ("true" == this.data.show) this.data.open();
		}else{
			this.$open();
		}
		if (_.isString(this.data.hasfooter)) {
			this.data.hasFooter = ("true" == this.data.hasfooter);
		}
		if (_.isString(this.data.hasheader)) {
			this.data.hasHeader = ("true" == this.data.hasheader);
		}
		this._setBodySize();
		this._setPosition();
	},
	_setBodySize: function() {
		var el = this.view.el;
		var h = $(el).height();					
		var body = el.querySelector(".body");
		var offset = this.data.hasHeader ? 30 : 0;
		offset += this.data.hasFooter ? 44 : 0;
		$(body).height(h - offset);
	},
	_setPosition: function() {
		var el = this.view.el;
		var h = $(el).height();
		var w = $(el).width();
		$(el).css({
			marginLeft: -w/2 + "px",
			marginTop: -h/2 + "px"
		});
	},
	methods: {
		close: function() {
			if (!this.data.opened) return;
			this.data.opened = false;
			this.emit("window.close");
			if (this.data.modal) MaskLayer.hide(this.data.id);
		},
		open: function() {
			if (this.data.modal) MaskLayer.show(this.data.id);
			if (this.data.opened) return;
			this.data.opened = true;
			this._setBodySize();
			this._setPosition();
			this.emit("window.opened");
		}
	}
}));