import { Router } from "express";
import protect from "../middleware/auth.middleware.js";
import { getMessagesController, createMessageController, streamMessageController } from "../controllers/message.controller.js";

const router = Router();

router.post("/stream", streamMessageController)
router.get("/:conversationId", protect, getMessagesController);
router.post("/", protect, createMessageController);

export default router;