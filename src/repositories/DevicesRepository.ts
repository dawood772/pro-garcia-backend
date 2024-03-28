import { EntityRepository, Repository } from "typeorm";
import Devices from "../entities/Devices";

@EntityRepository(Devices)
class DevicesRepository extends Repository<Devices> {}

export default DevicesRepository;
