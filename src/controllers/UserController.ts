//import modules
import { Request, Response } from "express";
import IController from './ControllerInterface';
import { ParamsDictionary } from "express-serve-static-core";
import { error } from "console";

let data: any[] = [
    { id: 1, namaI: "Aldi" },
    { id: 2, namaI: "Roy" },
    { id: 3, namaI: "Daniel" },
    { id: 4, namaI: "Aron" }
];

class UserController implements IController{
    index(req: Request,  res: Response): Response {
        return res.send(data);
        console.log("Error: ",error);
    }


    create(req: Request, res: Response): Response {
        const { id, namaI } = req.body;

        data.push({
            id: id,
            namaI: namaI
        });
    return res.send("create success");
    }


    show(req: Request , res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person);
    }


    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { namaI } = req.body;
        
        let person = data.find(item => item.id == id);
        person.namaI = namaI;

        return res.send("Update sukses woi");
    }


    delete(req: Request, res: Response): Response {
        const { id } = req.params;
        let people = data.filter(item => item.id != id);

        return res.send(people);
    }
    
    }


//export class
export default new UserController();