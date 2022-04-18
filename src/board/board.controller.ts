import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entity/board.entity';

@Controller('board')
export class BoardController {

  constructor(private readonly boardService: BoardService){}

  @Get()
  getTest(): string{
    return this.boardService.getTset();
  }

  @Get('/list')
  getAllBoard(): Promise<Board[]>{
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getBoard(id: string): Promise<Board>{
    return this.boardService.getBoard(id);
  }
}
