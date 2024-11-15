import Express from '@/components/icons/express';
import JavaScript from '@/components/icons/javascript';
import Laravel from '@/components/icons/laravel';
import MongoDB from '@/components/icons/mongo';
import Mysql from '@/components/icons/mysql';
import Neon from '@/components/icons/neon';
import NestJS from '@/components/icons/nest';
import Next from '@/components/icons/next';
import Node from '@/components/icons/node';
import Php from '@/components/icons/php';
import Postgres from '@/components/icons/postgres';
import ReactIcon from '@/components/icons/react';
import Redux from '@/components/icons/redux';
import Supabase from '@/components/icons/supabase';
import TurboRepo from '@/components/icons/turbo-repo';
import Typescript from '@/components/icons/typescript';

const projects = [
  {
    id: 1,
    title: 'Edu Pad',
    testimonial:
      'Our ReactJS-powered Udemy-like platform offers dynamic interfaces and seamless user experiences, revolutionizing online learning with scalability and innovation.',
    demo: '',
    image: '/projects/10.png',
    skills: [
      {
        name: 'javascript',
        icon: <JavaScript />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'php',
        icon: <Php />,
      },
      {
        name: 'laravel',
        icon: <Laravel />,
      },
      {
        name: 'mysql',
        icon: <Mysql />,
      },
    ],
    made_at: 'Freelance',
    year: 2023,
  },
  {
    id: 2,
    title: 'SUPA Blog',
    testimonial:
      'This is created with tailwindcss, materialui, hyperui, reactjs and supabase. Supabase is firebase alternative. Supabase use relational database like postgresql.',
    demo: 'https://supablogr.vercel.app',
    image: '/projects/9.png',
    skills: [
      {
        name: 'javascript',
        icon: <JavaScript />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
    ],
    made_at: 'Freelance',
    year: 2023,
    github: 'https://github.com/aungpyaephyo1412/supa_blog',
  },
  {
    id: 3,
    title: 'JK Mobile',
    testimonial:
      'JK Mobile exemplifies my ability to leverage a diverse stack of technologies to create a refined and feature-rich mobile application. This project serves as a showcase of my expertise in front-end development, state management, and backend integration, making it a valuable addition to any resume.',
    demo: 'https://jkmobile.vercel.app',
    image: '/projects/8.png',
    skills: [
      {
        name: 'javascript',
        icon: <JavaScript />,
      },
      {
        name: 'react',
        icon: <ReactIcon />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
    ],
    made_at: 'Freelance',
    year: 2023,
    github: 'https://github.com/aungpyaephyo1412/jk_mobile',
  },
  // {
  //   id: 4,
  //   title: 'Kawi Admin Dashboard',
  //   testimonial:
  //     'Developed the Kawi Admin Dashboard at Myanmar Media Linkage Company Limited in 2023. The project, built with Tailwind CSS, ShadcnUI, Next.js, Zod, and NextAuth, significantly improved internal management processes.',
  //   demo: '',
  //   image: '/projects/7.png',
  //   skills: [
  //     {
  //       name: 'typescript',
  //       icon: <Typescript />,
  //     },
  //     {
  //       name: 'Radix/UI',
  //       icon: <RadixUI />,
  //     },
  //     {
  //       name: 'nextjs',
  //       icon: <Next />,
  //     },
  //     {
  //       name: 'next-auth',
  //       icon: <NextAuth />,
  //     },
  //   ],
  //   made_at: 'Myanmar Media Linkage',
  //   year: 2023,
  // },
  {
    id: 5,
    title: 'Javascript Quiz App',
    testimonial:
      'This is created with shadcn-ui, mdx-remote, nextjs and nodejs.  This page is for javascript developer to practise easy the javascript. This questions got from Mrs.Lydia Hallie github.',
    demo: 'https://jsquestionsr.vercel.app',
    image: '/projects/6.png',
    skills: [
      {
        name: 'typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
    ],
    made_at: 'Freelance',
    year: 2024,
    github: 'https://github.com/aungpyaephyo1412/javascript-questions',
  },
  // {
  //   id: 6,
  //   title: 'MM Pad',
  //   testimonial:
  //     'Developed the MMPad at Myanmar Media Linkage Company Limited in 2023. The project, built with Tailwindcss, RadixUI, NextJS, Zod, React-Hook-Form, Zustand, NextAuth, Inspired by Wattpad.',
  //   demo: '',
  //   image: '/projects/5.png',
  //   skills: [
  //     {
  //       name: 'typescript',
  //       icon: <Typescript />,
  //     },
  //     {
  //       name: 'Radix/UI',
  //       icon: <RadixUI />,
  //     },
  //     {
  //       name: 'nextjs',
  //       icon: <Next />,
  //     },
  //     {
  //       name: 'next-auth',
  //       icon: <NextAuth />,
  //     },
  //   ],
  //   made_at: 'Myanmar Media Linkage',
  //   year: 2023,
  // },
  {
    id: 7,
    title: "Thihan's Portfolio",
    testimonial:
      "Developed a UI/UX project for Ko Thihan. The project aimed to briefly describe the project's goals and objectives, such as enhancing user experience or increasing engagement.",
    demo: 'https://thihan.vercel.app',
    image: '/projects/4.png',
    skills: [
      {
        name: 'typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
    ],
    made_at: 'Freelance',
    year: 2023,
  },
  {
    id: 8,
    title: 'IT Job MM',
    testimonial:
      'I led the development of a smart IT job finder platform using Next.js, Node.js, Express.js, MongoDB, TypeScript, and NextUI. I focused on making it user-friendly and fast, ensuring it connects job seekers with the right IT jobs.',
    demo: 'https://itjobmm.vercel.app',
    image: '/projects/3.png',
    skills: [
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'mongodb',
        icon: <MongoDB />,
      },
    ],
    made_at: 'Freelance',
    year: 2024,
  },
  {
    id: 10,
    title: 'Walmal POS',
    demo: 'https://walmal.vercel.app',
    image: '/projects/2.png',
    skills: [
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'redux',
        icon: <Redux />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'postgresql',
        icon: <Postgres />,
      },
      {
        name: 'neon',
        icon: <Neon />,
      },
    ],
    made_at: 'Walmal Shopping',
    year: 2024,
    testimonial:
      'Walmart.com.mm is a robust e-commerce platform built with TypeScript, Next.js, Redux, Node.js, Express.js, PostgreSQL, and hosted on Vercel, ensuring a fast, scalable, and seamless online shopping experience.',
  },
  {
    id: 11,
    title: 'Loopfeed Media Platform',
    demo: 'https://loopfeed.vercel.app',
    image: '/projects/1.png',
    skills: [
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'postgresql',
        icon: <Postgres />,
      },
      {
        name: 'supabase',
        icon: <Supabase />,
      },
    ],
    made_at: 'Loopfeed',
    year: 2024,
    testimonial:
      'Loopfeed is a social media platform built with TypeScript, Next.js, Redux, Node.js, Express.js, PostgreSQL, and hosted on Vercel and storage for supabase, ensuring a fast, scalable, and seamless online media experience.',
  },
  {
    id: 12,
    year: 2024,
    date: '01-august-2024',
    title: 'SiThuLab POS System',
    made_at: 'SiThuLab',
    testimonial:
      'Developed an ATK POS system using NextJS and ExpressJS with PostgresSQL, allowing employees to manage inventory, sales, purchase, daily income and customer information, daily sales, and reports.',
    skills: [
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'nodejs',
        icon: <Node />,
      },
      {
        name: 'expressjs',
        icon: <Express />,
      },
      {
        name: 'postgresql',
        icon: <Postgres />,
      },
    ],
  },
  {
    id: 13,
    year: 2024,
    date: '01-september-2024',
    title: 'ATK POS System',
    made_at: 'Aung Thu Kha (Asia) Motorcycle Showroom',
    testimonial:
      'Developed an ATK POS system using NextJS and NestJS with PostgresSQL, allowing employees to manage inventory, sales, received and customer information, daily sales, and reports.',
    skills: [
      {
        name: 'Typescript',
        icon: <Typescript />,
      },
      {
        name: 'nextjs',
        icon: <Next />,
      },
      {
        name: 'nestjs',
        icon: <NestJS />,
      },
      {
        name: 'postgresql',
        icon: <Postgres />,
      },
      {
        name: 'Turborepo',
        icon: <TurboRepo />,
      },
    ],
  },
];
export default projects;
