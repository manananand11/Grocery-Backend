import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';
import sequelize from '../../config/database';
import { baseModelAttributes } from './BaseModel';

@Table({ tableName: 'orders' })
export class Order extends Model {
  @Column(DataType.DECIMAL(10, 2))
  amount!: number;

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  userId!: number;

  @BelongsTo(() => User, 'userId')
  user!: User;

  @Column(DataType.STRING)
  status!: string;
}

Order.init({ ...baseModelAttributes },{ modelName: 'Order', sequelize });

export default Order;
