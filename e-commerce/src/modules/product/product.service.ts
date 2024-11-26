import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schema/category.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { CategoryId } = createProductDto;
    if (!CategoryId) {
      throw new NotFoundException('category not found');
    }
    const productModel = new this.productModel(createProductDto);
    return productModel.save();
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException(' product does not exist ');
    }
    const { CategoryId, ...rest } = updateProductDto;
    const category: Category = await this.categoryModel.findById(CategoryId);
    if (!category) {
      throw new NotFoundException('category does not exist');
    } else {
      product.category = category;
    }
    Object.assign(product, rest);
    return product.save();
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.productModel.find().populate('category').exec();
  }
  async findProductById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException(' product does not exist ');
    }
    return product;
  }

  async removeProductById(id: string): Promise<Product> {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new NotFoundException(' product does not exist');
    }
    return product;
  }

  async createCatgory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = new this.categoryModel(createCategoryDto);
    return category;
  }

  async removeCategory(id: string): Promise<Category> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    if (!category) {
      throw new NotFoundException(' category does not exist');
    }
    return category;
  }
}
