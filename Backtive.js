var Backtive = Backbone.View.extend({
    constructor: function() {
        Backbone.View.apply(this, arguments);
        this.active = false;
        var activate = this.activate,
            deactivate = this.deactivate;
        this.activate = function(options) {
            options || (options={});
            _.defaults(options, {empty : true});
            if (this.active && !options.force) {
                return this;
            }
            this.active = true;
            if (options.render) {
                this.render({empty: options.empty});
            }
            if (options.show) {
                this.$el.show();
            }
            activate.apply(this, arguments);
        };
        this.deactivate = function(options) {
            options || (options={});
            if (!this.active && !options.force) {
                return this;
            }
            this.active = false;
            if (options.hide) {
                this.$el.hide();
            }
            deactivate.apply(this, arguments);
        };
    },
    activate: function() {
    },
    deactivate: function() {
    },
    render: function(options) {
        options || (options={});
        if (options.empty) {
            this.$el.empty();
        }
        return this;
    }
});
