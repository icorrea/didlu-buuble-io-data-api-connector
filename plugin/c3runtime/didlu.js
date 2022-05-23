class Didlu{

	constructor(){
		this.url = null;
		this.token = null;
	}
	
	setConnection(url,token){
		this.url = url;
		this.token = token;
	}
	
	async getData(){
		return await fetch(this.url+'?api_key='+this.token).then((res)=>res.json());
	}
}