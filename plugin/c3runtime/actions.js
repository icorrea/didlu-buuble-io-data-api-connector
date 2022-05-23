"use strict";
{
    self.C3.Plugins.Didlu_BubbleIoDataAPIConnector.Acts = {
        async OnLoadPromise(urlapi, apitoken, category)
        {
            const url = urlapi + category;

            const data = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + apitoken,
                    'Origin': '',
                    'Host': 'app.ano.ni'
                }
            }).then((res) => res.json());

            this.apiData = data.response.results;
        }
    };
}