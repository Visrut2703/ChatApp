import express from "express"
import { sendMessage } from "../controllers/message.controllers.js";
import { getMessage } from "../controllers/message.controllers.js";

import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/sent/:id", protectRoute, sendMessage);

export default router;