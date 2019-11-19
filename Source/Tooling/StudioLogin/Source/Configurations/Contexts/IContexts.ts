/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Context } from '../../index';

/**
 * Defines a system that manages the {Contexts} configuration
 *
 * @export
 * @interface IContexts
 */
export interface IContexts {

    /**
     * Adds a {Context}
     *
     * @param {Context} context
     */
    add(context: Context): void
    
    /**
     * Adds a new {Context}
     *
     * @param {(string)} id_token
     * @param {string} sub Subject ID
     * @param {(string)} name Name of the subject
     * @param {(string)} tid Tenant ID
     * @param {(string)} tenant_name
     * @returns {Context} The added {Context}
     */
    createAndAdd(id_token: string, sub: string, name: string, tid: string, tenant_name: string): Context


    /**
     * Deletes a {Context} by its name
     *
     * @param {string} contextName
     * @returns {boolean}
     */
    delete(contextName: string): boolean

    /**
     * Clears the {ContextsConfiguration}
     *
     */
    clear(): void
}