// Um monte de coisa
import 'dotenv/config';
import { serverHttp, app } from "./webSocket/http.js";
import './webSocket/webSocket.js';

// Endpoints
import userController from './controller/userController.js'
import salaController from './controller/salaController.js';
import messageController from './controller/messageController.js';

app.use(userController);
app.use(salaController);
app.use(messageController);

serverHttp.listen(5000, () => console.log("API running on port 5000"));