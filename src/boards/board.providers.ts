import { DataSource } from 'typeorm';
import { Board } from './board.entity';

export const BoardProviders = [
  {
    provide: 'BOARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
    inject: ['DATA_SOURCE'],
  },
];
