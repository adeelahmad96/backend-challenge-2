import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDepositToUser1645449393404 implements MigrationInterface {
  name = "AddDepositToUser1645449393404";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "deposit" integer NOT NULL DEFAULT '0'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deposit"`);
  }
}
