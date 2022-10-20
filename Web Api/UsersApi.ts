class UsersApi{
      id:number = 0;
      email: string ="";
      first_name:string="";
      last_name:string = "";
      avatar:File;

      constructor(_id:number, _email:string, _first_name:string,_last_name:string, _avatar:File){
            this.id = _id;
            this.email = _email;
            this.first_name= _first_name;
            this.last_name =_last_name;
            this.avatar=_avatar;
      }
}

const webApii = 'https://reqres.in/api/users';

const fetchAllUsers = async(url:string):Promise<UsersApi[]> =>{
      const response = await fetch(url)
      const {data}:any = await response.json()
      console.log(data)
      return data;


}
 
const userdata = fetchAllUsers(webApii);

//search
const SearchByid= async(url:string,searchid:any):Promise<UsersApi> =>{
      url = `${url}/${searchid}`;
      const response = await fetch(url)
      const {data}:any = await response.json()
      console.log(data)
      return data;


}
SearchByid(webApii,5);

