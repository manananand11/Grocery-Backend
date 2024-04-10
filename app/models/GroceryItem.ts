import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';
import User from './User';

class GroceryItem extends Model {
  public id!: number;
  name!: string;
  price!: number;
  quantity!: number;
  description!: string;
  addedBy!: number;
}

GroceryItem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addedBy: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'grocery_items',
  modelName: 'GroceryItem',
  timestamps: true,
});

GroceryItem.belongsTo(User, { foreignKey: 'addedBy', as: 'user' });

export default GroceryItem;
