import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDevices1619282508315 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "devices",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "device_id",
            type: "varchar",
            isNullable: true
          },
          {
            name: "coords",
            type: "json",
            isNullable: true
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("devices");
  }
}
