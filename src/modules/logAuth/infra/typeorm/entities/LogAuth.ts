import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    JoinColumn,
  } from 'typeorm';
  import ILogAuth from '@modules/logAuth/domain/interfaces/ILogAuth';
  import ITypeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
  import User from '@modules/user/infra/typeorm/entities/User';
  
  @Entity('log_auth')
  class LogAuth implements ILogAuth {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => User, user => user.id, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @Column({
      type: 'enum',
      enum: ITypeAuth,
    })
    log: ITypeAuth;
  
    @CreateDateColumn()
    created_at: Date;
  }
  
  export default LogAuth;
  