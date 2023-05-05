const database = require('../database/connection');


class carController{
    newCar(req,res){
        const {car_nome,car_placa,car_km} = req.body;
        console.log(car_nome,car_placa,car_km)
        database.insert({car_nome,car_placa,car_km}).table("tb_carros").then(data=>{
            console.log(data)
            res.json({message:"Tarefa criada com sucesso!"})
        }).catch(error =>{
            console.log(error)
        })
    }
}
module.exports = new carController()
