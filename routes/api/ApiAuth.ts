import { Router } from "express";
import ControllerAuth from "../../controllers/api/ControllerAuth";

import MiddlewareAuth from "../../middlewares/Auth";

class ApiAuth {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  routes() {
    // Login
    this.router.post("/login", ControllerAuth.login);

    // Register admin
    this.router.post(
      "/register-admin",
      MiddlewareAuth.authorizeSuperAdmin,
      ControllerAuth.registerAdmin
    );

    // Resgister member
    this.router.post("/register", ControllerAuth.registerMember);

    // Current user
    this.router.get("/current-user", ControllerAuth.currentUser);

    return this.router;
  }
}

export default new ApiAuth();
