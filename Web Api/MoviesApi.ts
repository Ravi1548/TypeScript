class MoviesApi{
      Title:string = "";
      Year:number = 0;
      imdbID:string ="";

      constructor(_Title:string, _Year:number , _imdbID:string){
            this.Title =_Title;
            this.Year = _Year;
            this.imdbID=_imdbID;
      }
}

 const mApi = 'https://jsonmock.hackerrank.com/api/movies'

const fetchAllMoovies = async(url:string):Promise<MoviesApi[]> =>{
      const response = await fetch(url)
      const {data}:any = await response.json()
      console.log(data)
      return data;


}
 
const moviedata = fetchAllUsers(mApi);

const SearchimdbId = async(url:string):Promise<MoviesApi[]> =>{
      const response = await fetch(url)
      const {data}:any = await response.json()
      console.log(data)
      return data;


}