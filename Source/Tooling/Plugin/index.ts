/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import {Plugin} from '@dolittle/tooling.common.plugins';
import { plugin as edgePlugin } from '@dolittle/tooling.edge-studio';
import { loginService, contexts } from '@dolittle/tooling.common.login';
import {CommandGroupsProvider, CommandsProvider, NamespaceProvider, LoginCommand, AuthenticatedCommandTest} from './internal';

let edgePluginCommands = edgePlugin.commandsProvider.provide();
let edgePluginCommandGroups = edgePlugin.commandGroupsProvider.provide();
let edgePluginNamespaces = edgePlugin.namespaceProvider.provide();

export let commandGroupsProvider = new CommandGroupsProvider([...edgePluginCommandGroups,
]);
export let commandsProvider = new CommandsProvider([...edgePluginCommands,
    new LoginCommand(loginService),
    new AuthenticatedCommandTest(loginService, contexts)
]);
export let namespaceProvider = new NamespaceProvider([...edgePluginNamespaces,

]);

export let plugin = new Plugin(commandsProvider, commandGroupsProvider, namespaceProvider);