import { Router } from "express";
import protect from "../middleware/auth.middleware.js"

import {

    createConversationController

} from "../controllers/conversation.controller.js";

const router = Router();

router.post(

    "/",

    protect,

    createConversationController

);

export default router;