import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie) private moviesRepo: Repository<Movie>) {}
  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    const queryBuilder = this.moviesRepo
      .createQueryBuilder('movies')
      .select(['movies.id', 'movies.title', 'movies.budget']);
    queryBuilder.offset(5);
    queryBuilder.limit(5);
    return queryBuilder.getMany();
  }

  async findOne(id: number) {
    const foundMovie = await this.moviesRepo.findOne({
      where: { id },
      relations: {
        director: true,
        genres: true,
        castMember: {
          actors: true
        }
      },
    });
    const builderQuery = this.moviesRepo
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.genres', 'genres')
      .leftJoinAndSelect('movie.director', 'director')
      .where('movie.id = :movieId', { movieId: id })
      .getOne();
    if (!foundMovie) throw new NotFoundException('movie not found');
    return foundMovie;
  }
  async getMovieCountByGenre() {
    const response = await this.moviesRepo
      .createQueryBuilder('movie')
      .leftJoin('movie.genres', 'genres')
      .select("genres.id", "id")
      .addSelect("genres.name", "name")
      .addSelect("COUNT(movie.id)", "movieCount")
      .groupBy("genres.id")
      .orderBy("genres.id")
      .getRawMany();

    return response.map((r) => ({...r, movieCount: Number(r.movieCount)}));
  }
  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
