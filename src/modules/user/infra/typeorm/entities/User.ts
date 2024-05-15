import { IRole } from '@modules/role/domain/interfaces/IRole';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Role from '@modules/role/infra/typeorm/entities/Role';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, role => role.id, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role: IRole;

  @ManyToOne(() => Address, address => address.id, { eager: true })
  @JoinColumn({ name: 'address_id' })
  address: IAddress;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default User;