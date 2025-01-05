import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items_teleports')
export class ItemTeleportEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'teleport_one_id' })
    public teleportOneId: number;

    @Column('int', { name: 'teleport_two_id' })
    public teleportTwoId: number;
}
