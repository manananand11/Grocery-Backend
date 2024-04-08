import { Model, DataType } from 'sequelize-typescript';

export class BaseModel extends Model {
    id!: number;
    createdAt!: Date;
    updatedAt!: Date;
}

export const baseModelAttributes = {
  id: {
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  },
  updatedAt: {
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  },
};
