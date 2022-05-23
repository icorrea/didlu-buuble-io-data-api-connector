"use strict";
{
    const C3 = self.C3;

    C3.Plugins.Didlu_BubbleIoDataAPIConnector.Instance = class BubbleIoDataAPIConnectorInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);

        }

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }

        GetDebuggerProperties()
        {
            return [
            {
                title: "BubbleIoDataAPIConnector",
                properties: [
                    //{name: ".current-animation",	value: this._currentAnimation.GetName(),	onedit: v => this.CallAction(Acts.SetAnim, v, 0) },
                ]
            }];
        }

        // timeline support
        GetPropertyValueByIndex(index)
        {
            return 0;
        }

        SetPropertyValueByIndex(index, value)
        {
            //set property value here			
        }
    };
}