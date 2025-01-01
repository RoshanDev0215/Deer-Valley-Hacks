import hackathonLogo from './Assets/hackathonLogo.jpg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join Deer Valley Hacks',
  Typed_effect: ['42 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us from January 31st to February 2nd with students from across the nation for 42 hours of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSfKrbJ_55NZAI3LCw4rrLJpONiBQ1hWjgG7HTB1XtJV6p2NoA/viewform?usp=sharing',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://devpost.com'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/dvhacks_/',
  discord: 'https://discord.gg/epW5SjHZ52',
  linkedin: 'https://www.linkedin.com/company/dvhacks2025/',
  twitter: 'https://twitter.com/HacksLimbo',
  devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:deervalleyhacks@gmail.com',
  mail: 'deervalleyhacks@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is DVHacks?',
  LONG_DESCRIPTION:
    'DVHacks is 42 hour long running hackathon will be held on January 31st-February 2nd. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers. Throughout the weekend hackers at DVHacks will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSfKrbJ_55NZAI3LCw4rrLJpONiBQ1hWjgG7HTB1XtJV6p2NoA/viewform?usp=sharing'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: false,
    src: ''
  },
  Terms_of_use: {
    required: false,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 2,
  year: 2025
};

const schedule = [
  {
    day: '31-1-2025',
    events: [
      {
        title: 'Opening Ceremony',
        timings: '1 PM - 2 PM PST',
        link: 'https://google.com'
      },
      {
        title: 'Coding Begins',
        timings: '2 PM PST',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '2-2-2025',
    events: [
      {
        title: 'Coding Stops',
        timings: '7 AM PST',
        link: 'https://google.com'
      },
      {
        title: 'Judging Period and Interviews',
        timings: '10 AM to 2 PM PST',
        link: 'https://google.com'
      },
      {
        title: 'Closing Ceremony',
        timings: '5 PM PST',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Web App with Qoom',
      content: 'Must use qoom in your project to win this category'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Roshan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Maanvik',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Kaustub',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Arnav',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Anish',
      role: 'Marketing',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is an event where "hackers" all over the globe will collaborate on creating a functioning software by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'DVHacks is open to all high school students from all schools.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, feel free to work solo or ask in our Discord Server for a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to join via Devpost and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly via our Discord server, we would happy to help you.'
      },
      {
        label: 'Can i judge?',
        content:
          'Yes we are actively looking for judges, fill the form (in footer section) we will be glad to have you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! All participants will receive swag!'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
