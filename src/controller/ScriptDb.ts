import * as imageJson from '../database/photos.json';
import * as colorJson from '../database/colors.json';
import { Colors } from '../entity/Colors';
import { Images } from '../entity/Images';
import { AppDataSource } from '../data-source';


class Script {
    private colorsRepository = AppDataSource.getRepository(Colors);
    private imagesRepository = AppDataSource.getRepository(Images);

    getDatabase = async () => {

        /* eslint-disable */

        setTimeout(async () => {
            console.log('filling the table Images');

            for ( const item in imageJson ) {
                console.log(imageJson[item])
                const image = {
                    photo_id: imageJson[item].photo_id,
                    photo_url: imageJson[item].photo_url,
                    photo_image_url: imageJson[item].photo_image_url,
                    photo_submitted_at: imageJson[item].photo_submitted_at,
                    photo_width: imageJson[item].photo_width,
                    photo_height: imageJson[item].photo_height,
                    photo_aspect_ratio: imageJson[item].photo_aspect_ratio,
                    photo_description: imageJson[item].photo_description,
                    photographer_usernames: imageJson[item].photographer_username,
                    photographer_first_name: imageJson[item].photographer_first_name,
                    photographer_last_name: imageJson[item].photographer_last_name,
                    exif_camera_make: imageJson[item].exif_camera_make,
                    exif_camera_model: imageJson[item].exif_camera_model,
                    exif_iso: imageJson[item].exif_iso,
                    exif_aperture_value: imageJson[item].exif_aperture_value,
                    exif_focal_length: imageJson[item].exif_focal_length,
                    exif_exposure_time: imageJson[item].exif_exposure_time,
                    photo_location_name: imageJson[item].photo_location_name,
                    photo_location_city: imageJson[item].photo_location_city,
                    stats_views: imageJson[item].stats_views,
                    stats_downloads: imageJson[item].stats_downloads,
                    ai_description: imageJson[item].ai_description
                }

                await this.imagesRepository.save(image)
            }
        }, 2000);


        setTimeout(async () => {


            for ( const item in colorJson ) {
                console.log(colorJson[item])
                const color = {
                    photo_id: colorJson[item].photo_id,
                    hex: colorJson[item].hex,
                    red: colorJson[item].red,
                    green: colorJson[item].green,
                    blue: colorJson[item].blue,
                    keyword: colorJson[item].keyword
                }

                await this.colorsRepository.save(color)
            }

        })
    }
}

export const script = new Script();
