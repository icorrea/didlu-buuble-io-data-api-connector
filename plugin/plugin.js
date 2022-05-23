"use strict";
{
    const SDK = self.SDK;

    const PLUGIN_ID = "Didlu_BubbleIoDataAPIConnector";
    const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "data-and-storage";

    const PLUGIN_CLASS = SDK.Plugins.Didlu_BubbleIoDataAPIConnector = class BubbleIoDataAPIConnectorPlugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Didlu");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsSingleGlobal(true);
            this._info.SetCanBeBundled(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();


        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}