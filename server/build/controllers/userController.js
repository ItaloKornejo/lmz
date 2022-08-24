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
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM lmz.USERS');
            res.json(users);
            //res.json({text: 'LISTADO'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM USERS WHERE USER_ID = ?', [id]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            console.log(user);
            res.status(404).json({ text: 'Usuario noX encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO USERS set ?', [req.body]);
            res.json({ message: 'Usuario Generado' });
        });
    }
    getUsercheck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const user = req.body;
            yield database_1.default.query(`call USER_EXIST(${user.nameUser},${user.passwordUser})`);
            res.json({ message: 'Usuario Generado Z' });
        });
    }
}
const userController = new UserController();
exports.default = userController;
