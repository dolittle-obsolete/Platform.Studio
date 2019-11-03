/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import {Plugin} from '@dolittle/tooling.common.plugins';
import { plugin as edgePlugin } from '@dolittle/tooling.edge-studio';
import {CommandGroupsProvider, CommandsProvider, NamespaceProvider} from './internal';
const edgeApi = 'https://edge.dolittle.studio';

export let commandGroupsProvider = new CommandGroupsProvider(edgePlugin.commandGroupsProvider.provide());

export let commandsProvider = new CommandsProvider(edgePlugin.commandsProvider.provide());
export let namespaceProvider = new NamespaceProvider(edgePlugin.namespaceProvider.provide());

export let plugin = new Plugin(commandsProvider, commandGroupsProvider, namespaceProvider);