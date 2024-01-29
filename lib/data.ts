import React from "react";
import {LuGraduationCap} from "react-icons/lu";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import crudApplication from "@/public/crudApplication.png";
import foodCorner from "@/public/foodCorner.png";
import logisticSite from "@/public/logisticSite.png";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Student",
        location: "Institute of Technology University of Moratuwa",
        description:
            "I pursued a National Diploma in Technology at the Institute of Technology, " +
            "University of Moratuwa. My coursework covered fundamentals of computer science, " +
            "object-oriented programming, and business analytics, providing a robust foundation. ",
        icon: React.createElement(LuGraduationCap),
        date: "2020 - 2023",
    },
    {
        title: "Software Engineer Intern",
        location: "Asset.Digital (pvt) Ltd.",
        description:
            "As an intern software engineer at Asset.Digital (Pvt) Ltd., I gained valuable experience " +
            "in software development, specializing in logistics systems tailored for Europe. " +
            "My role primarily involved backend development tasks.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 Feb - 2023 Oct",
    },
    {
        title: "Associate Software Engineer",
        location: "Asset.Digital (pvt) Ltd.",
        description:
            "In my role as an Associate Software Engineer at Asset.Digital, I expanded my expertise " +
            "to include mobile development using Flutter. This involvement allowed me to contribute " +
            "to versatile software solutions.",
        icon: React.createElement(CgWorkAlt),
        date: "2023 Oct - 2023 Dec",
    },
] as const;

export const projectsData = [
    {
        title: "CRUDApplication",
        description:
            "I create this crud application for my leaning purpose at my leisure time. I could gain more knowledge" +
            "about SpringBoot",
        tags: ["SpringBoot", "Node.js", "MongoDB", "Tailwind"],
        imageUrl: crudApplication,
    },
    {
        title: "FoodCorner",
        description:
            "I developed a simple application that food order system with SpringBoot. In here i used many devops " +
            "platforms for maintain my code quality. ",
        tags: ["React", "TypeScript", "Node.js", "Tailwind", "SpringBoot"],
        imageUrl: foodCorner,
    },
    {
        title: "Logistic Application",
        description:
            "I developed this for full fill customers logistic needs. such as furniture..",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: logisticSite,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "Python",
    "Django",
    "Framer Motion",
] as const;