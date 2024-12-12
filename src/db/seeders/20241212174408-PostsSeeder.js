'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'Understanding JavaScript Closures',
        content: 'Closures are a fundamental concept in JavaScript that allow functions to remember the scope in which they were created...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Getting Started with React',
        content: 'React is a popular JavaScript library for building user interfaces. It enables developers to create reusable components...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Exploring Sequelize ORM',
        content: 'Sequelize is a Node.js ORM for relational databases. It supports PostgreSQL, MySQL, SQLite, and more...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mastering Async/Await in JavaScript',
        content: 'Async/Await simplifies handling asynchronous operations in JavaScript. This post explores how to use it effectively...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Introduction to TypeScript',
        content: 'TypeScript is a superset of JavaScript that introduces static typing. Learn the basics of TypeScript in this post...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'CSS Grid vs Flexbox',
        content: 'CSS Grid and Flexbox are powerful layout modules in CSS. Discover the differences and when to use each...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Building RESTful APIs with Express',
        content: 'Express is a minimalistic web framework for Node.js. This post explains how to build RESTful APIs with it...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Understanding Git Branching',
        content: 'Git branching is a core feature of Git. Learn how to create, merge, and manage branches effectively...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Introduction to Docker',
        content: 'Docker simplifies application deployment by using containers. This guide provides an overview of its key concepts...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Setting Up CI/CD with GitHub Actions',
        content: 'GitHub Actions makes automating workflows simple. Learn how to set up a CI/CD pipeline for your project...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Exploring Node.js Streams',
        content: 'Streams provide an efficient way to handle data in Node.js. This post dives into the different types of streams...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'GraphQL vs REST',
        content: 'GraphQL is an alternative to REST for building APIs. Discover the advantages and use cases of each approach...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'JavaScript Design Patterns',
        content: 'Design patterns help solve common software problems. Learn about some key patterns in JavaScript development...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Managing State in React',
        content: 'State management is crucial for React applications. This post explores state solutions like Redux and Context API...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Understanding Event Loop in JavaScript',
        content: 'The event loop is central to JavaScript concurrency. This post explains its role in handling asynchronous code...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Building a Blog with Next.js',
        content: 'Next.js is a React framework for building fast web applications. Learn how to create a simple blog with it...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Debugging in Chrome DevTools',
        content: 'Chrome DevTools is an essential tool for developers. This guide explains how to debug your applications effectively...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Unit Testing with Jest',
        content: 'Jest is a popular JavaScript testing framework. Learn how to write and run unit tests for your code...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Web Accessibility Basics',
        content: 'Web accessibility ensures inclusivity. This post covers basic principles and best practices to follow...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Optimizing Website Performance',
        content: 'Website performance impacts user experience. This guide explores techniques to optimize speed and efficiency...',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
