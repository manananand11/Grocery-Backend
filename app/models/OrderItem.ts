import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Order } from './Order';
import { GroceryItem } from './GroceryItem';
import sequelize from '../../config/database';
import { baseModelAttributes } from './BaseModel';

@Table({ tableName: 'order_items' })
export class OrderItem extends Model {
  @ForeignKey(() => Order)
  @Column(DataType.BIGINT)
  orderId!: number;

  @BelongsTo(() => Order, 'orderId')
  order!: Order;

  @ForeignKey(() => GroceryItem)
  @Column(DataType.BIGINT)
  groceryItemId!: number;

  @BelongsTo(() => GroceryItem, 'groceryItemId')
  groceryItem!: GroceryItem;
}

OrderItem.init({ ...baseModelAttributes },{ modelName: 'OrderItem', sequelize });

export default OrderItem;
