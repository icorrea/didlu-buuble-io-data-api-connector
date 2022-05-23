"use strict";
{
    self.C3.Plugins.Didlu_BubbleIoDataAPIConnector.Exps = {
        GetById(id, dataType)
        {
            //implementation

            const result = this.apiData.filter((item) => item["_id"] == id)[0];

            return result[dataType];
        }
    };
}