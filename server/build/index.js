"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const homeworkRoutes_1 = __importDefault(require("./routes/homeworkRoutes"));
const classroomRoutes_1 = __importDefault(require("./routes/classroomRoutes"));
const sessionRoutes_1 = __importDefault(require("./routes/sessionRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/student', studentRoutes_1.default);
        this.app.use('/api/user', userRoutes_1.default);
        this.app.use('/api/course', courseRoutes_1.default);
        this.app.use('/api/homework', homeworkRoutes_1.default);
        this.app.use('/api/classroom', classroomRoutes_1.default);
        this.app.use('/api/session', sessionRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
