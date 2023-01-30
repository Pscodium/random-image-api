import { Images } from '../entity/Images';
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Colors } from '../entity/Colors';

class ImagesController {
    public imagesRepository = AppDataSource.getRepository(Images);
    public colorsRepository = AppDataSource.getRepository(Colors);


    getImages = async(req: Request, res: Response) => {
        const images = await this.imagesRepository.find();
        const itemsPerPage = 20;
        const page = Number(req.query.page);
        const numberOfImages = images.length / itemsPerPage;


        const items = await this.imagesRepository.createQueryBuilder('item')
            .skip((page - 1) * itemsPerPage)
            .take(itemsPerPage)
            .getMany();

        if (!items) {
            return;
        }

        return res.json({pages: numberOfImages, images: items});
    };


    getRandomImages = async(req: Request, res: Response) => {
        const images = await this.imagesRepository.find();

        const imagesLength = images.length;

        const randomImages = [];

        for (let i = 0; i < 5; i++) {
            const pos = Math.floor(Math.random() * imagesLength) + 1;
            const color = await this.imagesRepository.findOne({ where: { id: pos }});

            randomImages.push(color);
        }

        return res.json(randomImages);
    };

    getRandomImage = async(req: Request, res: Response) => {
        const images = await this.imagesRepository.find();

        const imagesLength = images.length;

        const pos = Math.floor(Math.random() * imagesLength) + 1;

        const image = await this.imagesRepository.findOne({ where: { id: pos }});

        if (!image) {
            return;
        }
        return res.json(image);
    };

    getImageColors = async(req: Request, res: Response) => {
        const id = req.params.id;

        const colors = await this.colorsRepository.findOne({ where: { photo_id: id}});

        if (!colors) {
            return res.status(404).json({ message: "No colors found or invalid id."});
        }

        return res.json(colors);
    };



}

export const imagesController = new ImagesController();
