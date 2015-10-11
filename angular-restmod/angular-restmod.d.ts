/// <reference path="../angularjs/angular.d.ts" />

declare module ng.restmod {
  export interface IModel<T> {
    $promise: ng.IPromise<T>;
    $pending: any[];
    $scope: any;
    $type: IModelStatic<T>;

    $cancel(): IModelCollection<T>;
    $decorate(hooks: any, func: Function): IModel<T>;
    $dispatch(hook: string, args: any, context?: any): IModel<T>;
    $dispatcher(): Function;
    $moveTo(to: number): IModel<T>;
    $off(hook: string, func: Function): IModel<T>;
    $on(hook: string, func: Function): IModel<T>;
    $unwrap(raw: any, mask?: string): IModel<T>;
    $url(): string;
    $wrap(mask?: string): string;

    $asPromise(): ng.IPromise<T>;
    $always(callback: (model: T) => any): IModel<T>;
    $then(success: (model: T) => any, error?: (model: T) => any): IModel<T>;
    $finally(callback: () => any): IModel<T>;
    $action(action: (model: T) => any): IModel<T>;

    $destroy(): IModel<T>;
    $fetch(params?: any): IModel<T>;
    $resolve(params?: any): IModel<T>;
    $hasPendingRequests(): boolean;
    $send(options: any, success: Function, error?: Function): IModel<T>;

    $reveal(): void;
    $save(patch?: any[]): IModel<T>;
  }

  export interface IModelCollection<T> extends Array<T> {
    $isCollection: boolean;
    $params: any;
    $scope: any;
    $promise: ng.IPromise<T[]>;
    $pending: any[];

    $add(model: T, index?: number): IModelCollection<T>;
    $cancel(): IModelCollection<T>;
    $clear(): IModelCollection<T>;
    $collection(params: any, scope?: any): IModelCollection<T>;
    $decode(raw?: any, mask?: string): IModelCollection<T>;
    $decorate(hooks: any, func: Function): IModelCollection<T>;
    $dispatch(hook: string, args: any, context?: any): IModelCollection<T>;
    $dispatcher(): Function;
    $encode(mask?: string): IModelCollection<T>;
    $indexOf(model: T): number;
    $off(hook: string, func: Function): IModelCollection<T>;
    $on(hook: string, func: Function): IModelCollection<T>;
    $remove(model: T): IModelCollection<T>;
    $unwrap(raw: any, mask?: string): IModelCollection<T>;
    $url(): string;
    $urlFor(pk: string): string;
    $wrap(mask?: string): string;

    $asPromise(): ng.IPromise<IModelCollection<T>>;
    $always(callback: (model: T) => any): IModel<T>;
    $then(success: (model: IModelCollection<T>) => any, error?: (model: IModelCollection<T>) => any): IModelCollection<T>;
    $finally(callback: () => any): IModelCollection<T>;
    $action(action: (model: IModelCollection<T>) => any): IModelCollection<T>;

    $new(pk?: string, params?: any): T;
    $new(pk?: {}, params?: any): T;
    $build(params?: any): T;
    $buildRaw(params?: any): T;
    $create(params?: any): T;

    $find(pk: string, params?: any): T;
    $find(pk: {}, params?: any): T;
    $search(params?: any): IModelCollection<T>;
    $fetch(params?: any): IModelCollection<T>;
    $resolve(params?: any): IModelCollection<T>;
    $preload(args: { path: string; params?: any }): IModelCollection<T>;
    $preload(...paths: string[]): IModelCollection<T>;
    $refresh(params?: any): IModelCollection<T>;
    $hasPendingRequests(): boolean;
    $send(options: any, success: Function, error?: Function): IModelCollection<T>;
  }

  export interface IModelStatic<T> {
    new(pk?: string, params?: any): T;
    $new(pk?: string, params?: any): T;
    $new(pk?: {}, params?: any): T;
    $build(params?: any): T;
    $buildRaw(params?: any): T;
    $create(params?: any): T;

    $name(plural: boolean): string;
    $url(): string;
    $urlFor(pk: string): string;
    $unwrap(raw: any, mask?: string): IModelStatic<T>;
    $wrap(mask?: string): string;

    $collection(params?: any): IModelCollection<T>;
    $find(pk: string, params?: any): T;
    $find(pk: {}, params?: any): T;
    $search(params?: any): IModelCollection<T>;

    mix(params: any): IModelStatic<T>;
    mix(serviceName: string, params: any): IModelStatic<T>;
  }

  export interface IRestmodService {
    model(path?: string): IModelStatic<any>;
    mixin: Function;
  }

  export interface IRestmodProvider {
    rebase(params: any): void;
  }
}