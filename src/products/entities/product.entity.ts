import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './product-image.entity';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    example: '53f1b272-2d6b-417f-85cc-02ea4576a44a',
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Stivens shirt',
    description: 'Product title',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({ example: 20, description: 'Product price', default: 0 })
  @Column('float', {
    default: 0,
  })
  price: number;

  @ApiProperty({
    example: 'Fantastic shirt!',
    description: 'Product description',
    default: null,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ApiProperty({
    example: 'stivens_shirt',
    description: 'Product slug',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  slug: string;

  @ApiProperty({ example: 5, description: 'Product stock', default: 0 })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty({ example: ['M', 'L', 'XL'], description: 'Product sizes' })
  @Column('text', {
    array: true,
  })
  sizes: string[];

  @ApiProperty({ example: 'MEN', description: 'Product gender' })
  @Column('text')
  gender: string;

  @ApiProperty({ example: ['SHIRT'], description: 'Product tags' })
  @Column('text', {
    array: true,
    default: [],
  })
  tags: string[];

  @ApiProperty({
    example: ['https://image1.jpg', 'https://image2.jpg'],
    description: 'Product images',
  })
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ManyToOne(() => User, (user) => user.product, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug.toLowerCase().replace(' ', '_').replace("'", '');
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.title.toLowerCase().replace(' ', '_').replace("'", '');
  }
}
