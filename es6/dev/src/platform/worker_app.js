import { NgZone } from 'angular2/src/core/zone/ng_zone';
import { Parse5DomAdapter } from 'angular2/src/platform/server/parse5_adapter';
import { PostMessageBus, PostMessageBusSink, PostMessageBusSource } from 'angular2/src/web_workers/shared/post_message_bus';
import { WORKER_APP_APPLICATION_COMMON } from './worker_app_common';
import { APP_INITIALIZER } from 'angular2/core';
import { MessageBus } from 'angular2/src/web_workers/shared/message_bus';
import { COMPILER_PROVIDERS } from 'angular2/src/compiler/compiler';
// TODO(jteplitz602) remove this and compile with lib.webworker.d.ts (#3492)
let _postMessage = {
    postMessage: (message, transferrables) => {
        postMessage(message, transferrables);
    }
};
export const WORKER_APP_APPLICATION = [
    WORKER_APP_APPLICATION_COMMON,
    COMPILER_PROVIDERS,
    /* @ts2dart_Provider */ { provide: MessageBus, useFactory: createMessageBus, deps: [NgZone] },
    /* @ts2dart_Provider */ { provide: APP_INITIALIZER, useValue: setupWebWorker, multi: true }
];
function createMessageBus(zone) {
    let sink = new PostMessageBusSink(_postMessage);
    let source = new PostMessageBusSource();
    let bus = new PostMessageBus(sink, source);
    bus.attachToZone(zone);
    return bus;
}
function setupWebWorker() {
    Parse5DomAdapter.makeCurrent();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaU5MMnBLVVIudG1wL2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0NBQWdDO09BRzlDLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2Q0FBNkM7T0FDckUsRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNyQixNQUFNLGtEQUFrRDtPQUNsRCxFQUFDLDZCQUE2QixFQUFDLE1BQU0scUJBQXFCO09BQzFELEVBQUMsZUFBZSxFQUFDLE1BQU0sZUFBZTtPQUN0QyxFQUFDLFVBQVUsRUFBQyxNQUFNLDZDQUE2QztPQUMvRCxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0NBQWdDO0FBRWpFLDRFQUE0RTtBQUM1RSxJQUFJLFlBQVksR0FBRztJQUNqQixXQUFXLEVBQUUsQ0FBQyxPQUFZLEVBQUUsY0FBNkI7UUFDakQsV0FBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQztBQUVGLE9BQU8sTUFBTSxzQkFBc0IsR0FBMkM7SUFDNUUsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQix1QkFBdUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFDO0lBQzNGLHVCQUF1QixDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7Q0FDMUYsQ0FBQztBQUVGLDBCQUEwQixJQUFZO0lBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQ7SUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3pvbmUvbmdfem9uZSc7XG5pbXBvcnQge1R5cGUsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7UGFyc2U1RG9tQWRhcHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3NlcnZlci9wYXJzZTVfYWRhcHRlcic7XG5pbXBvcnQge1xuICBQb3N0TWVzc2FnZUJ1cyxcbiAgUG9zdE1lc3NhZ2VCdXNTaW5rLFxuICBQb3N0TWVzc2FnZUJ1c1NvdXJjZVxufSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3Bvc3RfbWVzc2FnZV9idXMnO1xuaW1wb3J0IHtXT1JLRVJfQVBQX0FQUExJQ0FUSU9OX0NPTU1PTn0gZnJvbSAnLi93b3JrZXJfYXBwX2NvbW1vbic7XG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VCdXN9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnZV9idXMnO1xuaW1wb3J0IHtDT01QSUxFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9jb21waWxlcic7XG5cbi8vIFRPRE8oanRlcGxpdHo2MDIpIHJlbW92ZSB0aGlzIGFuZCBjb21waWxlIHdpdGggbGliLndlYndvcmtlci5kLnRzICgjMzQ5MilcbmxldCBfcG9zdE1lc3NhZ2UgPSB7XG4gIHBvc3RNZXNzYWdlOiAobWVzc2FnZTogYW55LCB0cmFuc2ZlcnJhYmxlcz86W0FycmF5QnVmZmVyXSkgPT4ge1xuICAgICg8YW55PnBvc3RNZXNzYWdlKShtZXNzYWdlLCB0cmFuc2ZlcnJhYmxlcyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBXT1JLRVJfQVBQX0FQUExJQ0FUSU9OOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IFtcbiAgV09SS0VSX0FQUF9BUFBMSUNBVElPTl9DT01NT04sXG4gIENPTVBJTEVSX1BST1ZJREVSUyxcbiAgLyogQHRzMmRhcnRfUHJvdmlkZXIgKi8ge3Byb3ZpZGU6IE1lc3NhZ2VCdXMsIHVzZUZhY3Rvcnk6IGNyZWF0ZU1lc3NhZ2VCdXMsIGRlcHM6IFtOZ1pvbmVdfSxcbiAgLyogQHRzMmRhcnRfUHJvdmlkZXIgKi8ge3Byb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlVmFsdWU6IHNldHVwV2ViV29ya2VyLCBtdWx0aTogdHJ1ZX1cbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VCdXMoem9uZTogTmdab25lKTogTWVzc2FnZUJ1cyB7XG4gIGxldCBzaW5rID0gbmV3IFBvc3RNZXNzYWdlQnVzU2luayhfcG9zdE1lc3NhZ2UpO1xuICBsZXQgc291cmNlID0gbmV3IFBvc3RNZXNzYWdlQnVzU291cmNlKCk7XG4gIGxldCBidXMgPSBuZXcgUG9zdE1lc3NhZ2VCdXMoc2luaywgc291cmNlKTtcbiAgYnVzLmF0dGFjaFRvWm9uZSh6b25lKTtcbiAgcmV0dXJuIGJ1cztcbn1cblxuZnVuY3Rpb24gc2V0dXBXZWJXb3JrZXIoKTogdm9pZCB7XG4gIFBhcnNlNURvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcbn1cbiJdfQ==