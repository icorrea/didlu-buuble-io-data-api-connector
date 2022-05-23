"use strict";
{
    const SDK = self.SDK;

    const PLUGIN_CLASS = SDK.Plugins.Didlu_BubbleIoDataAPIConnector;

    PLUGIN_CLASS.Type = class BubbleIoDataAPIConnectorType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}