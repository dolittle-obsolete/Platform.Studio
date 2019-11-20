/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import {ILoginService} from '@dolittle/studio-login';
import { ICanOutputMessages } from "@dolittle/tooling.common.utilities";

export async function performLogin(loginService: ILoginService, outputter: ICanOutputMessages) {
    await loginService.login(outputter);
}
