import { Request, Response } from "express";
import UsersService from "../services/UsersService";
import DevicesService from "../services/DevicesService";

class DevicesController {
  async list(req: Request, res: Response): Promise<Response> {

    const usersService = new DevicesService();
    const user = await usersService.list();

    return res.json({ devices: user });
  }
  async create(req: Request, res: Response): Promise<Response> {
    const { device_id, coords } = req.body;

    const usersService = new DevicesService();
    const user = await usersService.upsert(device_id, coords);

    return res.json(user);
  }
}

export default DevicesController;
