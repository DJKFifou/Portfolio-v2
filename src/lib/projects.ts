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
					src: '/src/lib/assets/images/LSD/LSD_Lobby.png',
					alt: "Let's Summon Demons Lobby"
				},
				{
					src: '/src/lib/assets/images/LSD/LSD_LobbyCreated.png',
					alt: "Let's Summon Demons Lobby created"
				},
				{
					src: '/src/lib/assets/images/LSD/LSD_LobbyJoined.png',
					alt: "Let's Summon Demons Lobby joined"
				},
				{
					src: '/src/lib/assets/images/LSD/LSD_Gameplay.png',
					alt: "Let's Summon Demons Gameplay"
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
			home: {
				src: '/src/lib/assets/images/MFC/MFC_Home.png',
				alt: 'Marin French Cheese Home'
			},
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
			home: {
				src: '/src/lib/assets/images/White-Toque/White-Toque_Home.png',
				alt: 'White-Toque Home'
			},
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
	},
	{
		title: 'Primizie',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Primizie/Primizie_Home.png',
				alt: 'Primizie Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Primizie/Primizie_Moodboard.png',
				alt: 'Primizie Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Primizie/Primizie_Presentation.png',
					alt: 'Primizie Presentation'
				},
				{
					src: '/src/lib/assets/images/Primizie/Primizie_Slider.png',
					alt: 'Primizie Slider'
				},
				{
					src: '/src/lib/assets/images/Primizie/Primizie_Cards.png',
					alt: 'Primizie Cards'
				},
				{
					src: '/src/lib/assets/images/Primizie/Primizie_Footer.png',
					alt: 'Primizie Footer'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'primizie',
		external_link: ''
	},
	{
		title: 'Xplora App',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Xplora/App/Xplora_App_Home.png',
				alt: 'Xplora App Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Xplora/App/Xplora_App_Chat.png',
					alt: 'Xplora App chat'
				},
				{
					src: '/src/lib/assets/images/Xplora/App/Xplora_App_Live.png',
					alt: 'Xplora App live'
				},
				{
					src: '/src/lib/assets/images/Xplora/App/Xplora_App_Students.png',
					alt: 'Xplora App students'
				},
				{
					src: '/src/lib/assets/images/Xplora/App/Xplora_App_Assignments.png',
					alt: 'Xplora App assignments'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'xplora-app',
		external_link: ''
	},
	{
		title: 'Xplora Website',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Xplora/Website/Xplora_Website_Home.png',
				alt: 'Xplora Website Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Xplora/Website/Xplora_Website_Programs.png',
					alt: 'Xplora Website Programs'
				},
				{
					src: '/src/lib/assets/images/Xplora/Website/Xplora_Website_ProgramsGrid.png',
					alt: 'Xplora Website ProgramsGrid'
				},
				{
					src: '/src/lib/assets/images/Xplora/Website/Xplora_Website_Destinations.png',
					alt: 'Xplora Website Destinations'
				},
				{
					src: '/src/lib/assets/images/Xplora/Website/Xplora_Website_Contact.png',
					alt: 'Xplora Website Contact'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'xplora-website',
		external_link: ''
	},
	{
		title: 'Jaya',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Jaya/Jaya_Home.png',
				alt: 'Jaya Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Jaya/Jaya_Presentation.png',
					alt: 'Jaya Presentation'
				},
				{
					src: '/src/lib/assets/images/Jaya/Jaya_Box.png',
					alt: 'Jaya Box'
				},
				{
					src: '/src/lib/assets/images/Jaya/Jaya_Shopping.png',
					alt: 'Jaya Shopping'
				},
				{
					src: '/src/lib/assets/images/Jaya/Jaya_Footer.png',
					alt: 'Jaya Footer'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'jaya',
		external_link: ''
	},
	{
		title: 'Lagrange',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Lagrange/Lagrange_Home.png',
				alt: 'Lagrange Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Lagrange/Lagrange_Header.png',
					alt: 'Lagrange Header'
				},
				{
					src: '/src/lib/assets/images/Lagrange/Lagrange_Gallery.png',
					alt: 'Lagrange Gallery'
				},
				{
					src: '/src/lib/assets/images/Lagrange/Lagrange_Slider.png',
					alt: 'Lagrange Slider'
				},
				{
					src: '/src/lib/assets/images/Lagrange/Lagrange_Collection.png',
					alt: 'Lagrange Collection'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'lagrange',
		external_link: ''
	},
	{
		title: 'Tonnellerie Bel Air',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Home.png',
				alt: 'Tonnellerie Bel Air Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Header.png',
					alt: 'Tonnellerie Bel Air Header'
				},
				{
					src: '/src/lib/assets/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Presentation.png',
					alt: 'Tonnellerie Bel Air Presentation'
				},
				{
					src: '/src/lib/assets/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Gamme.png',
					alt: 'Tonnellerie Bel Air Gamme'
				},
				{
					src: '/src/lib/assets/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Handmade.png',
					alt: 'Tonnellerie Bel Air Handmade'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'tonnellerie-bel-air',
		external_link: ''
	},
	{
		title: 'Hatchr',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Hatchr/Hatchr_Home.png',
				alt: 'Hatchr Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Hatchr/Hatchr_Gallery_1.png',
					alt: 'Hatchr Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'hatchr',
		external_link: ''
	},
	{
		title: 'Jigogne',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Jigogne/Jigogne_Home.png',
				alt: 'Jigogne Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Jigogne/Jigogne_Gallery_1.png',
					alt: 'Jigogne Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'jigogne',
		external_link: ''
	},
	{
		title: 'Tarot Africain',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Tarot-Africain/Tarot-Africain_Home.png',
				alt: 'Tarot Africain Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Tarot-Africain/Tarot-Africain_Lobby.png',
					alt: 'Tarot Africain Lobby'
				},
				{
					src: '/src/lib/assets/images/Tarot-Africain/Tarot-Africain_Gameplay.png',
					alt: 'Tarot Africain Gameplay'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'tarot-africain',
		external_link: ''
	},
	{
		title: 'La Burie',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/LaBurie/LaBurie_Home.png',
				alt: 'La Burie Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/LaBurie/LaBurie_About.png',
					alt: 'La Burie About'
				},
				{
					src: '/src/lib/assets/images/LaBurie/LaBurie_Activities.png',
					alt: 'La Burie Activities'
				},
				{
					src: '/src/lib/assets/images/LaBurie/LaBurie_Spaces.png',
					alt: 'La Burie Spaces'
				},
				{
					src: '/src/lib/assets/images/LaBurie/LaBurie_Contact.png',
					alt: 'La Burie Contact'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'laburie',
		external_link: ''
	},
	{
		title: 'Metal Access',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Metal Access/Metal_Access_Home.png',
				alt: 'Metal Access Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Metal Access/Metal_Access_Moodboard.png',
				alt: 'Metal Access Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Metal Access/Metal_Access_Gallery_1.png',
					alt: 'Metal Access Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'metal-access',
		external_link: ''
	},
	{
		title: 'FixMyStreet',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/FixMyStreet/FixMyStreet_Home.png',
				alt: 'FixMyStreet Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/FixMyStreet/FixMyStreet_Moodboard.png',
				alt: 'FixMyStreet Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/FixMyStreet/FixMyStreet_Gallery_1.png',
					alt: 'FixMyStreet Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'fixmystreet',
		external_link: ''
	},
	{
		title: 'Nautilus',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Nautilus/Nautilus_Home.png',
				alt: 'Nautilus Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Nautilus/Nautilus_Moodboard.png',
				alt: 'Nautilus Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Nautilus/Nautilus_Gallery_1.png',
					alt: 'Nautilus Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'nautilus',
		external_link: ''
	},
	{
		title: 'Egol',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Egol/Egol_Home.png',
				alt: 'Egol Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Egol/Egol_Moodboard.png',
				alt: 'Egol Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Egol/Egol_Gallery_1.png',
					alt: 'Egol Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'egol',
		external_link: ''
	},
	{
		title: 'Porsche',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Porsche/Porsche_Home.png',
				alt: 'Porsche Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Porsche/Porsche_Moodboard.png',
				alt: 'Porsche Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Porsche/Porsche_Gallery_1.png',
					alt: 'Porsche Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'porsche',
		external_link: ''
	},
	{
		title: 'Animaux du futur',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Animaux du futur/Animaux_du_futur_Home.png',
				alt: 'Animaux du futur Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Animaux du futur/Animaux_du_futur_Moodboard.png',
				alt: 'Animaux du futur Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Animaux du futur/Animaux_du_futur_Gallery_1.png',
					alt: 'Animaux du futur Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'animaux-du-futur',
		external_link: ''
	},
	{
		title: 'Nuit du Musba',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Nuit du Musba/Nuit_du_Musba_Home.png',
				alt: 'Nuit du Musba Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Nuit du Musba/Nuit_du_Musba_Moodboard.png',
				alt: 'Nuit du Musba Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Nuit du Musba/Nuit_du_Musba_Gallery_1.png',
					alt: 'Nuit du Musba Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'nuit-du-musba',
		external_link: ''
	},
	{
		title: 'The Story of Tetyana',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/The Story of Tetyana/The Story of Tetyana_Home.png',
				alt: 'The Story of Tetyana Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/The Story of Tetyana/The Story of Tetyana_Moodboard.png',
				alt: 'The Story of Tetyana Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/The Story of Tetyana/The Story of Tetyana_Gallery_1.png',
					alt: 'The Story of Tetyana Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'the-story-of-tetyana',
		external_link: ''
	},
	{
		title: 'Amedia',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Amedia/Amedia_Home.png',
				alt: 'Amedia Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Amedia/Amedia_Moodboard.png',
				alt: 'Amedia Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Amedia/Amedia_Gallery_1.png',
					alt: 'Amedia Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'amedia',
		external_link: ''
	},
	{
		title: 'Spooon',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Spooon/Spooon_Home.png',
				alt: 'Spooon Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/Spooon/Spooon_Moodboard.png',
				alt: 'Spooon Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Spooon/Spooon_Gallery_1.png',
					alt: 'Spooon Gallery 1'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'spooon',
		external_link: ''
	},
	{
		title: 'Too Well Stolen',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Too-Well-Stolen/Too-Well-Stolen_Home.png',
				alt: 'Too Well Stolen Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Too-Well-Stolen/Too-Well-Stolen_Start.png',
					alt: 'Too Well Stolen Start'
				},
				{
					src: '/src/lib/assets/images/Too-Well-Stolen/Too-Well-Stolen_Painting.png',
					alt: 'Too Well Stolen Painting'
				},
				{
					src: '/src/lib/assets/images/Too-Well-Stolen/Too-Well-Stolen_Suspect.png',
					alt: 'Too Well Stolen Suspect'
				},
				{
					src: '/src/lib/assets/images/Too-Well-Stolen/Too-Well-Stolen_Interrogated.png',
					alt: 'Too Well Stolen Interrogated'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'too-well-stolen',
		external_link: ''
	},
	{
		title: 'Bovélo',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/Bovelo/Bovelo_Home.png',
				alt: 'Bovélo Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Bovelo/Bovelo_Footer.png',
					alt: 'Bovélo Footer'
				},
				{
					src: '/src/lib/assets/images/Bovelo/Bovelo_App_Home.png',
					alt: 'Bovélo App Home'
				},
				{
					src: '/src/lib/assets/images/Bovelo/Bovelo_App_Station.png',
					alt: 'Bovélo App Station'
				},
				{
					src: '/src/lib/assets/images/Bovelo/Bovelo_App_Bike.png',
					alt: 'Bovélo App Bike'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'bovelo',
		external_link: ''
	},
	{
		title: 'CAPC',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/CAPC/CAPC_Home.png',
				alt: 'CAPC Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/CAPC/CAPC_Moodboard.png',
				alt: 'CAPC Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/CAPC/CAPC_Evenement.png',
					alt: 'CAPC Evenement'
				},
				{
					src: '/src/lib/assets/images/CAPC/CAPC_ComingSoon.png',
					alt: 'CAPC Coming Soon'
				},
				{
					src: '/src/lib/assets/images/CAPC/CAPC_Exposition.png',
					alt: 'CAPC Exposition'
				},
				{
					src: '/src/lib/assets/images/CAPC/CAPC_Footer.png',
					alt: 'CAPC Footer'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'capc',
		external_link: ''
	},
	{
		title: 'The Mornful Painter',
		subtitle: '',
		description: '',
		images: {
			home: {
				src: '/src/lib/assets/images/The-Mornful-Painter/The-Mornful-Painter_Home.png',
				alt: 'The Mornful Painter Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/The-Mornful-Painter/The-Mornful-Painter_Gameplay.png',
					alt: 'The Mornful Painter Gameplay'
				},
				{
					src: '/src/lib/assets/images/The-Mornful-Painter/The-Mornful-Painter_Ladder.png',
					alt: 'The Mornful Painter Ladder'
				},
				{
					src: '/src/lib/assets/images/The-Mornful-Painter/The-Mornful-Painter_Painting.png',
					alt: 'The Mornful Painter Painting'
				},
				{
					src: '/src/lib/assets/images/The-Mornful-Painter/The-Mornful-Painter_Mirror.png',
					alt: 'The Mornful Painter Mirror'
				}
			]
		},
		technologies: [
			{
				title: '',
				icon: '/src/lib/assets/icons/.svg'
			}
		],
		context: '',
		tags: ['', '', ''],
		slug: 'the-mornful-painter',
		external_link: ''
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
