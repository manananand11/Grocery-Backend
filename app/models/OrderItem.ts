import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';
import Order from './Order';
import GroceryItem from './GroceryItem';

class OrderItem extends Model {
  id!: number;
  orderId!: number;
  groceryItemId!: number;
  quantity!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

OrderItem.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  },
  groceryItemId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: GroceryItem,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'OrderItem',
  tableName: 'order_items'
});

OrderItem.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
OrderItem.belongsTo(GroceryItem, { foreignKey: 'groceryItemId', as: 'groceryItem' });

export default OrderItem;
