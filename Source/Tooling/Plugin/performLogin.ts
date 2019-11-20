/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import {ILoginService} from '@dolittle/tooling.common.login';
import { ICanOutputMessages, IBusyIndicator } from "@dolittle/tooling.common.utilities";

export async function performLogin(loginService: ILoginService, outputter: ICanOutputMessages, busyIndicator: IBusyIndicator) {
    await loginService.login(outputter, busyIndicator);
}
