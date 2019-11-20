/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import {Plugin} from '@dolittle/tooling.common.plugins';
import { plugin as edgePlugin } from '@dolittle/tooling.edge-studio';
import {CommandGroupsProvider, CommandsProvider, NamespaceProvider, LoginCommand, ContextsCommandGroup, ListContextsCommand, CurrentContextCommand} from './internal';
import { loginService, contexts } from '@dolittle/studio-login';

let edgePluginCommands = edgePlugin.commandsProvider.provide();
let edgePluginCommandGroups = edgePlugin.commandGroupsProvider.provide();
let edgePluginNamespaces = edgePlugin.namespaceProvider.provide();

export let commandGroupsProvider = new CommandGroupsProvider([
    new ContextsCommandGroup([
        new ListContextsCommand(contexts),
        new CurrentContextCommand(contexts)
    ])
]);
export let commandsProvider = new CommandsProvider([
    new LoginCommand(loginService)
]);
export let namespaceProvider = new NamespaceProvider([

]);

export let plugin = new Plugin(commandsProvider, commandGroupsProvider, namespaceProvider);