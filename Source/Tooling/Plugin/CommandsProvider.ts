/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICanProvideCommands, ICommand } from "@dolittle/tooling.common.commands";

export class CommandsProvider implements ICanProvideCommands {

    constructor(private _commandGroups: ICommand[]) {}

    provide(): ICommand[] {
        return this._commandGroups;
    }

}
