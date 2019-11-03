/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICanProvideCommandGroups, ICommandGroup } from "@dolittle/tooling.common.commands";

export class CommandGroupsProvider implements ICanProvideCommandGroups {

    constructor(private _commandGroups: ICommandGroup[]) {}

    provide(): ICommandGroup[] {
        return this._commandGroups;
    }

}
