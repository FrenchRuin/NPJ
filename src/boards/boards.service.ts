import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);

    if (!board) {
      throw new NotFoundException(`Cant' find board with id: ${id}`);
    }

    return board;
  }

  deleteBoardById(id: string): void {
    const foundBoard = this.getBoardById(id);

    this.boards = this.boards.filter((board) => board.id !== foundBoard.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.boards.find((board) => board.id === id);
    board.status = status;
    return board;
  }
}
