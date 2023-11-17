import { FormControlItem, MenuItem } from "./types";
import { Option } from "./types";

import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: any) => {
  return blogs
    .slice()
    .sort((a: any, b: any) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const menuItems : MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
  
];


export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "superhero",
    label: "SuperHero",
  },
];


export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyDDJv2zB5axUp3S68l-UP8iNPgxptWPjKA",
  authDomain: "nextjs-blog2-15b36.firebaseapp.com",
  projectId: "nextjs-blog2-15b36",
  storageBucket: "nextjs-blog2-15b36.appspot.com",
  messagingSenderId: "710920803738",
  appId: "1:710920803738:web:cec26c66148ed7107c9623",
  measurementId: "G-1FVG2ZF3K7",
};

export const initialBlogFormData = {
  title :  '',
  description : '',
  image : '',
  category : '' 
 }