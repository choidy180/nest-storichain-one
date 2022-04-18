import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entity/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>
  ) {}

  getTset(): string{
    return 'TEST COMPLETE';
  }

  async getAllBoards(): Promise<Board []>{
    return await this.boardRepository.find();
  }

  async getBoard(id: string): Promise<Board>{
    return await this.boardRepository.findOne(id);
  }
}
