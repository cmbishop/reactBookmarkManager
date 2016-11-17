import React, { Component } from 'react';
import Layout from "./components/Layout";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      header_title: 'React class weekly links',
      posts: [
        {
          subject: 'Week One',
          editing: false,
          links: [
            {
              link_text: 'JavaScript Assessment',
              link: 'https://github.com/rmurphey/js-assessment'
            },
            {
              link_text: 'DevDocs, offline version',
              link: 'http://devdocs.io/offline'
            },
            {
              link_text: 'FunFunFunctions: Higher Order Functions',
              link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'
            },
            {
              link_text: 'FunFunFunctions: ES6/2015 var, let, and const',
              link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8'
            },
            {
              link_text: 'FunFunFunctions: ES6/2015 arrow functions',
              link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I'
            },
            {
              link_text: 'Industry Talk: Women in tech',
              link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02'
            },
            {
              link_text: "JavaScript': Understanding the Weird Parts",
              link: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII'
            },
            {
              link_text: 'ES6 at a glance',
              link: 'http://es6-features.org/'
            },
            {
              link_text: 'Essential ES6 / ES2015 JavaScript',
              link: 'https://www.youtube.com/watch?v=CozSF5abcTA'
            },
            {
              link_text: 'Javascript ES6 Cheatsheet - the best of JS ES6',
              link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4'
            }
          ]
        },
        {
          subject: 'Week Two',
          editing: false,
          links: [
            {
              link_text: 'AirBnb Styleguide',
              link: 'https://github.com/airbnb/javascript'
            },
            {
              link_text: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
              link: 'https://egghead.io/courses/learn-es6-ecmascript-2015'
            },
            {
              link_text: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
              link: 'https://frontendmasters.com/courses/computer-science/'
            },
            {
              link_text: 'Git Intro',
              link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/'
            },
            {
              link_text: 'Sublime Text Power User Book by Wes Bos',
              link: 'https://sublimetextbook.com/'
            },
            {
              link_text: 'Atom keyboard shortcuts',
              link: 'http://www.ft.com'
            },
          ]
        },
        {
          subject: 'Week Three',
          editing: false,
          links: [
            {
              link_text: 'Thinking in React',
              link: 'https://facebook.github.io/react/docs/thinking-in-react.html'
            },
            {
              link_text: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
              link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be'
            },
            {
              link_text: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
              link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ'
            },
            {
              link_text: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
              link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s'
            },
            {
              link_text: 'React on ES6+',
              link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus'
            },
            {
              link_text: 'Learn ES2015 · Babel',
              link: 'https://babeljs.io/docs/learn-es2015/'
            },
            {
              link_text: 'Our First 50,000 Stars - React Blog (History of React)',
              link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html'
            },
            {
              link_text: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
              link: 'https://youtu.be/DN4yLZB1vUQ'
            },
            {
              link_text: 'React Developer Tools (for Chrome)',
              link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'
            }
          ]
        },
        {
          subject: 'Week Four',
          editing: false,
          links: [
            {
              link_text: 'Forms: Controlled and Uncontrolled Inputs',
              link: 'https://facebook.github.io/react/docs/forms.html#uncontrolled-components'
            },
            {
              link_text: 'React For Everyone #13 - Controlled Inputs',
              link: 'https://www.youtube.com/watch?v=BvtQMxekmH0'
            },

          ]
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Layout pageData={this.state} />
      </div>
    );
  }
}

export default App;
