import { Module } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaService } from './services/categoria.service';
import { CategoriaController } from './controllers/categoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [CategoriaService],
})
export class CategoriaModule {}
