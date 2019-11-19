/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { UserCacheConfig } from '@dolittle/tooling.common.configurations';
import { Context } from '../../index';

/**
 * Represents a dictionary of {Context}
 */
export type ContextsObject = {[key: string]: Context}

/**
 * Represents the configuration for contexts.
 * 
 * This configuration has two keys: 'currentContext' and 'contexts'
 * 
 * - 'currentContext': A string denoting the current context in use
 * - 'contexts': A dictionary of the contexts. The dictionary key is the name of the context and the value is a {Context}
 *
 * @export
 * @class ContextsConfiguration
 * @extends {UserCacheConfig<Context>}
 */
export class ContextsConfiguration extends UserCacheConfig<string | ContextsObject> {

    /**
     * The default configuration
     *
     * @readonly
     * @static
     */
    static get DEFAULT() {
        return {
            currentContext: '',
            contexts: {}
        }
    }
    /**
     * Instantiates an instance of {Contexts}.
     */
    constructor() {
        super('contexts', ContextsConfiguration.DEFAULT);
    }

    clear() {
        this.store = ContextsConfiguration.DEFAULT;
    }
    
    get currentContext() {
        return this.get('currentContext') as string;
    }

    set currentContext(contextName: string) {
        this.set('currentContext', contextName)
    }

    get contexts() {
        return this.get('contexts') as ContextsObject; 
    }

    addContext(contextName: string, context: Context) {
        let obj = this.store;
        (obj.contexts as ContextsObject)[contextName] = context;
        this.store = obj;
    }

    deleteContext(contextName: string) {
        let obj = this.store;
        let contexts = obj['contexts'] as ContextsObject;
        let hasContext = contexts[contextName] !== undefined;
        if (hasContext) {
            delete contexts[contextName];
            obj['contexts'] = contexts;
            this.store = obj;
        }
        return hasContext;
    }

    hasContext(contextName: string) {
        let obj = this.store;
        let contexts = obj['contexts'] as ContextsObject;
        return contexts[contextName] !== undefined;
    }
}
