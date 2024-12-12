import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface PostAttributes {
  id?: number;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PostInput extends Optional<PostAttributes, 'id'> {}
export interface PostOutput extends Required<PostAttributes> {}

class Post extends Model<PostAttributes, PostInput> implements PostAttributes {
  public id!: number;
  public title!: string;
  public content!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    tableName: 'Posts',
  }
);

export default Post;