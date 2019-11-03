/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import {ICanProvideNamespaces, INamespace } from "@dolittle/tooling.common.commands";

export class NamespaceProvider implements ICanProvideNamespaces {

    constructor(private _namespaces: INamespace[]) {}

    provide(): INamespace[] {
        return this._namespaces;
    }

}
