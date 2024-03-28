import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";
import DevicesRepository from "../repositories/DevicesRepository";

class DevicesService {
  private devicesRepository: DevicesRepository;

  constructor() {
    this.devicesRepository = getCustomRepository(DevicesRepository);
  }

  async list() {
    const userExists = await this.devicesRepository.find();
    return userExists;
  }

  async upsert(device_id, coords) {
    const userExists = await this.devicesRepository.findOne({ device_id });

    if (userExists) {
      await this.devicesRepository.update({ device_id }, { coords })
      return userExists;
      //Update
    }

    const user = this.devicesRepository.create({ device_id, coords });
    await this.devicesRepository.save(user);
    return user;
  }
}

export default DevicesService;
