import { Request, Response } from "express";
import ServiceAuth, { TLoginPayload } from "../../services/ServiceAuth";
import { IUsers } from "../../models/Users";

class ControllerAuth {
  constructor() {}

  async login(req: Request, res: Response) {
    const payload: TLoginPayload = {
      username: req.body.username,
      password: req.body.password,
    };

    try {
      const response = await ServiceAuth.login(payload);
      if (!response.success) {
        return res.status(403).json({
          data: response.data,
        });
      }

      const token = ServiceAuth.generateToken(response.data as IUsers);

      res.status(200).json({
        message: "Access Token",
        success: true,
        code: 200,
        data: {
          access_token: token,
        },
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  // register admin
  async registerAdmin(req: Request, res: Response) {
    try {
      const data = await ServiceAuth.registerAdmin({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: "admin",
      });

      res.status(201).json({
        message: "Create Admin Success",
        success: true,
        code: 201,
        data: {
          email: req.body.email,
          username: req.body.username,
          role: "admin",
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed create admin",
      });
    }
  }

  // register member
  async registerMember(req: Request, res: Response) {
    try {
      await ServiceAuth.registerMember({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: "member",
      });
      res.status(201).json({
        message: "Create Member Success",
        success: true,
        code: 201,
        data: {
          email: req.body.email,
          username: req.body.username,
          role: "member",
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed create member",
      });
    }
  }

  // current user
  async currentUser(req: Request, res: Response) {
    try {
      let token: string;
      const authHeader = req.headers.authorization as string;
      if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
      } else {
        token = authHeader;
      }
      const userData = await ServiceAuth.validateToken(token);
      res.status(201).json({
        message: "Current User",
        success: true,
        code: 201,
        data: {
          email: userData.email,
          username: userData.username,
          role: userData.role,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "User not found",
      });
    }
  }
}

export default new ControllerAuth();
