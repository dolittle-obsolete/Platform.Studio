/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { UserInfo } from '../index';

export function contextEquals(context: Context, otherContext: Context) {
    return otherContext.userInfo.subjectID === context.userInfo.subjectID
            && otherContext.userInfo.tenantID === context.userInfo.tenantID;
}
/**
 * Represents a login context
 */
export type Context = {
    /**
     * The id_token used for authentication
     *
     * @type {string}
     */
    token: string,
    /**
     * The user information
     *
     * @type {UserInfo}
     */
    userInfo: UserInfo
    
};
