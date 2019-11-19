/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Context, IContextsCreator } from '../../index';

/**
 * Represents an implementation of {IContextsCreator}
 *
 * @export
 * @class ContextsCreator
 * @implements {IContextsCreator}
 */
export class ContextsCreator implements IContextsCreator {
    
    create(id_token: string, sub: string, name: string, tid: string, tenant_name: string) {
        if (!id_token) throw new Error('Missing id_token');
        if (!sub) throw new Error('Missing sub');
        if (!name) throw new Error('Missing name');
        if (!tid) throw new Error('Missing tid');
        if (!tenant_name) throw new Error('Missing tenant_name');

        let context: Context = {
            token: id_token,
            userInfo: {
                name,
                subjectId: sub,
                tenantID: tid,
                tenantName: tenant_name,
            }
        };

        return context;
    }
}