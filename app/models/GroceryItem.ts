// app/models/GroceryItem.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { baseModelAttributes } from './BaseModel';
import { User } from './User';
import sequelize from '../../config/database';

@Table({ tableName: 'grocery_items' })
export class GroceryItem extends Model {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.DECIMAL(10, 2))
  price!: number;

  @Column(DataType.INTEGER)
  quantity!: number;

  @Column(DataType.STRING)
  description!: string;

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  addedBy!: number;

  @BelongsTo(() => User, 'addedBy')
  user!: User;
}

GroceryItem.init({ ...baseModelAttributes }, { sequelize, modelName: 'GroceryItem' });

export default GroceryItem;
