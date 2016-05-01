'use strict';"use strict";
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var Tree = (function () {
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.parent = function (t) {
        var p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    Tree.prototype.children = function (t) {
        var n = _findNode(t, this._root);
        return lang_1.isPresent(n) ? n.children.map(function (t) { return t.value; }) : null;
    };
    Tree.prototype.firstChild = function (t) {
        var n = _findNode(t, this._root);
        return lang_1.isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
    };
    Tree.prototype.pathFromRoot = function (t) { return _findPath(t, this._root, []).map(function (s) { return s.value; }); };
    return Tree;
}());
exports.Tree = Tree;
function rootNode(tree) {
    return tree._root;
}
exports.rootNode = rootNode;
function _findNode(expected, c) {
    // TODO: vsavkin remove it once recognize is fixed
    if (expected instanceof RouteSegment && equalSegments(expected, c.value))
        return c;
    if (expected === c.value)
        return c;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var r = _findNode(expected, cc);
        if (lang_1.isPresent(r))
            return r;
    }
    return null;
}
function _findPath(expected, c, collected) {
    collected.push(c);
    // TODO: vsavkin remove it once recognize is fixed
    if (expected instanceof RouteSegment && equalSegments(expected, c.value))
        return collected;
    if (expected === c.value)
        return collected;
    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
        var cc = _a[_i];
        var r = _findPath(expected, cc, collection_1.ListWrapper.clone(collected));
        if (lang_1.isPresent(r))
            return r;
    }
    return null;
}
var TreeNode = (function () {
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var UrlSegment = (function () {
    function UrlSegment(segment, parameters, outlet) {
        this.segment = segment;
        this.parameters = parameters;
        this.outlet = outlet;
    }
    UrlSegment.prototype.toString = function () {
        var outletPrefix = lang_1.isBlank(this.outlet) ? "" : this.outlet + ":";
        var segmentPrefix = lang_1.isBlank(this.segment) ? "" : this.segment;
        return "" + outletPrefix + segmentPrefix + _serializeParams(this.parameters);
    };
    return UrlSegment;
}());
exports.UrlSegment = UrlSegment;
function _serializeParams(params) {
    var res = "";
    if (lang_1.isPresent(params)) {
        collection_1.StringMapWrapper.forEach(params, function (v, k) { return res += ";" + k + "=" + v; });
    }
    return res;
}
var RouteSegment = (function () {
    function RouteSegment(urlSegments, parameters, outlet, type, componentFactory) {
        this.urlSegments = urlSegments;
        this.parameters = parameters;
        this.outlet = outlet;
        this._type = type;
        this._componentFactory = componentFactory;
    }
    RouteSegment.prototype.getParam = function (param) {
        return lang_1.isPresent(this.parameters) ? this.parameters[param] : null;
    };
    Object.defineProperty(RouteSegment.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteSegment.prototype, "stringifiedUrlSegments", {
        get: function () { return this.urlSegments.map(function (s) { return s.toString(); }).join("/"); },
        enumerable: true,
        configurable: true
    });
    return RouteSegment;
}());
exports.RouteSegment = RouteSegment;
function serializeRouteSegmentTree(tree) {
    return _serializeRouteSegmentTree(tree._root);
}
exports.serializeRouteSegmentTree = serializeRouteSegmentTree;
function _serializeRouteSegmentTree(node) {
    var v = node.value;
    var children = node.children.map(function (c) { return _serializeRouteSegmentTree(c); }).join(", ");
    return v.outlet + ":" + v.stringifiedUrlSegments + "(" + lang_1.stringify(v.type) + ") [" + children + "]";
}
function equalSegments(a, b) {
    if (lang_1.isBlank(a) && !lang_1.isBlank(b))
        return false;
    if (!lang_1.isBlank(a) && lang_1.isBlank(b))
        return false;
    if (a._type !== b._type)
        return false;
    if (lang_1.isBlank(a.parameters) && !lang_1.isBlank(b.parameters))
        return false;
    if (!lang_1.isBlank(a.parameters) && lang_1.isBlank(b.parameters))
        return false;
    if (lang_1.isBlank(a.parameters) && lang_1.isBlank(b.parameters))
        return true;
    return collection_1.StringMapWrapper.equals(a.parameters, b.parameters);
}
exports.equalSegments = equalSegments;
function routeSegmentComponentFactory(a) {
    return a._componentFactory;
}
exports.routeSegmentComponentFactory = routeSegmentComponentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVVxTEE5ZDVXLnRtcC9hbmd1bGFyMi9zcmMvYWx0X3JvdXRlci9zZWdtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkJBQTRDLGdDQUFnQyxDQUFDLENBQUE7QUFDN0UscUJBQWtELDBCQUEwQixDQUFDLENBQUE7QUFFN0U7SUFJRSxjQUFZLElBQWlCO1FBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFBQyxDQUFDO0lBRXJELHNCQUFJLHNCQUFJO2FBQVIsY0FBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFMUMscUJBQU0sR0FBTixVQUFPLENBQUk7UUFDVCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDL0MsQ0FBQztJQUVELHVCQUFRLEdBQVIsVUFBUyxDQUFJO1FBQ1gsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLGdCQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLENBQUk7UUFDYixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENB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QyxjQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLGNBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QyxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGNBQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2xFLEVBQUUsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksY0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEUsTUFBTSxDQUFDLDZCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBUmUscUJBQWEsZ0JBUTVCLENBQUE7QUFFRCxzQ0FBNkMsQ0FBZTtJQUMxRCxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0FBQzdCLENBQUM7QUFGZSxvQ0FBNEIsK0JBRTNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudEZhY3Rvcnl9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdNYXBXcmFwcGVyLCBMaXN0V3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7VHlwZSwgaXNCbGFuaywgaXNQcmVzZW50LCBzdHJpbmdpZnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmV4cG9ydCBjbGFzcyBUcmVlPFQ+IHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcm9vdDogVHJlZU5vZGU8VD47XG5cbiAgY29uc3RydWN0b3Iocm9vdDogVHJlZU5vZGU8VD4pIHsgdGhpcy5fcm9vdCA9IHJvb3Q7IH1cblxuICBnZXQgcm9vdCgpOiBUIHsgcmV0dXJuIHRoaXMuX3Jvb3QudmFsdWU7IH1cblxuICBwYXJlbnQodDogVCk6IFQge1xuICAgIGxldCBwID0gdGhpcy5wYXRoRnJvbVJvb3QodCk7XG4gICAgcmV0dXJuIHAubGVuZ3RoID4gMSA/IHBbcC5sZW5ndGggLSAyXSA6IG51bGw7XG4gIH1cblxuICBjaGlsZHJlbih0OiBUKTogVFtdIHtcbiAgICBsZXQgbiA9IF9maW5kTm9kZSh0LCB0aGlzLl9yb290KTtcbiAgICByZXR1cm4gaXNQcmVzZW50KG4pID8gbi5jaGlsZHJlbi5tYXAodCA9PiB0LnZhbHVlKSA6IG51bGw7XG4gIH1cblxuICBmaXJzdENoaWxkKHQ6IFQpOiBUIHtcbiAgICBsZXQgbiA9IF9maW5kTm9kZSh0LCB0aGlzLl9yb290KTtcbiAgICByZXR1cm4gaXNQcmVzZW50KG4pICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IG4uY2hpbGRyZW5bMF0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgcGF0aEZyb21Sb290KHQ6IFQpOiBUW10geyByZXR1cm4gX2ZpbmRQYXRoKHQsIHRoaXMuX3Jvb3QsIFtdKS5tYXAocyA9PiBzLnZhbHVlKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9vdE5vZGU8VD4odHJlZTogVHJlZTxUPik6IFRyZWVOb2RlPFQ+IHtcbiAgcmV0dXJuIHRyZWUuX3Jvb3Q7XG59XG5cbmZ1bmN0aW9uIF9maW5kTm9kZTxUPihleHBlY3RlZDogVCwgYzogVHJlZU5vZGU8VD4pOiBUcmVlTm9kZTxUPiB7XG4gIC8vIFRPRE86IHZzYXZraW4gcmVtb3ZlIGl0IG9uY2UgcmVjb2duaXplIGlzIGZpeGVkXG4gIGlmIChleHBlY3RlZCBpbnN0YW5jZW9mIFJvdXRlU2VnbWVudCAmJiBlcXVhbFNlZ21lbnRzKDxhbnk+ZXhwZWN0ZWQsIDxhbnk+Yy52YWx1ZSkpIHJldHVybiBjO1xuICBpZiAoZXhwZWN0ZWQgPT09IGMudmFsdWUpIHJldHVybiBjO1xuICBmb3IgKGxldCBjYyBvZiBjLmNoaWxkcmVuKSB7XG4gICAgbGV0IHIgPSBfZmluZE5vZGUoZXhwZWN0ZWQsIGNjKTtcbiAgICBpZiAoaXNQcmVzZW50KHIpKSByZXR1cm4gcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gX2ZpbmRQYXRoPFQ+KGV4cGVjdGVkOiBULCBjOiBUcmVlTm9kZTxUPiwgY29sbGVjdGVkOiBUcmVlTm9kZTxUPltdKTogVHJlZU5vZGU8VD5bXSB7XG4gIGNvbGxlY3RlZC5wdXNoKGMpO1xuXG4gIC8vIFRPRE86IHZzYXZraW4gcmVtb3ZlIGl0IG9uY2UgcmVjb2duaXplIGlzIGZpeGVkXG4gIGlmIChleHBlY3RlZCBpbnN0YW5jZW9mIFJvdXRlU2VnbWVudCAmJiBlcXVhbFNlZ21lbnRzKDxhbnk+ZXhwZWN0ZWQsIDxhbnk+Yy52YWx1ZSkpXG4gICAgcmV0dXJuIGNvbGxlY3RlZDtcbiAgaWYgKGV4cGVjdGVkID09PSBjLnZhbHVlKSByZXR1cm4gY29sbGVjdGVkO1xuICBmb3IgKGxldCBjYyBvZiBjLmNoaWxkcmVuKSB7XG4gICAgbGV0IHIgPSBfZmluZFBhdGgoZXhwZWN0ZWQsIGNjLCBMaXN0V3JhcHBlci5jbG9uZShjb2xsZWN0ZWQpKTtcbiAgICBpZiAoaXNQcmVzZW50KHIpKSByZXR1cm4gcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZU5vZGU8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IFQsIHB1YmxpYyBjaGlsZHJlbjogVHJlZU5vZGU8VD5bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFVybFNlZ21lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VnbWVudDogYW55LCBwdWJsaWMgcGFyYW1ldGVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgICAgICAgICAgIHB1YmxpYyBvdXRsZXQ6IHN0cmluZykge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGxldCBvdXRsZXRQcmVmaXggPSBpc0JsYW5rKHRoaXMub3V0bGV0KSA/IFwiXCIgOiBgJHt0aGlzLm91dGxldH06YDtcbiAgICBsZXQgc2VnbWVudFByZWZpeCA9IGlzQmxhbmsodGhpcy5zZWdtZW50KSA/IFwiXCIgOiB0aGlzLnNlZ21lbnQ7XG4gICAgcmV0dXJuIGAke291dGxldFByZWZpeH0ke3NlZ21lbnRQcmVmaXh9JHtfc2VyaWFsaXplUGFyYW1zKHRoaXMucGFyYW1ldGVycyl9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfc2VyaWFsaXplUGFyYW1zKHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiBzdHJpbmcge1xuICBsZXQgcmVzID0gXCJcIjtcbiAgaWYgKGlzUHJlc2VudChwYXJhbXMpKSB7XG4gICAgU3RyaW5nTWFwV3JhcHBlci5mb3JFYWNoKHBhcmFtcywgKHYsIGspID0+IHJlcyArPSBgOyR7a309JHt2fWApO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZVNlZ21lbnQge1xuICAvKiogQGludGVybmFsICovXG4gIF90eXBlOiBUeXBlO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXJsU2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcHVibGljIHBhcmFtZXRlcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9LFxuICAgICAgICAgICAgICBwdWJsaWMgb3V0bGV0OiBzdHJpbmcsIHR5cGU6IFR5cGUsIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55Pikge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5O1xuICB9XG5cbiAgZ2V0UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLnBhcmFtZXRlcnMpID8gdGhpcy5wYXJhbWV0ZXJzW3BhcmFtXSA6IG51bGw7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBUeXBlIHsgcmV0dXJuIHRoaXMuX3R5cGU7IH1cblxuICBnZXQgc3RyaW5naWZpZWRVcmxTZWdtZW50cygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy51cmxTZWdtZW50cy5tYXAocyA9PiBzLnRvU3RyaW5nKCkpLmpvaW4oXCIvXCIpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVSb3V0ZVNlZ21lbnRUcmVlKHRyZWU6IFRyZWU8Um91dGVTZWdtZW50Pik6IHN0cmluZyB7XG4gIHJldHVybiBfc2VyaWFsaXplUm91dGVTZWdtZW50VHJlZSh0cmVlLl9yb290KTtcbn1cblxuZnVuY3Rpb24gX3NlcmlhbGl6ZVJvdXRlU2VnbWVudFRyZWUobm9kZTogVHJlZU5vZGU8Um91dGVTZWdtZW50Pik6IHN0cmluZyB7XG4gIGxldCB2ID0gbm9kZS52YWx1ZTtcbiAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5tYXAoYyA9PiBfc2VyaWFsaXplUm91dGVTZWdtZW50VHJlZShjKSkuam9pbihcIiwgXCIpO1xuICByZXR1cm4gYCR7di5vdXRsZXR9OiR7di5zdHJpbmdpZmllZFVybFNlZ21lbnRzfSgke3N0cmluZ2lmeSh2LnR5cGUpfSkgWyR7Y2hpbGRyZW59XWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbFNlZ21lbnRzKGE6IFJvdXRlU2VnbWVudCwgYjogUm91dGVTZWdtZW50KTogYm9vbGVhbiB7XG4gIGlmIChpc0JsYW5rKGEpICYmICFpc0JsYW5rKGIpKSByZXR1cm4gZmFsc2U7XG4gIGlmICghaXNCbGFuayhhKSAmJiBpc0JsYW5rKGIpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChhLl90eXBlICE9PSBiLl90eXBlKSByZXR1cm4gZmFsc2U7XG4gIGlmIChpc0JsYW5rKGEucGFyYW1ldGVycykgJiYgIWlzQmxhbmsoYi5wYXJhbWV0ZXJzKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWlzQmxhbmsoYS5wYXJhbWV0ZXJzKSAmJiBpc0JsYW5rKGIucGFyYW1ldGVycykpIHJldHVybiBmYWxzZTtcbiAgaWYgKGlzQmxhbmsoYS5wYXJhbWV0ZXJzKSAmJiBpc0JsYW5rKGIucGFyYW1ldGVycykpIHJldHVybiB0cnVlO1xuICByZXR1cm4gU3RyaW5nTWFwV3JhcHBlci5lcXVhbHMoYS5wYXJhbWV0ZXJzLCBiLnBhcmFtZXRlcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVTZWdtZW50Q29tcG9uZW50RmFjdG9yeShhOiBSb3V0ZVNlZ21lbnQpOiBDb21wb25lbnRGYWN0b3J5PGFueT4ge1xuICByZXR1cm4gYS5fY29tcG9uZW50RmFjdG9yeTtcbn0iXX0=