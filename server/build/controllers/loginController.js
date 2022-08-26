"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LoginController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = yield database_1.default.query('SELECT * FROM lmz.users');
            res.json(courses);
            //res.json({text: 'LISTADO'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {id}  = req.params;
            const userOBJ = req.body;
            const user = yield database_1.default.query(`call USER_EXIST('${Object.values(userOBJ)[1]}','${Object.values(userOBJ)[2]}');`);
            if (user.length > 0) {
                console.log('LO LOGRASTE' + Object.values(userOBJ)[1]);
                return res.json(user[0]);
            }
            console.log(user);
            res.status(404).json({ text: 'LO LOGRASTE' });
        });
    }
    getAuth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userOBJ = req.body;
            console.log(userOBJ);
            const user = yield database_1.default.query(`call USER_EXIST('${Object.values(userOBJ)[1]}','${Object.values(userOBJ)[2]}')`);
            if (user.length > 0) {
                console.log(userOBJ);
                return res.json(user[0]);
            }
            console.log(user);
            res.status(404).json({ text: 'Auth is Fail' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const newUser = req.body;
            yield database_1.default.query(`INSERT INTO users (USER_NAME,USER_PASSWORD) VALUES ('${Object.values(newUser)[1]}', '${Object.values(newUser)[2]}')`);
            console.log(newUser);
            res.json({ message: 'Usuario Generado' });
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;
