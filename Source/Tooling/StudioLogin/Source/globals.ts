/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ContextsConfiguration } from './Contexts/ContextsConfiguration';
import { CLILoginService } from './Login/CLILoginService';
import { ILoginService } from './Login/ILoginService';
import { IContexts } from './Contexts/IContexts';
import { Contexts } from './Contexts/Contexts';
import { ContextCreator } from './Contexts/ContextCreator';
import { IContextCreator } from './Contexts/IContextCreator';

export let contextCreator: IContextCreator  = new ContextCreator();
export let contextsConfiguration = new ContextsConfiguration();
export let contexts: IContexts = new Contexts(contextCreator, contextsConfiguration);

export let loginService: ILoginService = new CLILoginService(contexts);
