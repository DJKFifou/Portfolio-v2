export const projects: ProjectType[] = [
	{
		title: "Let's Summon Demons",
		subtitle: 'Jeu de société en ligne multijoueur',
		description:
			"Let's Summon Demons est un jeu de société en ligne multijoueur où les joueurs doivent invoquer des démons pour gagner la partie. Le jeu se déroule dans un univers rétro satanique et propose des mécaniques de stratégie et de coopération.",
		images: {
			home: {
				src: '/src/lib/assets/images/LSD/LSD_Home.png',
				alt: "Let's Summon Demons Home"
			},
			moodboard: {
				src: '/src/lib/assets/images/LSD/LSD_Moodboard.png',
				alt: "Let's Summon Demons Moodboard"
			},
			gallery: [
				{
					src: '/src/lib/assets/images/LSD/LSD_Home.png',
					alt: "Let's Summon Demons Gallery 1"
				},
				{
					src: '/src/lib/assets/images/LSD/LSD_Moodboard.png',
					alt: "Let's Summon Demons Moodboard"
				}
			]
		},
		technologies: [
			{
				title: 'React',
				icon: '/src/lib/assets/icons/react.svg'
			},
			{
				title: 'TypeScript',
				icon: '/src/lib/assets/icons/typescript.svg'
			},
			{
				title: 'Socket.io',
				icon: '/src/lib/assets/icons/socketio.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Let's Summon Demons est le premier jeu que j'ai commencé à développer dans mon temps libre. <br><br> Il est basé sur un jeu de société existant que j'ai adapté pour le web. <br><br> Nous sommes au total 4 amis à avoir travaillé sur le projet, 3 développeurs et une UI/UX. <br><br> Pour ce qui est des développeurs, l'un s'est occupé de la mise en place des technologies et de l'architecture du projet, et deux autres (dont moi) se sont occupés du développement des fonctionnalités de toutes les règles du jeu (pouvoirs des cartes, mécaniques de jeu, etc.). <br><br> Le jeu n'est pas encore terminé car demande beaucoup de temps et d'investissement mais espérons pouvoir le dévoiler au grand jour prochainement.",
		tags: ['Jeu', 'Multi', 'Site web'],
		slug: 'lets-summon-demons'
	},
	{
		title: 'Marin French Cheese',
		subtitle: 'Subtitle for Marin French Cheese',
		description: 'Description for Marin French Cheese',
		images: {
			moodboard: {
				src: '/src/lib/assets/images/MFC/MFC_Moodboard.png',
				alt: 'Marin French Cheese Moodboard'
			}
		},
		technologies: [
			{
				title: 'Shopify',
				icon: '/src/lib/assets/icons/shopify.svg'
			},
			{
				title: 'TypeScript',
				icon: '/src/lib/assets/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Marin French cheese est un site e-commerce développé pour un client. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème Shopify personnalisé, développé en Liquid et Schema .',
		tags: ['E-commerce', 'Site web', 'Shopify'],
		slug: 'marin-french-cheese',
		external_link: 'https://marinfrenchcheese.com'
	},
	{
		title: 'White-Toque',
		subtitle: 'Subtitle for White-Toque',
		description: 'Description for White-Toque',
		images: {
			moodboard: {
				src: '/src/lib/assets/images/White-Toque/White-Toque_Moodboard.png',
				alt: 'White-Toque Moodboard'
			}
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/src/lib/assets/icons/php.svg'
			},
			{
				title: 'TypeScript',
				icon: '/src/lib/assets/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'White-Toque est un site web développé pour un client. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'white-toque',
		external_link: 'https://www.whitetoque.com'
	},
	{
		title: 'Taillan-Medoc',
		subtitle: 'Subtitle for Taillan-Medoc',
		description: 'Description for Taillan-Medoc',
		images: {
			home: {
				src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Home.png',
				alt: 'Taillan-Medoc Home'
			}
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/src/lib/assets/icons/php.svg'
			},
			{
				title: 'TypeScript',
				icon: '/src/lib/assets/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Taillan-Medoc est un site web développé pour un client. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'taillan-medoc',
		external_link: 'https://www.taillan-medoc.fr'
	},
	{
		title: 'Geoquizz',
		subtitle: 'Subtitle for Geoquizz',
		description: 'Description for Geoquizz',
		images: {
			home: {
				src: '/src/lib/assets/images/Geoquizz/Geoquizz_Home.png',
				alt: 'Geoquizz Home'
			}
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'TypeScript',
				icon: '/src/lib/assets/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Geoquizz est la 2e version d'un projet que j'avais développé en Ruby et JS il y a plusieurs années, que j'ai largement perfectionné en passant le tout sur Sveltekit et en rajoutant d'innombrables fonctionnalités",
		tags: ['Jeu', 'Solo', 'Site web'],
		slug: 'geoquizz',
		external_link: 'https://geoquizz.maximelust.fr'
	}
];

export interface ProjectType {
	title: string;
	subtitle: string;
	description: string;
	images: {
		home?: {
			src: string;
			alt: string;
		};
		moodboard?: {
			src: string;
			alt: string;
		};
		gallery?: {
			src: string;
			alt: string;
		}[];
	};
	technologies: {
		title: string;
		icon: string;
	}[];
	context: string;
	tags?: string[];
	slug: string;
	external_link?: string;
}
