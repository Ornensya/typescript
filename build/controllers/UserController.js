"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
let data = [
    { id: 1, namaI: "Aldi" },
    { id: 2, namaI: "Roy" },
    { id: 3, namaI: "Daniel" },
    { id: 4, namaI: "Aron" }
];
class UserController {
    index(req, res) {
        return res.send(data);
        console.log("Error: ", console_1.error);
    }
    create(req, res) {
        const { id, namaI } = req.body;
        data.push({
            id: id,
            namaI: namaI
        });
        return res.send("create success");
    }
    show(req, res) {
        return res.send("Ini adalah endpoint Show");
    }
    update(req, res) {
        return res.send("Ini adalah endpoint Index");
    }
    delete(req, res) {
        return res.send("Ini adalah endpoint Index");
    }
}
//export class
exports.default = new UserController();
