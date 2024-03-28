import { getCustomRepository } from "typeorm";
import Settings from "../entities/Settings";
import SettingsRepository from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: SettingsRepository;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    const userExists = await this.settingsRepository.findOne({
      username,
    });

    if (userExists) {
      throw new Error("User already exists.");
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);
  }

  async findByUserName(username: string) {
    const settings = await this.settingsRepository.findOne({
      username,
    });

    return settings;
  }

  async update(username: string, chat: boolean) {
    await this.settingsRepository
      .createQueryBuilder()
      .update(Settings)
      .set({ chat })
      .where("username = :username", {
        username,
      })
      .execute();
  }
}

export default SettingsService;
