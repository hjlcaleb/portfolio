// File system data model
export const fileSystem = {
  'README.md': {
    type: 'markdown',
    hero: {
      greeting: "Hi! I'm Caleb.",
      identities: ['Software Engineer', 'CV Researcher', 'Seahawks Fan', 'F1 (LeClerc) Enthusiast', 'Performative Hiker'],
      photo: '/delcampo.jpg',
      bio: [
        'Incoming Software Engineer Intern @ Chewy',
        'Research Assistant @ Makeability Lab',
        'Teaching Assistant @ Paul G. Allen School of Computer Science & Engineering',
        'Interested in full-stack development, ML, and human-computer interaction.'
      ]
    },
    content: ``
  ,
  sections: [
    {
      title: 'Education',
      cards: [
        {
          icon: '/experienceIcons/paulgallenschool.png',
          iconType: 'image',
          title: 'University of Washington | Expected June 2027',
          subtitle: 'B.S. Computer Science · Seattle, WA',
          description: ['Concentrations in ML & Data Science. GPA: 3.82/4.00.', 'Key Coursework: Machine Learning, Systems Engineering, Data Structures & Parallelism, Algorithms, Hardware/Software Interface.'],
          techStack: '',
          links: []
        }
      ]
    },
    {
      title: 'Work Experience',
      cards: [
        {
          icon: '/experienceIcons/chewy.png',
          iconType: 'image',
          title: 'Incoming Software Engineer Intern | June 2026 - December 2026',
          subtitle: 'Chewy · Bellevue, WA',
          description: ['Incoming Summer + Fall 2026 - Applied AI/ML for internal & customer-facing tools across Chewy’s ecosystem.'],
          links: []
        },
        {
          icon: '/experienceIcons/makeabilitylab.png',
          iconType: 'image',
          title: 'Researcher | June 2025 - Present',
          subtitle: 'Makeability Lab · Seattle, WA',
          description: ['PreviewAR: transforming 2D products into scaled 3D models for AR visualization; submitting to UIST 2026 🙏.', 
            'WatchAR: real-time AR object detection and high contrast segmentation for televised sports games, improving accessibility for visually impaired fans; also submitting to UIST 2026 🙏🙏!'],
          techStack: 'Python, PyTorch, Selenium, OpenAI GPT-5, Grounded SAM, OpenCV, Hunyuan 3D-2',
          links: []
        },
        {
          icon: '/experienceIcons/mastertech.png',
          iconType: 'image',
          title: 'Software Engineer Intern | July 2025 - September 2025',
          subtitle: 'Mastertech.ai · Kirkland, WA',
          description: ['Full-stack engineering for 100+ technicians and improving LLM user prompt labeling accuracy with evals.'],
          techStack: 'TypeScript, Redux, REST APIs, DynamoDB, Python, OpenAI API',
          links: []
        },
        {
          icon: '/experienceIcons/uw-medicine.png',
          iconType: 'image',
          title: 'Researcher | June 2024 - September 2024',
          subtitle: 'ONIX Radiation Oncology Lab, UW Medicine · Seattle, WA',
          description: ['Trained a Hugging Face transformer model using PyTorch on 95,000+ radiation oncology research abstracts to improve research topic classification and identify NCI funding trends.'],
          techStack: 'Python, PyTorch, Hugging Face Transformers, Pandas, Jupyter Lab',
          links: []
        },
        {
          icon: '/experienceIcons/codeninjas.png',
          iconType: 'image',
          title: 'Instructor | June 2023 - July 2024',
          subtitle: 'Code Ninjas Newcastle · Newcastle, WA',
          description: ['Mentored the next generation of programmers.'],
          techStack: 'Lua, C#, JavaScript, Unity, Roblox Studio',
          links: []
        },
        {
          icon: '/experienceIcons/usasoccerfederation.png',
          iconType: 'image',
          title: 'Referee | March 2021 - September 2022',
          subtitle: 'USA Soccer Federation · Tukwila, WA',
          description: ['Youth soccer games in the greater Seattle area.'],
          techStack: 'my whistle and yellow cards (occasionally)',
          links: []
        }
      ]
    },
    {
      title: 'Skills',
      cards: [
        {
          icon: '',
          iconType: 'none',
          title: 'Languages',
          subtitle: '',
          description: '',
          devicons: [
            { cls: 'devicon-java-plain colored', label: 'Java' },
            { cls: 'devicon-python-plain colored', label: 'Python' },
            { cls: 'devicon-javascript-plain colored', label: 'JavaScript' },
            { cls: 'devicon-typescript-plain colored', label: 'TypeScript' },
            { cls: 'devicon-html5-plain colored', label: 'HTML5' },
            { cls: 'devicon-css3-plain colored', label: 'CSS3' },
            { cls: 'devicon-c-plain colored', label: 'C' },
            { cls: 'devicon-cplusplus-plain colored', label: 'C++' },
          ],
          techStack: '',
          links: []
        },
        {
          icon: '',
          iconType: 'none',
          title: 'Frameworks & Libraries',
          subtitle: '',
          description: '',
          devicons: [
            { cls: 'devicon-react-original colored', label: 'React' },
            { cls: 'devicon-nodejs-plain colored', label: 'Node.js' },
            { cls: 'devicon-nextjs-plain colored', label: 'Next.js' },
            { cls: 'devicon-flask-original', label: 'Flask' },
            { cls: 'devicon-django-plain colored', label: 'Django' },
            { cls: 'devicon-tailwindcss-plain colored', label: 'Tailwind' },
            { cls: 'devicon-scikitlearn-plain colored', label: 'scikit-learn' },
          ],
          techStack: '',
          links: []
        },
        {
          icon: '',
          iconType: 'none',
          title: 'Developer Tools',
          subtitle: '',
          description: '',
          devicons: [
            { cls: 'devicon-linux-plain colored', label: 'Linux' },
            { cls: 'devicon-docker-plain colored', label: 'Docker' },
            { cls: 'devicon-postman-plain colored', label: 'Postman' },
            { cls: 'devicon-selenium-original colored', label: 'Selenium' },
            { cls: 'devicon-firebase-plain colored', label: 'Firebase' },
            { cls: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
            { cls: 'devicon-mysql-plain colored', label: 'MySQL' },
            { cls: 'devicon-figma-plain colored', label: 'Figma' },
            { cls: 'devicon-vercel-plain', label: 'Vercel' },
          ],
          techStack: '',
          links: []
        },
        {
          icon: '',
          iconType: 'none',
          title: 'Currently Learning',
          subtitle: '',
          description: '',
          devicons: [
            { cls: 'devicon-r-plain colored', label: 'R' },
            { cls: 'devicon-pytorch-plain colored', label: 'PyTorch' },
            { cls: 'devicon-tensorflow-original colored', label: 'TensorFlow' },
            { cls: 'devicon-angularjs-plain colored', label: 'Angular' },
            { cls: 'devicon-amazonwebservices-plain-wordmark colored', label: 'AWS' },
            { cls: 'devicon-kubernetes-plain colored', label: 'Kubernetes' },
            { cls: 'devicon-csharp-plain colored', label: 'C#' },
          ],
          techStack: '',
          links: []
        }
      ]
    },
    {
      title: 'Projects',
      cards: [
        {
          icon: '/experienceIcons/codestepbystep.png',
          iconType: 'image',
          title: 'CodeStepByStep.com',
          subtitle: '',
          description: ['Devised and scaled a GPT-powered teaching assistant to offer coding support for 95,000+ students and teachers nationwide.', 'Programmed a TypeScript throttle with countdown to prevent spamming and limit submissions for 1,000+ practice problems.'],
          techStack: 'TypeScript, MySQL, JavaEE, LangChain4j, ChromaDB',
          links: [{ label: 'Visit Site', url: 'https://www.codestepbystep.com' }]
        },
        {
          icon: '/experienceIcons/CALEB.png',
          iconType: 'image',
          title: 'CALEB - Outreach Automation Bot',
          subtitle: '',
          description: ['Authored a full-stack outreach automation platform (React website + Flask backend) used by 4-6 officers to send internal emails to a 40+ student consulting organization and source clients, reducing manual email time by 97.2%.', 'Implemented Gmail OAuth, secure contact directory, and Celery-based scheduled email queue enabling campaigns across 3,900+ contacts.'],
          techStack: 'React.js, Flask, Docker, Celery, RabbitMQ/Redis, PostgreSQL',
          links: []
        },
        {
          icon: '/experienceIcons/superbowl.mov',
          iconType: 'video',
          title: 'NFL Team Score Prediction Model',
          subtitle: '',
          description: ['Architected a Python data pipeline using nflreadpy and Polars to ingest 11 seasons of play-by-play data and compute 9 team-level features.', "Trained and optimized a scikit-learn model, achieving an RMSE of 1.92 points on scoring averages in the season's last 2 weeks.", "Go hawks."],
          techStack: 'Python, Polars, scikit-learn, Pandas, NumPy, Jupyter Lab',
          links: [{ label: 'View on GitHub', url: 'https://github.com/hjlcaleb' }]
        }
      ]
    },
    {
      title: 'Leadership',
      cards: [
        {
          icon: '/experienceIcons/paulgallenschool.png',
          iconType: 'image',
          title: 'Undergraduate Teaching Assistant | January 2026 - Present',
          subtitle: 'Paul G. Allen School of Computer Science and Engineering · Seattle, WA',
          description: ['Support 300+ students in introductory Java course series; hold weekly labs and teach core programming concepts.'],
          techStack: '',
          links: []
        },
        {
          icon: '/experienceIcons/uwca.png',
          iconType: 'image',
          title: 'Technical Director & Senior Consulting Analyst | March 2025 - Present',
          subtitle: 'University of Washington Consulting Association (UWCA) · Seattle, WA',
          description: ['Built CALEB for a 10-member exec team.', 'Redesigned the UWCA website; generated 176% increase in unique visits over first 30 days.'],
          techStack: '',
          links: []
        }
      ]
    }
  ]
  },
};

export const fileSystemTree = [
  { name: 'README.md', type: 'file', path: 'README.md' }
];

export function getFileContent(path) {
  return fileSystem[path] || null;
}
