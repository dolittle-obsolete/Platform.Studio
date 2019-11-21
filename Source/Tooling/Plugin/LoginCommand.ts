/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Command, CommandContext, IFailedCommandOutputter } from "@dolittle/tooling.common.commands";
import { ILoginService } from '@dolittle/tooling.common.login';
import { IDependencyResolvers } from "@dolittle/tooling.common.dependencies";
import { ICanOutputMessages, IBusyIndicator } from "@dolittle/tooling.common.utilities";

export class LoginCommand extends Command {
    
    constructor(private _loginService: ILoginService) {
        super('login', 'Logs in to the dolittle studio', false)
    }
    async onAction(commandContext: CommandContext, dependencyResolvers: IDependencyResolvers, failedCommandOutputter: IFailedCommandOutputter, outputter: ICanOutputMessages, busyIndicator: IBusyIndicator) {
        await this._loginService.login(dependencyResolvers, outputter, busyIndicator);

    }
}
