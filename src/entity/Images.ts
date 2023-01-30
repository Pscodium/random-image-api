import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({ engine: 'InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'})
export class Images {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({ nullable: false })
        photo_id: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photo_url: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photo_image_url: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photo_submitted_at: string;

    @Column({ nullable: true })
        photo_width: string;

    @Column({ nullable: true })
        photo_height: string;

    @Column({ nullable: true })
        photo_aspect_ratio: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', length: 2000 })
        photo_description: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photographer_username: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photographer_first_name: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photographer_last_name: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        exif_camera_make: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        exif_camera_model: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        exif_iso: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        exif_aperture_value: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        exif_focal_length: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        exif_exposure_time: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photo_location_name: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        photo_location_city: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        stats_views: string;

    @Column({ nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        stats_downloads: string;

    @Column({ nullable: true, length: 2000, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
        ai_description: string;
}
