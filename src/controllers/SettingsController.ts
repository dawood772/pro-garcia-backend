import { Request, Response } from "express";
import SettingsService from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;
    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({
        chat,
        username,
      });

      return res.json(settings);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async findByUsername(req: Request, res: Response) {
    const { username } = req.params;

    const settingsSerivce = new SettingsService();
    const settings = await settingsSerivce.findByUserName(username);

    return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsSerivce = new SettingsService();
    await settingsSerivce.update(username, chat);

    return res.send();
  }
}

export default SettingsController;
