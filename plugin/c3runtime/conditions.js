"use strict";
{
    self.C3.Plugins.Didlu_BubbleIoDataAPIConnector.Cnds = {
        OnDataApiLoaded()
        {
            //implementation
            if (this.apiData != null)
            {
                return this.apiData;
            }


            return false;
        }
    };
}