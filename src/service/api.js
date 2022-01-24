const baseUrl = "https://google-search26.p.rapidapi.com/search?q=";

export async function googApi(payload){

    let response = await fetch(`${baseUrl}${payload.searchTerm}&start=${payload.page}&num=10`, {
            method: 'GET',
            headers: { 
                "x-rapidapi-host": "google-search26.p.rapidapi.com",
	        	"x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        }
    );

    let data = await response.json();
    
    return data;

}