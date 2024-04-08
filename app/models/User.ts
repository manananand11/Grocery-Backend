// app/models/User.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { baseModelAttributes } from './BaseModel';
import sequelize from '../../config/database';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  type!: string;

  @Column(DataType.STRING)
  gender!: string;

  @Column(DataType.STRING)
  status!: string;
}

User.init({ ...baseModelAttributes }, { sequelize, modelName: 'User' });
