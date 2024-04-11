import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../../config/database';
import User from './User';

class Order extends Model {
  public id!: number;
  public amount!: number;
  public userId!: number;
  public status!: string;
  public readonly user?: User;
}

Order.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
  },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps:true,
  }
);

Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Order;
