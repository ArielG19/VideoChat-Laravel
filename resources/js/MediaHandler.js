export default class MediaHandler {
    getPermissions(){
        return new Promise((res,rej)=>{
            navigator.mediaDevices.getUserMedia({video:true,audio:true})
            .then((stream)=>{ //creamos nuestra promesa
                res(stream);
            })
            .catch(err => {
                //mandamos la exepcion
                throw new Error(`Incapaz de buscar stream ${err}`);
            })
        }); 
    }
}