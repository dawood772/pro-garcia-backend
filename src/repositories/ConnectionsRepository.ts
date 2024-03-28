import { EntityRepository, Repository } from "typeorm";
import Connections from "../entities/Connections";

@EntityRepository(Connections)
class ConnectionsRepositoy extends Repository<Connections> {}

export default ConnectionsRepositoy;
