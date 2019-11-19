/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Context, IContexts, IContextsCreator, ContextsConfiguration } from '../../index';

/**
 * Represents an implementation of {IContexts}
 *
 * @export
 * @class Contexts
 * @implements {IContexts}
 */
export class Contexts implements IContexts {

    /**
     * Instantiates an instance of {Contexts}.
     * @param {IContextsCreator} _contextCreator
     * @param {ContextsConfiguration} _contextsConfig
     */
    constructor(private _contextCreator: IContextsCreator, private _contextsConfig: ContextsConfiguration) {}
    
    add(context: Context) {
        let contextName = this._createContextName(context);
        this._contextsConfig.addContext(contextName, context);
    }
    
    /**
     * Adds a new {Context}
     *
     * @param {(string)} id_token
     * @param {string} sub Subject ID
     * @param {(string)} name Name of the subject
     * @param {(string)} tid Tenant ID
     * @param {(string)} tenant_name 
     */
    createAndAdd(id_token: string, sub: string, name: string, tid: string, tenant_name: string) {
        let context = this._contextCreator.create(id_token, sub, name, tid, tenant_name);

        this.add(context);
        return context;
    }

    delete(contextName: string) {
        return this._contextsConfig.deleteContext(contextName);
    }

    clear() {
        this._contextsConfig.clear();
    }

    private _createContextName(context: Context) {
        let standardName = `${context.userInfo.name} - ${context.userInfo.tenantName}`;
        let name = standardName;
        let i = 0;
        while (this._contextsConfig.hasContext(name)) {
            name = `${standardName} - ${i.toString()}`;  
        }
        return name;
    }
}