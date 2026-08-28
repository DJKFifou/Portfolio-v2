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
			"Let's Summon Demons est le premier jeu que j'ai commencé à développer dans mon temps libre. <br><br> Il est basé sur un jeu de société existant que j'ai adapté pour le web. <br><br> Nous sommes au total 4 ami·es à avoir travaillé sur le projet, 3 développeurs et une UI/UX. <br><br> Pour ce qui est des développeurs, l'un s'est occupé de la mise en place des technologies et de l'architecture du projet, et deux autres (dont moi) se sont occupés du développement des fonctionnalités de toutes les règles du jeu (pouvoirs des cartes, mécaniques de jeu, etc.). <br><br> Le jeu n'est pas encore terminé car demande beaucoup de temps et d'investissement mais espérons pouvoir le dévoiler au grand jour prochainement.",
		tags: ['Jeu', 'Multi', 'Site web'],
		slug: 'lets-summon-demons'
	},
	{
		title: 'Marin French Cheese',
		subtitle: 'E-commerce de ventes de fromages',
		description:
			"Marin French Cheese est un site e-commerce d'une fromagerie située en Californie aux États-Unis.",
		images: {
			home: {
				src: '/src/lib/assets/images/MFC/MFC_Home.png',
				alt: 'Marin French Cheese Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/MFC/MFC_Moodboard.png',
				alt: 'Marin French Cheese Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/MFC/MFC_Craft.png',
					alt: 'Marin French Cheese Craft'
				},
				{
					src: '/src/lib/assets/images/MFC/MFC_Slider.png',
					alt: 'Marin French Cheese Slider'
				},
				{
					src: '/src/lib/assets/images/MFC/MFC_VisitUs.png',
					alt: 'Marin French Cheese Visit Us'
				},
				{
					src: '/src/lib/assets/images/MFC/MFC_SingleProduct.png',
					alt: 'Marin French Cheese Single Product'
				}
			]
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
			'Marin French cheese est un site e-commerce développé pour un·e client·e. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème Shopify personnalisé, développé en Liquid et Schema.',
		tags: ['E-commerce', 'Site web', 'Shopify'],
		slug: 'marin-french-cheese',
		external_link: 'https://marinfrenchcheese.com'
	},
	{
		title: 'White-Toque',
		subtitle: 'Site de présentation de produits de restauration',
		description:
			"White-Toque est un site de présentation de produits européens de restauration déstiné à l'importation aux États-Unis en B2B.",
		images: {
			home: {
				src: '/src/lib/assets/images/White-Toque/White-Toque_Home.png',
				alt: 'White-Toque Home'
			},
			moodboard: {
				src: '/src/lib/assets/images/White-Toque/White-Toque_Moodboard.png',
				alt: 'White-Toque Moodboard'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/White-Toque/White-Toque_Products.png',
					alt: 'White-Toque Products'
				},
				{
					src: '/src/lib/assets/images/White-Toque/White-Toque_ProductPage.png',
					alt: 'White-Toque Product Page'
				},
				{
					src: '/src/lib/assets/images/White-Toque/White-Toque_Slider.png',
					alt: 'White-Toque Slider'
				},
				{
					src: '/src/lib/assets/images/White-Toque/White-Toque_Footer.png',
					alt: 'White-Toque Footer'
				}
			]
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
			'White-Toque est un site web développé pour un·e client·e. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'white-toque',
		external_link: 'https://www.whitetoque.com'
	},
	{
		title: 'Taillan-Medoc',
		subtitle: 'Site communal du Taillan-Médoc',
		description:
			"Le site de la commune du Taillan-Medoc permet aux habitant·es de la commune d'avoir accès à toutes les informations concernant la commune, ses services et ses actualités.",
		images: {
			home: {
				src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Home.png',
				alt: 'Taillan-Medoc Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Header.png',
					alt: 'Taillan-Medoc Header'
				},
				{
					src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Sliders.png',
					alt: 'Taillan-Medoc Sliders'
				},
				{
					src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Article.png',
					alt: 'Taillan-Medoc Article'
				},
				{
					src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Footer.png',
					alt: 'Taillan-Medoc Footer'
				}
			]
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
			'Taillan-Medoc est un site web développé pour la mairie du Taillan-Medoc. Nous sommes 2 développeur·euses à avoir travaillé sur le projet, qui est un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'taillan-medoc',
		external_link: 'https://www.taillan-medoc.fr'
	},
	{
		title: 'Geoquizz',
		subtitle: 'Jeu de géographie en ligne solo',
		description:
			"Geoquizz est un site de quizz de géographie, où l'on peut tester ses connaissances sur de nombreux sujets tels que les pays, les drapeaux, les capitales et bien plus encore.",
		images: {
			home: {
				src: '/src/lib/assets/images/Geoquizz/Geoquizz_Home.png',
				alt: 'Geoquizz Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Geoquizz/Geoquizz_Quizz.png',
					alt: 'Geoquizz Quizz'
				},
				{
					src: '/src/lib/assets/images/Geoquizz/Geoquizz_Lists_Flags.png',
					alt: 'Geoquizz Lists Flags'
				},
				{
					src: '/src/lib/assets/images/Geoquizz/Geoquizz_Lists_States.png',
					alt: 'Geoquizz Lists States'
				},
				{
					src: '/src/lib/assets/images/Geoquizz/Geoquizz_Lists_Countries.png',
					alt: 'Geoquizz Lists Countries'
				}
			]
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
			"Geoquizz est la 2e version d'un projet que j'avais développé en Ruby et en Javascript il y a plusieurs années, que j'ai largement perfectionné en passant le tout sur Sveltekit et en rajoutant d'innombrables fonctionnalités",
		tags: ['Jeu', 'Solo', 'Site web'],
		slug: 'geoquizz',
		external_link: 'https://geoquizz.maximelust.fr'
	},
	{
		title: 'Primizie',
		subtitle: 'Site de mise en relation de fournisseur·euses et de restaurateur·rices',
		description:
			'Primizie est un site de mise en relation entre entreprises indépendantes dans le domaine de la restauration, afin de retrouver des aliments haut de gamme aux États-Unis.',
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
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Primizie est un site web développé pour un·e client·e. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé basculé en headless avec SvelteKit depuis une API sur mesure qui communique avec le backend en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'primizie',
		external_link: ''
	},
	{
		title: 'Xplora App',
		subtitle: 'Web application pour étudiant·es, professeur·es et professionnel·les',
		description:
			"Primizie est une application web d'apprentisssage et de communication pour étudiant·es, professeur·es et professionnel·les. Elle permet de gérer les cours, les devoirs, les examens, les présences et les communications entre les différents acteurs de l'éducation.",
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
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/src/lib/assets/icons/php.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Xplora est une application web développée pour un·e client·e. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé basculé en headless avec SvelteKit depuis une API sur mesure qui communique avec le backend en PHP.',
		tags: ['Web App', 'Wordpress'],
		slug: 'xplora-app',
		external_link: ''
	},
	{
		title: 'Xplora Website',
		subtitle: 'Site de programmes éducatifs et de voyages pour étudiant·es',
		description:
			"Xplora est un site de programmes éducatifs et de voyages pour étudiant·es, qui permet de découvrir les différents programmes proposés par l’entreprise et de s’inscrire à ceux-ci dans le but d'étudier en ligne ou dans d'autres pays des cours sélectionnés.",
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
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/src/lib/assets/icons/php.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Xplora est un site web développé pour un·e client·e. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé basculé en headless avec SvelteKit depuis une API sur mesure qui communique avec le backend en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'xplora-website',
		external_link: 'https://www.xplorainternational.org/'
	},
	{
		title: 'Jaya',
		subtitle: 'E-commerce de produits intimes féminins',
		description:
			'Jaya est un site e-commerce de produits de beauté et de bien-être intimes féminins. Il propose une large gamme de produits, allant des soins intimes aux accessoires, en passant par les produits de bien-être et de relaxation. Il propose également une box de bien-être intime et de plaisir sexuel féminin personnalisée, qui permet de recevoir chaque mois une sélection de produits adaptés à ses besoins et à ses envies.',
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
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/src/lib/assets/icons/php.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Jaya est un site e-commerce développé pour un·e client·e. Nous sommes 2 développeurs à avoir travaillé sur le projet, qui est un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'Wordpress'],
		slug: 'jaya',
		external_link: ''
	},
	{
		title: 'Lagrange',
		subtitle: 'Site de présentation de domaine viticole',
		description:
			"Lagrange est un site de présentation du domaine viticole Château Lagrange. Il présente l'histoire, la philosophie, les collections et les vins liés au château.",
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
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Lagrange est un site web 'one page' développé en SvelteKit dans un temps restreint pour le domaine viticole Château Lagrange.",
		tags: ['Site web'],
		slug: 'lagrange',
		external_link: ''
	},
	{
		title: 'Tonnellerie Bel Air',
		subtitle: 'Site de présentation de tonnellerie',
		description:
			"Tonnellerie Bel Air est un site de présentation d'une tonnellerie française spécialisée dans la fabrication de tonneaux en bois pour le vin.",
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
				title: 'Wordpress',
				icon: '/src/lib/assets/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/src/lib/assets/icons/php.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			'Tonnellerie Bel Air est un site web développé pour un·e client·e. Nous sommes 2 développeur·euses à avoir travaillé sur le projet, qui est un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'WordPress'],
		slug: 'tonnellerie-bel-air',
		external_link: 'https://www.tonnellerie-bel-air.fr/bel-air/'
	},
	{
		title: 'Hatchr',
		subtitle: 'Site de solutions web et marketing',
		description:
			"Hatchr est un site de solutions de communication et de marketing pour les entreprises dans le secteur de la finance, de l'immobilier et du droit. Il propose de développer leur visibilité, fidéliser et attirez de nouveaux clients grâce à des services de création de sites web / d'image de marque, de gestion des Réseaux Sociaux, de référencement et de conseils stratégiques et marketing.",
		images: {
			home: {
				src: '/src/lib/assets/images/Hatchr/Hatchr_Home.png',
				alt: 'Hatchr Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Hatchr/Hatchr_Partners.png',
					alt: 'Hatchr Partners'
				},
				{
					src: '/src/lib/assets/images/Hatchr/Hatchr_Slider.png',
					alt: 'Hatchr Slider'
				},
				{
					src: '/src/lib/assets/images/Hatchr/Hatchr_Contact.png',
					alt: 'Hatchr Contact'
				},
				{
					src: '/src/lib/assets/images/Hatchr/Hatchr_Footer.png',
					alt: 'Hatchr Footer'
				}
			]
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
				title: 'Sass',
				icon: '/src/lib/assets/icons/sass.svg'
			}
		],
		context:
			'Hatchr est un site web principalement développé en PHP sur un thème personnalisé Wordpress.',
		tags: ['Site web', 'WordPress'],
		slug: 'hatchr',
		external_link: 'https://hatchr.fr/'
	},
	{
		title: 'Jigogne',
		subtitle: 'Site de services dans le BTP',
		description:
			'Jigogne est un site de présentation de services dans le BTP, spécialisé dans la vente de terrain, les projets de construction ou encore les expertises techniques.',
		images: {
			home: {
				src: '/src/lib/assets/images/Jigogne/Jigogne_Home.png',
				alt: 'Jigogne Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Jigogne/Jigogne_About.png',
					alt: 'Jigogne About'
				},
				{
					src: '/src/lib/assets/images/Jigogne/Jigogne_Services.png',
					alt: 'Jigogne Services'
				},
				{
					src: '/src/lib/assets/images/Jigogne/Jigogne_Interventions.png',
					alt: 'Jigogne Interventions'
				},
				{
					src: '/src/lib/assets/images/Jigogne/Jigogne_Footer.png',
					alt: 'Jigogne Footer'
				}
			]
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
				title: 'Sass',
				icon: '/src/lib/assets/icons/sass.svg'
			}
		],
		context:
			'Jigogne est un site web développé pour un·e client·e. Basé sur un thème wordpress personnalisé principalement développé en PHP.',
		tags: ['Site web', 'WordPress'],
		slug: 'jigogne',
		external_link: 'https://jigogne.com/'
	},
	{
		title: 'Tarot Africain',
		subtitle: 'Jeu de cartes en ligne multijoueur',
		description:
			"Le Tarot Africain est une variante du jeu de tarot traditionnel. Il est connu sous plusieurs noms et se joue avec les atouts du jeu de base. C'est un jeu de plis dans lequel les joueurs doivent deviner le nombre exacts de plis qu'ils remporteront. Il se joue généralement à 4 joueurs, mais peut également se jouer à 3 ou 5 joueurs.",
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
				title: 'Socket.io',
				icon: '/src/lib/assets/icons/socketio.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'TypeScript',
				icon: '/src/lib/assets/icons/typescript.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Le Tarot Africain est un projet personnel que j'ai développé dans mon temps libre. Je suis d'ailleurs parti de ce projet pour créer un template de jeu multijoueur en ligne tour par tour, développé en SvelteKit, TypeScript et Socket.io, et que j'utilise pour mes projets du même type. Le projet n'est pas encore terminé à 100% même s'il est fonctionnel dans la cas d'une 1ère version jouable. Quelques fonctionalités restent à implémenter et surtout toute la partie Design et UI/UX du jeu.",
		tags: ['Jeu', 'Multijoueur', 'En ligne'],
		slug: 'tarot-africain',
		external_link: 'https://tarot-mexicain.maximelust.fr/'
	},
	{
		title: 'La Burie',
		subtitle: "Site de chambres d'hôtes",
		description:
			"La Burie est un site de chambres d'hôtes de Charente-Maritime (Saint-Savinien), permettant aux visiteurs de découvrir les différentes chambres mises à disposition, les activités et services proposés, ainsi que de réserver des nuitées en ligne.",
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
				title: 'HTML',
				icon: '/src/lib/assets/icons/html.svg'
			},
			{
				title: 'CSS',
				icon: '/src/lib/assets/icons/css.svg'
			},
			{
				title: 'JavaScript',
				icon: '/src/lib/assets/icons/javascript.svg'
			}
		],
		context:
			"LaBurie est un des premiers sites que j'ai pu développer, pour mettre en avant l'activité de ma mère. C'est un OnePage simple en HTML, CSS et JavaScript.",
		tags: ['Site web'],
		slug: 'laburie',
		external_link: 'https://laburie.com/'
	},
	{
		title: 'Metal Access',
		subtitle: "Site associatif d'accessibilité pour festivals",
		description:
			"Metal Access est un site pour une association qui a pour but d'accompagner les festivals dans la mise en accessibilité de leurs évènements.",
		images: {
			home: {
				src: '/src/lib/assets/images/Metal-Access/Metal-Access_Home.png',
				alt: 'Metal Access Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Metal-Access/Metal-Access_Test.png',
					alt: 'Metal Access Test'
				},
				{
					src: '/src/lib/assets/images/Metal-Access/Metal-Access_Handicaps.png',
					alt: 'Metal Access Handicaps'
				},
				{
					src: '/src/lib/assets/images/Metal-Access/Metal-Access_Federation.png',
					alt: 'Metal Access Federation'
				},
				{
					src: '/src/lib/assets/images/Metal-Access/Metal-Access_Signaletique.png',
					alt: 'Metal Access Signaletique'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			},
			{
				title: 'Notion',
				icon: '/src/lib/assets/icons/notion.svg'
			}
		],
		context:
			"Metal access a été realisé en seulement quelques jours avec un blog connecté avec l'API proposée par Notion, dans le cadre d'un projet étudiant.",
		tags: ['Site web'],
		slug: 'metal-access',
		external_link: 'https://metal-access.maximelust.fr/'
	},
	{
		title: 'FixMyStreet',
		subtitle: 'PWA de signalements de défauts routiers',
		description:
			"FixMyStreet est une Progressive Web App (PWA) principalement axée sur les cyclistes / piétons qui permet aux citoyen·nes de signaler des défauts routiers dans leur ville, tels que des nids-de-poule, des lampadaires cassés ou encore des panneaux de signalisation ou marquages manquants. L'application permet également de suivre l'état des signalements et de recevoir des notifications lorsque ceux-ci sont traités.",
		images: {
			home: {
				src: '/src/lib/assets/images/FixMyStreet/FixMyStreet_Home.png',
				alt: 'FixMyStreet Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/FixMyStreet/FixMyStreet_Login.png',
					alt: 'FixMyStreet Login'
				},

				{
					src: '/src/lib/assets/images/FixMyStreet/FixMyStreet_Signalement.png',
					alt: 'FixMyStreet Signalement'
				}
			]
		},
		technologies: [
			{
				title: 'Supabase',
				icon: '/src/lib/assets/icons/supabase.svg'
			},
			{
				title: 'Next.js',
				icon: '/src/lib/assets/icons/next.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"FixMyStreet est mon projet de fin d'études développé en équipe de 3 personnes. Elle contient 2 parties : la partie utilisateur·rice et la partie administrateur·rice. La partie utilisateur·rice permet de signaler des défauts routiers, tandis que la partie administrateur·rice permet de gérer les signalements et de les traiter.",
		tags: ['PWA', 'BDD'],
		slug: 'fixmystreet',
		external_link: 'https://fixmystreet.maximelust.fr/'
	},
	{
		title: 'Nautilus',
		subtitle: 'Support de Motion Design',
		description:
			'Nautilus est un petit site permettant de présenter un Motion Design avec une timeline des évènements liée à celui-ci.',
		images: {
			home: {
				src: '/src/lib/assets/images/Nautilus/Nautilus_Home.png',
				alt: 'Nautilus Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Nautilus/Nautilus_Calme.png',
					alt: 'Nautilus Calme'
				},
				{
					src: '/src/lib/assets/images/Nautilus/Nautilus_Etouffement.png',
					alt: 'Nautilus Etouffement'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Nautilus a été réalisé en très peu de temps dans le but d'intéragir avec le Motion Design et de présenter les différentes étapes de celui-ci, dnas le cadre d'un projet étudiant.",
		tags: ['Site web'],
		slug: 'nautilus',
		external_link: 'https://nautilus.maximelust.fr/'
	},
	{
		title: 'Egol',
		subtitle: 'Site humouristique de présentation de marque',
		description: "Egol est un site OnePage humouristique de présentation d'une marque fictive.",
		images: {
			home: {
				src: '/src/lib/assets/images/Egol/Egol_Home.png',
				alt: 'Egol Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Egol/Egol_Solutions.png',
					alt: 'Egol Solutions'
				},
				{
					src: '/src/lib/assets/images/Egol/Egol_Slider.png',
					alt: 'Egol Slider'
				},
				{
					src: '/src/lib/assets/images/Egol/Egol_Testimonials.png',
					alt: 'Egol Testimonials'
				},
				{
					src: '/src/lib/assets/images/Egol/Egol_Footer.png',
					alt: 'Egol Footer'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context: "Egol a été réalisé en seulement quelques jours dans le cadre d'un projet étudiant.",
		tags: ['Site web'],
		slug: 'egol',
		external_link: 'https://egol.maximelust.fr/'
	},
	{
		title: 'Porsche',
		subtitle: 'Site OnePage avec 3D',
		description:
			'Porsche est un site OnePage présentant les caractéritiques de la fameuse 911 GT2 RS',
		images: {
			home: {
				src: '/src/lib/assets/images/Porsche/Porsche_Home.png',
				alt: 'Porsche Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Porsche/Porsche_Presentation.png',
					alt: 'Porsche Presentation'
				},
				{
					src: '/src/lib/assets/images/Porsche/Porsche_Description.png',
					alt: 'Porsche Description'
				},
				{
					src: '/src/lib/assets/images/Porsche/Porsche_Moteur.png',
					alt: 'Porsche Moteur'
				},
				{
					src: '/src/lib/assets/images/Porsche/Porsche_Personnalisation.png',
					alt: 'Porsche Personnalisation'
				}
			]
		},
		technologies: [
			{
				title: 'Three.js',
				icon: '/src/lib/assets/icons/threejs.svg'
			},
			{
				title: 'WebGL',
				icon: '/src/lib/assets/icons/webgl.svg'
			},
			{
				title: 'Gsap',
				icon: '/src/lib/assets/icons/gsap.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Porsche est un site OnePage développé dans le cadre d'un cours dédié à Three.js et WebGL. Il contient des shaders et des animations 3D avec des jeux de lumière, une personnalisation des couleurs, etc.",
		tags: ['Site web', 'Three.js', 'WebGL'],
		slug: 'porsche',
		external_link: 'https://porsche.maximelust.fr/'
	},
	{
		title: 'Too Well Stolen',
		subtitle: "Site web intéractif de jeu d'enquête",
		description:
			"Too Well Stolen est un site web intéractif de jeu d'enquête, dans lequel le joueur doit résoudre une affaire de vol d'oeuvre d'art en interrogeant des suspects et en collectant des indices.",
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
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Too Well Stolen a été réalisé en quelques jours dans le cadre d'un projet étudiant. Il était destiné à être testé au MusBA (Musée des Beaux-Arts) de Bordeaux à une certaine période durant laquelle les oeuvres utilisées et leurs emplacements étaient nécessaires au bon déroulement du jeu d'enquête.",
		tags: ['Site web', 'Three.js', 'WebGL'],
		slug: 'too-well-stolen',
		external_link: 'https://too-well-stolen.vercel.app/'
	},
	{
		title: 'Bovélo',
		subtitle: 'Application de vélos en libre-service + site de présentation',
		description:
			"Bovélo est un prototype d'application de location de vélos en libre-service, qui permet aux utilisateurs de localiser les stations de vélos disponibles, de réserver un vélo et de le déverrouiller pour l'utiliser. De plus, un site de présentation accompagne l'application afin de la mettre en avant.",
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
				title: 'Figma',
				icon: '/src/lib/assets/icons/figma.svg'
			},
			{
				title: 'HTML',
				icon: '/src/lib/assets/icons/html.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Bovélo a été réalisé en quelques jours dans le cadre d'un projet étudiant. L'application a été prototypée sur Figma par une équipe de 5 personnes.",
		tags: ['Application web', 'Prototype', 'Site web'],
		slug: 'bovelo',
		external_link: 'https://bovelo.netlify.app/'
	},
	{
		title: 'CAPC',
		subtitle: 'Refonte de site web',
		description:
			"CAPC est une refonte du site web du musée d'art contemporain de Bordeaux, qui permet de découvrir les expositions, les collections et les événements proposés par le musée.",
		images: {
			home: {
				src: '/src/lib/assets/images/CAPC/CAPC_Home.png',
				alt: 'CAPC Home'
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
				title: 'HTML',
				icon: '/src/lib/assets/icons/html.svg'
			},
			{
				title: 'Bootstrap',
				icon: '/src/lib/assets/icons/bootstrap.svg'
			}
		],
		context:
			"CAPC a été ralisé en quelques jours dans le cadre d'un projet étudiant par une équipe de 5 personnes. Il avait en autre pour but de découvrir l'environnement de Bootstrap. Seule la page d'accueil et la page de la première exposition (/event) ont été réalisées.",
		tags: ['Site web', 'Refonte'],
		slug: 'capc',
		external_link: 'https://capc.netlify.app/#'
	},
	{
		title: 'Spooon',
		subtitle: "Web app de gestion d'énergie quotidienne",
		description:
			"Spooon est une web app permettant la gestion de son réservoir d'énergie au quotidien. Elle s'applique principalement pour des personnes atteintes d'autisme et est basée sur la théorie des cuillères de Christine Miserandino",
		images: {
			home: {
				src: '/src/lib/assets/images/Spooon/Spooon_Home.png',
				alt: 'Spooon Home'
			},
			gallery: [
				{
					src: '/src/lib/assets/images/Spooon/Spooon_Energie.png',
					alt: 'Spooon Energie'
				},
				{
					src: '/src/lib/assets/images/Spooon/Spooon_Depense.png',
					alt: 'Spooon Depense'
				},
				{
					src: '/src/lib/assets/images/Spooon/Spooon_Gain.png',
					alt: 'Spooon Gain'
				},
				{
					src: '/src/lib/assets/images/Spooon/Spooon_About.png',
					alt: 'Spooon About'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/src/lib/assets/icons/sveltekit.svg'
			},
			{
				title: 'Tailwind',
				icon: '/src/lib/assets/icons/tailwind.svg'
			}
		],
		context:
			"Spooon a été réalisé en quelques jours par une équipe de 9 personnes, dont 2 développeur·euses, dans le cadre d'un projet étudiant.",
		tags: ['Application web'],
		slug: 'spooon',
		external_link: 'https://app.spooon.mmibordeaux.com/'
	},
	{
		title: 'The Mornful Painter',
		subtitle: "Jeu de plateforme et d'énigmes 2D",
		description:
			"The Mornful Painter est un jeu de plateforme et d'énigmes 2D dans lequel le joueur incarne une âme en quête de ses souvenirs. à chaque tableau trouvé, le joueur voit apparaître une nouvelle couleur permettant de débloquer de nouvelles zones et de nouveaux tableaux.",
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
				title: 'Unity',
				icon: '/src/lib/assets/icons/unity.svg'
			},
			{
				title: 'Itchi.io',
				icon: '/src/lib/assets/icons/itchio.svg'
			}
		],
		context:
			"The Mornful Painter a été réalisé en quelques jours par une équipe de 5 personnes, dont 2 développeur·euses, dans le cadre d'un projet étudiant.",
		tags: ['Jeu vidéo', 'Plateforme', 'Énigmes'],
		slug: 'the-mornful-painter',
		external_link: 'https://la-machine-a-cafe.itch.io/the-mournful-painter'
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
