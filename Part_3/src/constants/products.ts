import Asphalt from "../assets/Asphalt_Legend_logo_1_c9a17056b8.webp";
import CSD from "../assets/CSD_Game_Avatar_e98bc4679e.webp";
import DDV from "../assets/DDV_Logo2_360_9951174f4f.webp";
import DS from "../assets/DS_Icon_9892299b20.webp";
import GAME from "../assets/Game_Pack_Screenshot_857aeec0ea.webp";
import type {IProduct} from "../types/productTypes.ts";

export const PRODUCTS: IProduct[] = [
    {
        img: Asphalt,
        title: "Asphalt Legends",
        desc: "Racing, Multiplayer, Sports",
    },
    {
        img: CSD,
        title: "Carmen Sandiego",
        desc: "Action/Adventure, Puzzle, Strategy",
    },
    {
        img: DDV,
        title: "Disney Dreamlight Valley",
        desc: "Action/Adventure, Role Playing, Tycoon/Simulation, Casual",
    },
    {
        img: DS,
        title: "Disney Speedstorm",
        desc: "Racing, Arcade, Action/Adventure",
    },
    {
        img: GAME,
        title: "Explorers Collection Bundle",
        desc: "Action/Adventure, Puzzle, Strategy",
    },
];
