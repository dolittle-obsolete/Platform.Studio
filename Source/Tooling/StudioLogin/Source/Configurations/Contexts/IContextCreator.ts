/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Context } from '../../index';

/**
 * Defines a system that can create a {Context} configuration
 *
 * @export
 * @interface IContextsCreator
 */
export interface IContextsCreator {
    
    /**
     * Creates a {Context}
     *
     * @param {(string)} id_token
     * @param {string} sub Subject ID
     * @param {(string)} name Name of the subject
     * @param {(string)} tid Tenant ID
     * @param {(string)} tenant_name 
     * @returns {Context}
     */
    create(id_token: string, sub: string, name: string, tid: string, tenant_name: string): Context
}