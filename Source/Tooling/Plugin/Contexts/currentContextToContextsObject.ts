/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ContextsObject, Context } from '@dolittle/studio-login'

export function currentContextToContextsObject(currentContext: {contextName: string, context: Context}) {
    let obj: any = {};
    if (currentContext.context === undefined || !currentContext.contextName) return obj;
    obj[currentContext.contextName] = currentContext.context;
    return obj as ContextsObject
}
