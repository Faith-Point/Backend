import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import { IReligion } from '@modules/faithPoint/religions/domain/interfaces/IReligion';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import { IContact } from '@modules/shared/contact/domain/interfaces/IContact';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';
import { ISocialMedia } from '@modules/shared/socialMedia/domain/interfaces/ISocialMedia';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';



@Entity('faith_point')
class FaithPoint implements IFaithPoint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Address, address => address.id, { eager: true })
  @JoinColumn({ name: 'address_id' })
  address: IAddress;

  @ManyToOne(() => Religion, religion => religion.id, { eager: true })
  @JoinColumn({ name: 'religion_id' })
  religion: IReligion;

  @ManyToOne(() => Contact, contact => contact.id, { eager: true })
  @JoinColumn({ name: 'contact_id' })
  contact: IContact;

  @ManyToOne(() => SocialMedia, socialMedia => socialMedia.id, { eager: true })
  @JoinColumn({ name: 'social_media_id' })
  socialMedia: ISocialMedia;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default FaithPoint;