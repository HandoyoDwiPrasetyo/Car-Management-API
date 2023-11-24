import { Request, Response } from "express";
import ServiceCars from "../../services/ServiceCars";
import { IRestController } from "../../interfaces/IRest";
import media from "../../config/media";
import ServiceAuth from "../../services/ServiceAuth";

class ControllerCars implements IRestController {
  constructor() {}

  async list(req: Request, res: Response) {
    try {
      const response = await ServiceCars.list();
      res.status(200).json({
        message: "List Car Success",
        success: true,
        code: 200,
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error",
        success: false,
        code: 500,
        data: error,
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const response = await ServiceCars.show(id);
      res.status(200).json({
        message: "Show Car Success",
        success: true,
        code: 200,
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error",
        success: false,
        code: 500,
        data: error,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newCarData = req.body;

      if (!req.file || !req.file.buffer) {
        throw new Error("File buffer is undefined");
      }

      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      // Upload and get url
      const picture_url = media.storage.uploader.upload(file);
      const picture = (await picture_url).url;

      newCarData.image = picture;

      // Ambil Id User
      let token: string;
      const authHeader = req.headers.authorization as string;
      if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
      } else {
        token = authHeader;
      }
      const createdBy = await ServiceAuth.validateUser(token);
      console.log("CreatedById = ", createdBy);
      newCarData.createdBy = createdBy;

      const response = await ServiceCars.create(newCarData);

      if (!response) {
        return res.status(404).json({
          message: "Data not found",
          success: false,
          code: 404,
          data: response,
        });
      }
      return res.status(200).json({
        message: "Create Car Success",
        success: true,
        code: 201,
        data: newCarData,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        success: false,
        code: 500,
        data: error,
      });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      // Ambil Id User
      let token: string;
      const authHeader = req.headers.authorization as string;
      if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
      } else {
        token = authHeader;
      }
      const deletedBy = (await ServiceAuth.validateUser(token)) as string;
      console.log("DeletedById = ", deletedBy);

      const response = await ServiceCars.remove(id, deletedBy);
      if (!response) {
        return res.status(404).json({
          message: "Data not found",
          success: false,
          code: 404,
          data: response,
        });
      }
      return res.status(200).json({
        message: "Delete Car Success",
        success: true,
        code: 201,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        success: false,
        code: 500,
        data: error,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updateCarData = req.body;

      if (!req.file || !req.file.buffer) {
        throw new Error("File buffer is undefined");
      }

      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      // Upload and get url
      const picture_url = media.storage.uploader.upload(file);
      const picture = (await picture_url).url;

      updateCarData.image = picture;

      // Ambil Id User
      let token: string;
      const authHeader = req.headers.authorization as string;
      if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
      } else {
        token = authHeader;
      }
      const updatedBy = await ServiceAuth.validateUser(token);
      console.log("UpdatedById = ", updatedBy);
      updateCarData.editedBy = updatedBy;

      const response = await ServiceCars.update(id, updateCarData);

      if (!response) {
        return res.status(404).json({
          message: "Data not found",
          success: false,
          code: 404,
          data: response,
        });
      }

      return res.status(201).json({
        message: "Data updated successfully",
        success: true,
        code: 201,
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        success: false,
        code: 500,
        data: error,
      });
    }
  }
}

export default new ControllerCars();
