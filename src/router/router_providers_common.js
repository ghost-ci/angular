'use strict';"use strict";
var common_1 = require('angular2/platform/common');
var router_1 = require('angular2/src/router/router');
var route_registry_1 = require('angular2/src/router/route_registry');
var core_1 = require('angular2/core');
var exceptions_1 = require('angular2/src/facade/exceptions');
/**
 * The Platform agnostic ROUTER PROVIDERS
 */
exports.ROUTER_PROVIDERS_COMMON = [
    route_registry_1.RouteRegistry,
    /* @ts2dart_Provider */ { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy },
    common_1.Location,
    {
        provide: router_1.Router,
        useFactory: routerFactory,
        deps: [route_registry_1.RouteRegistry, common_1.Location, route_registry_1.ROUTER_PRIMARY_COMPONENT, core_1.ApplicationRef]
    },
    {
        provide: route_registry_1.ROUTER_PRIMARY_COMPONENT,
        useFactory: routerPrimaryComponentFactory,
        deps: /*@ts2dart_const*/ ([core_1.ApplicationRef])
    }
];
function routerFactory(registry, location, primaryComponent, appRef) {
    var rootRouter = new router_1.RootRouter(registry, location, primaryComponent);
    appRef.registerDisposeListener(function () { return rootRouter.dispose(); });
    return rootRouter;
}
function routerPrimaryComponentFactory(app) {
    if (app.componentTypes.length == 0) {
        throw new exceptions_1.BaseException("Bootstrap at least one component before injecting Router.");
    }
    return app.componentTypes[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVyc19jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVVxTEE5ZDVXLnRtcC9hbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlcl9wcm92aWRlcnNfY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBK0QsMEJBQTBCLENBQUMsQ0FBQTtBQUMxRix1QkFBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQUM5RCwrQkFBc0Qsb0NBQW9DLENBQUMsQ0FBQTtBQUUzRixxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFDcEUsMkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFFN0Q7O0dBRUc7QUFDVSwrQkFBdUIsR0FBNEI7SUFDOUQsOEJBQWE7SUFDYix1QkFBdUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSx5QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUM7SUFDbkYsaUJBQVE7SUFDUjtRQUNFLE9BQU8sRUFBRSxlQUFNO1FBQ2YsVUFBVSxFQUFFLGFBQWE7UUFDekIsSUFBSSxFQUFFLENBQUMsOEJBQWEsRUFBRSxpQkFBUSxFQUFFLHlDQUF3QixFQUFFLHFCQUFjLENBQUM7S0FDMUU7SUFDRDtRQUNFLE9BQU8sRUFBRSx5Q0FBd0I7UUFDakMsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLHFCQUFjLENBQUMsQ0FBQztLQUM1QztDQUNGLENBQUM7QUFFRix1QkFBdUIsUUFBdUIsRUFBRSxRQUFrQixFQUFFLGdCQUFzQixFQUNuRSxNQUFzQjtJQUMzQyxJQUFJLFVBQVUsR0FBRyxJQUFJLG1CQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxjQUFNLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDM0QsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBRUQsdUNBQXVDLEdBQW1CO0lBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxJQUFJLDBCQUFhLENBQUMsMkRBQTJELENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9ufSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXIsIFJvb3RSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyJztcbmltcG9ydCB7Um91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICdhbmd1bGFyMi9zcmMvcm91dGVyL3JvdXRlX3JlZ2lzdHJ5JztcbmltcG9ydCB7VHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QXBwbGljYXRpb25SZWYsIE9wYXF1ZVRva2VuLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5cbi8qKlxuICogVGhlIFBsYXRmb3JtIGFnbm9zdGljIFJPVVRFUiBQUk9WSURFUlNcbiAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OOiBhbnlbXSA9IC8qQHRzMmRhcnRfY29uc3QqL1tcbiAgUm91dGVSZWdpc3RyeSxcbiAgLyogQHRzMmRhcnRfUHJvdmlkZXIgKi8ge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX0sXG4gIExvY2F0aW9uLFxuICB7XG4gICAgcHJvdmlkZTogUm91dGVyLFxuICAgIHVzZUZhY3Rvcnk6IHJvdXRlckZhY3RvcnksXG4gICAgZGVwczogW1JvdXRlUmVnaXN0cnksIExvY2F0aW9uLCBST1VURVJfUFJJTUFSWV9DT01QT05FTlQsIEFwcGxpY2F0aW9uUmVmXVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5ULFxuICAgIHVzZUZhY3Rvcnk6IHJvdXRlclByaW1hcnlDb21wb25lbnRGYWN0b3J5LFxuICAgIGRlcHM6IC8qQHRzMmRhcnRfY29uc3QqLyAoW0FwcGxpY2F0aW9uUmVmXSlcbiAgfVxuXTtcblxuZnVuY3Rpb24gcm91dGVyRmFjdG9yeShyZWdpc3RyeTogUm91dGVSZWdpc3RyeSwgbG9jYXRpb246IExvY2F0aW9uLCBwcmltYXJ5Q29tcG9uZW50OiBUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKTogUm9vdFJvdXRlciB7XG4gIHZhciByb290Um91dGVyID0gbmV3IFJvb3RSb3V0ZXIocmVnaXN0cnksIGxvY2F0aW9uLCBwcmltYXJ5Q29tcG9uZW50KTtcbiAgYXBwUmVmLnJlZ2lzdGVyRGlzcG9zZUxpc3RlbmVyKCgpID0+IHJvb3RSb3V0ZXIuZGlzcG9zZSgpKTtcbiAgcmV0dXJuIHJvb3RSb3V0ZXI7XG59XG5cbmZ1bmN0aW9uIHJvdXRlclByaW1hcnlDb21wb25lbnRGYWN0b3J5KGFwcDogQXBwbGljYXRpb25SZWYpOiBUeXBlIHtcbiAgaWYgKGFwcC5jb21wb25lbnRUeXBlcy5sZW5ndGggPT0gMCkge1xuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFwiQm9vdHN0cmFwIGF0IGxlYXN0IG9uZSBjb21wb25lbnQgYmVmb3JlIGluamVjdGluZyBSb3V0ZXIuXCIpO1xuICB9XG4gIHJldHVybiBhcHAuY29tcG9uZW50VHlwZXNbMF07XG59XG4iXX0=