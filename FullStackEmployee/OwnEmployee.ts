import{OwnDepartment} from './OwnDepartment'

interface OwnEmployee{
      empdId:number;
      empName:string;
      designation:string;
      doj: Date;
      salary:number;
      isActive:boolean;
      phone:number;
}

const empApi = 'http://localhost:8000/api/'

const fetchAllEmp = async(url:string): Promise<OwnEmployee[]> =>{
      const response = await fetch(url)
      const data:any = await response.json()
      console.log(data);
      return data;

}

fetchAllEmp(empApi);


