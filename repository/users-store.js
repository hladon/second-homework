import csv from 'csvtojson';
import { createReadStream } from 'fs';

const readStream=createReadStream('C:/Users/Vitalii/Desktop/node home work2/resources/users.csv');

async function find(id) {
        let res;
        await csv().fromStream(readStream).subscribe((json)=>{
                if(json.id==id){
                        res=json;
                }
        });
        return res;
}
export {find}
