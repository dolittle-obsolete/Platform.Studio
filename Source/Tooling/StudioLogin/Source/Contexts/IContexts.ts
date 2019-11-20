/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Context, ContextsObject } from '../index';

/**
 * Defines a system that manages the {Contexts} configuration
 *
 * @export
 * @interface IContexts
 */
export interface IContexts {
    
    /**
     * Gets the current context
     *
     * @returns {{contextName: string, context: Context}}
     */
    current(): {contextName: string, context: Context}

    /**
     * Use another context and set that as current context
     *
     * @param {string} contextName Name of the context to set as current
     * @returns {Context}
     */
    use(contextName: string): Context

    /**
     * Change the name of a context
     *
     * @param {string} oldName
     * @param {string} newName
     */
    rename(oldName: string, newName: string): void

    /**
     * Changes the name of the current context
     *
     * @param {string} newName
     */
    renameCurrent(newName: string): void
    
    /**
     * Adds a {Context}
     *
     * @param {Context} context
     */
    add(context: Context): void
    
    /**
     * Gets a specific {Context}
     *
     * @param {string} contextName
     * @returns {Context | undefined} Returns the context or undefined if not found
     */
    get(contextName: string): Context
    
    /**
     * Gets all {Context} contexts and context names as a dictionary
     *
     * @returns {ContextsObject}
     */
    all(): ContextsObject
    
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
