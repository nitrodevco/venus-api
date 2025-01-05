import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('youtube_playlists')
export class YoutubePlaylistEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('varchar', { name: 'playlist_id', length: 255 })
    public playlistId: string;

    @Column('int', { name: 'order' })
    public order: number;
}
