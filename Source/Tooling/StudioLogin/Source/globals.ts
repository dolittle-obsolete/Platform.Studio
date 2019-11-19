/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ContextsConfiguration } from './Configurations/Contexts/ContextsConfiguration';
import { CLILoginService } from './Login/CLILoginService';
import { ILoginService } from './Login/ILoginService';
import { IContexts } from './Configurations/Contexts/IContexts';
import { Contexts } from './Configurations/Contexts/Contexts';
import { ContextsCreator } from './Configurations/Contexts/ContextCreator';
import { IContextsCreator } from './Configurations/Contexts/IContextCreator';

export let contextCreator: IContextsCreator  = new ContextsCreator();
export let contextsConfiguration = new ContextsConfiguration();
export let contexts: IContexts = new Contexts(contextCreator, contextsConfiguration);

export let loginService: ILoginService = new CLILoginService(contexts);
