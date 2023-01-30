import { Router } from "express";
import { script } from "./controller/ScriptDb";
import { imagesController } from "./controller/imageController";

const routes = Router();

// routes.get('/script', script.getDatabase);

routes.get('/random/images', imagesController.getRandomImages);
routes.get('/random/image', imagesController.getRandomImage);
routes.get('/images/view', imagesController.getImages);
routes.get('/image/colors/:id', imagesController.getImageColors);


export default routes;
