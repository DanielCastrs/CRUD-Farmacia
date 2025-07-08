import { IsNotEmpty, IsPositive } from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produto' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  fabricante: string;

  @IsNotEmpty()
  @IsPositive()
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @IsNotEmpty()
  @Column('int')
  @IsPositive()
  quantidade_estoque: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
