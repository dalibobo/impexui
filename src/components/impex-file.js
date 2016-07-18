impex.component("impex-file", {
	template:	'<div id={{id}} class="impex-file {{=class}}" style="{{=style}}">\
					<span class="file-text"></span>\
					{{# fileInputHtml}}\
				</div>',
	onInit: function() {
		this.data.fileInputHtml = '<input x-disabled="{{xDisabled}}" type="file" reset-id="'+ getId() +'" name="'+ this.data.name +'" :change="onChange(this)"/>';
	},
	events: {
		"form.reset": function() {
			this.data.fileInputHtml = '<input type="file" reset-id="'+ getId() +'" name="'+ this.data.name +'" :change="onChange(this)"/>';
		}
	},
	methods: {
		onChange: function() {
			console.log("file change");
		}
	}
});