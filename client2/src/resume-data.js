const Resume = {
  profile: {
    name: 'Your Name',
    email: 'email@domain.com',
    phone: '123-456-7890',
    github: 'https://github.com/xxxxxxx',
    linkedin: 'https://linkedin.com/in/xxxxxx',
    address: '123 Main Street',
    website: 'https://website.com',
    city: 'City',
    state: 'CA',
    zip: '00000',
    country: 'USA',
  },
  experience: [{
      company: 'Experience 1',
      city: 'City',
      state: 'CA',
      position: 'Position 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
      isVisible: true,
    },
    {
      company: 'Experience 2',
      city: 'City',
      state: 'CA',
      position: 'Position 2',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
      isVisible: true,
    },
    {
      company: 'Experience 3',
      city: 'City',
      state: 'CA',
      position: 'Position 3',
      dateFrom: '',
      dateTo: '',
      primaryWorkBrief: 'Brief description of your main tasks.',
      impact1: 'Something awesome you did 1.',
      impact2: 'Something awesome you did 2.',
      impact3: '',
      impact4: '',
      isVisible: true,
    },
  ],
  education: [
    {
      school_name: 'School 1',
      school_city: 'Bangalore',
      school_state: 'Karnataka',
      degree_name: 'BE',
      domain_name: 'CSE',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      isVisible: true,
    },
    {
      school_name: 'School 2',
      school_city: 'ROC',
      school_state: 'NY',
      degree_name: 'MS',
      domain_name: 'IST',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      isVisible: true,
    },
  ],
  achievements: [
    {
      title: 'Title 1',
      description: 'Achievements description 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      isVisible: true,
    },
    {
      title: 'Title 2',
      description: 'Achievements description 2',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      isVisible: true,
    },
    {
      title: 'Title 3',
      description: 'Achievements description 3',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      isVisible: true,
    },
  ],
  technicalSkills: [
    {
      category: 'Development Languages',
      keywords: [
        { name: 'JavaScript', level: 3 },
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 4 },
      ],
      isVisible: true,
    },
    {
      category: 'Technologies',
      keywords: [
        { name: 'MongoDB', level: 2 },
        { name: 'Express', level: 4 },
        { name: 'React', level: 4 },
        { name: 'Node.js', level: 4 },
        { name: 'Mocha', level: 4 },
        'Passport',
        { name: 'JWT', level: 5 },
        { name: 'Chai', level: 4 },
        { name: 'Redux', level: 2 },
        { name: 'Git', level: 4 },
        { name: 'GitHub', level: 4 },
        'Gatsby',
      ],
      isVisible: true,
    },
    {
			"category": "Custom Category",
			"keywords": [
				{
					"name": "Item 1",
					"level": 3
				},
				{
					"name": "Item 2",
					"level": 4
				},
				{
					"name": "Item 3",
					"level": 4
				}
			],
			"isVisible": true,
			"columnWidthPercent": "33.33%"
		}
  ],
  projects: [
    {
      project_title: 'Project 1',
      dateFrom: 'XX/XXXX',
      dateTo: '',
      link: 'http://website.com',
      skills_used: ['skill 1', 'skill 2'],
      details: ['Detail 1', 'Detail 2', 'http://projectLink.com'],
      isVisible: true,
    },
    {
      project_title: 'Project 2',
      dateFrom: 'XX/XXXX',
      dateTo: 'XX/XXXX',
      link: 'http://website.com',
      skills_used: ['skill 3', 'skill 4'],
      details: ['Detail 1', 'Detail 2', 'http://projectLink.com'],
      isVisible: true,
    },
  ],
};

export default Resume;
