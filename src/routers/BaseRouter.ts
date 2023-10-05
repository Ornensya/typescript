import { Router } from "express";
import IRouter from "./RouteInterface";

abstract class BestRoutes implements IRouter{
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }
    abstract routes(): void;
    
}

    export default BestRoutes;
