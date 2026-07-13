import { Router } from "express";
import protect from "../middleware/auth.middleware.js"

import { createConversationController, getConversationsController, openConversationController } from "../controllers/conversation.controller.js";

const router = Router();

router.post(

    "/",

    protect,

    createConversationController

);

router.get(

    "/",

    protect,

    getConversationsController

);

router.patch(

    "/:id/open",

    protect,

    openConversationController

);

export default router;

