import {FaBattleNet as experience} from "react-icons/fa"
import {HiOutlineMail as contact} from "react-icons/hi"
import {AiOutlineFundProjectionScreen as works} from "react-icons/ai";
import {BsCheck2All as success} from "react-icons/bs";
import {BiError as error} from "react-icons/bi";
import CourseApp from "../Assets/Images/courseApp.png"
import CourseAppMobile from "../Assets/Images/mobileCourseApp.png"
import Store from "../Assets/Images/shop.png"
import StoreMobile from "../Assets/Images/shopMobile.png"
import MovieApp from "../Assets/Images/movieApp.png"
import MovieAppMobile from "../Assets/Images/movieMobile.png"



export const menu: string[] = ['Home', 'About', 'Experience', 'Works', 'Contact'];

export const icons = {
    experience,
    works,
    contact,
    error,
    success
};

export type IconName = keyof typeof icons;


export interface IReviewForm{
    name: string;
    email: string;
    message:string
}


export interface IData {
    id: number,
    name: string;
    image: string;
    mobileImage: string;
    git: string;
    link: string
}

export const data: IData[] = [
    {
        id: 1,
        name: "Hulu App",
        image: MovieApp,
        mobileImage: MovieAppMobile,
        git: "https://github.com/yakkkot/hulu-app",
        link: "https://hulu-yakkkot.vercel.app",
    },
    {
        id: 2,
        name: "E-Commerce store",
        image: Store,
        mobileImage: StoreMobile,
        git: "https://github.com/yakkkot/magazine",
        link: "https://shop-yakkkot.vercel.app",
    },
    {
        id: 3,
        name: "Course App",
        image: CourseApp,
        mobileImage: CourseAppMobile,
        git: "https://github.com/yakkkot/top-app",
        link: "https://yakkkot-course-app.vercel.app",
    }
];

export const scrollClick = (path: string) => {
    let element = document.getElementById(`${path}`)
    element?.scrollIntoView({behavior: 'smooth', block: 'start'});
};
