export * from 'angular2/src/core/angular_entrypoint';
export { BROWSER_PROVIDERS, ELEMENT_PROBE_PROVIDERS, ELEMENT_PROBE_PROVIDERS_PROD_MODE, inspectNativeElement, BrowserDomAdapter, By, Title, enableDebugTools, disableDebugTools } from 'angular2/src/platform/browser_common';
import { isPresent, isBlank } from 'angular2/src/facade/lang';
import { BROWSER_PROVIDERS, BROWSER_APP_COMMON_PROVIDERS, BROWSER_PLATFORM_MARKER } from 'angular2/src/platform/browser_common';
import { coreLoadAndBootstrap, ReflectiveInjector, getPlatform, createPlatform, assertPlatform } from 'angular2/core';
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
export const BROWSER_APP_PROVIDERS = 
/*@ts2dart_const*/ BROWSER_APP_COMMON_PROVIDERS;
export function browserStaticPlatform() {
    if (isBlank(getPlatform())) {
        createPlatform(ReflectiveInjector.resolveAndCreate(BROWSER_PROVIDERS));
    }
    return assertPlatform(BROWSER_PLATFORM_MARKER);
}
/**
 * See {@link bootstrap} for more information.
 */
export function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (isPresent(initReflector)) {
        initReflector();
    }
    let appProviders = isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
    var appInjector = ReflectiveInjector.resolveAndCreate(appProviders, browserStaticPlatform().injector);
    return coreLoadAndBootstrap(appInjector, appComponentType);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWlOTDJwS1VSLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELFNBQ0UsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQ0FBaUMsRUFDakMsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixFQUFFLEVBQ0YsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixpQkFBaUIsUUFDWixzQ0FBc0MsQ0FBQztPQUV2QyxFQUFPLFNBQVMsRUFBRSxPQUFPLEVBQUMsTUFBTSwwQkFBMEI7T0FDMUQsRUFDTCxpQkFBaUIsRUFDakIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN4QixNQUFNLHNDQUFzQztPQUN0QyxFQUVMLG9CQUFvQixFQUNwQixrQkFBa0IsRUFFbEIsV0FBVyxFQUNYLGNBQWMsRUFDZCxjQUFjLEVBQ2YsTUFBTSxlQUFlO0FBRXRCOzs7O0dBSUc7QUFDSCxPQUFPLE1BQU0scUJBQXFCO0FBQzlCLGtCQUFrQixDQUFDLDRCQUE0QixDQUFDO0FBRXBEO0lBQ0UsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxnQ0FBZ0MsZ0JBQXNCLEVBQ3RCLGVBQXdELEVBQ3hELGFBQXdCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsYUFBYSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksWUFBWSxHQUNaLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxHQUFHLHFCQUFxQixDQUFDO0lBQ2xHLElBQUksV0FBVyxHQUNYLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYW5ndWxhcl9lbnRyeXBvaW50JztcbmV4cG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfUFJPRF9NT0RFLFxuICBpbnNwZWN0TmF0aXZlRWxlbWVudCxcbiAgQnJvd3NlckRvbUFkYXB0ZXIsXG4gIEJ5LFxuICBUaXRsZSxcbiAgZW5hYmxlRGVidWdUb29scyxcbiAgZGlzYWJsZURlYnVnVG9vbHNcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcblxuaW1wb3J0IHtUeXBlLCBpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1xuICBCUk9XU0VSX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9QTEFURk9STV9NQVJLRVJcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgY29yZUxvYWRBbmRCb290c3RyYXAsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgUGxhdGZvcm1SZWYsXG4gIGdldFBsYXRmb3JtLFxuICBjcmVhdGVQbGF0Zm9ybSxcbiAgYXNzZXJ0UGxhdGZvcm1cbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgcHJvdmlkZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIGBhcHBsaWNhdGlvbigpYCB3aGVuIGJvb3RzdHJhcHBpbmcgYSBjb21wb25lbnRcbiAqIHdoZW4gYWxsIHRlbXBsYXRlc1xuICogaGF2ZSBiZWVuIHByZWNvbXBpbGVkIG9mZmxpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FQUF9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICAvKkB0czJkYXJ0X2NvbnN0Ki8gQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUztcblxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJTdGF0aWNQbGF0Zm9ybSgpOiBQbGF0Zm9ybVJlZiB7XG4gIGlmIChpc0JsYW5rKGdldFBsYXRmb3JtKCkpKSB7XG4gICAgY3JlYXRlUGxhdGZvcm0oUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoQlJPV1NFUl9QUk9WSURFUlMpKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0UGxhdGZvcm0oQlJPV1NFUl9QTEFURk9STV9NQVJLRVIpO1xufVxuXG4vKipcbiAqIFNlZSB7QGxpbmsgYm9vdHN0cmFwfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcFN0YXRpYyhhcHBDb21wb25lbnRUeXBlOiBUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Qcm92aWRlcnM/OiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFJlZmxlY3Rvcj86IEZ1bmN0aW9uKTogUHJvbWlzZTxDb21wb25lbnRSZWY8YW55Pj4ge1xuICBpZiAoaXNQcmVzZW50KGluaXRSZWZsZWN0b3IpKSB7XG4gICAgaW5pdFJlZmxlY3RvcigpO1xuICB9XG5cbiAgbGV0IGFwcFByb3ZpZGVycyA9XG4gICAgICBpc1ByZXNlbnQoY3VzdG9tUHJvdmlkZXJzKSA/IFtCUk9XU0VSX0FQUF9QUk9WSURFUlMsIGN1c3RvbVByb3ZpZGVyc10gOiBCUk9XU0VSX0FQUF9QUk9WSURFUlM7XG4gIHZhciBhcHBJbmplY3RvciA9XG4gICAgICBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShhcHBQcm92aWRlcnMsIGJyb3dzZXJTdGF0aWNQbGF0Zm9ybSgpLmluamVjdG9yKTtcbiAgcmV0dXJuIGNvcmVMb2FkQW5kQm9vdHN0cmFwKGFwcEluamVjdG9yLCBhcHBDb21wb25lbnRUeXBlKTtcbn1cbiJdfQ==