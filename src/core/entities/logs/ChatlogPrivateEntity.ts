import { IChatlogPrivateEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user';

@Entity('chatlogs_private')
export class ChatlogPrivateEntity implements IChatlogPrivateEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_from_id' })
    public userFromId: number;

    @Column('int', { name: 'user_to_id' })
    public userToId: number;

    @Column('varchar', { name: 'message', length: 255 })
    public message: string;

    @Column('int', { name: 'timestamp', default: '0' })
    public timestamp: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_from_id' })
    public user?: IUserEntity;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_to_id' })
    public target?: IUserEntity;
}
