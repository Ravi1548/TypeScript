class Todos{
      userId:number = 0;
      id:number = 0;
      title:string = "";
      completed:boolean = false;

      constructor(_userId:number, _id:number, _title:string, _completed:boolean){
            this.userId = _userId;
            this.id = _id;
            this.title = _title;
            this.completed = _completed;
      }
}


const TApi = 'https://jsonmock.hackerrank.com/api/movies'

const fetchAllTodos = async(url:string):Promise<Todos[]> =>{
      const response = await fetch(url)
      const {data}:any = await response.json()
      console.log(data)
      return data;


}
 
fetchAllUsers(TApi);

