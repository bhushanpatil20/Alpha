import { Router } from "express";
import protect from "../middleware/auth.middleware.js";
import { getMessagesController } from "../controllers/message.controller.js";
import { createMessageController } from "../controllers/message.controller.js";

const router = Router();

router.get("/:conversationId", protect, getMessagesController);
router.post("/", protect, createMessageController);

export default router;