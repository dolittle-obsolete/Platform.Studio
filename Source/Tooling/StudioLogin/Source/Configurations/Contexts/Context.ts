/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { UserInfo } from '../../index';

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
