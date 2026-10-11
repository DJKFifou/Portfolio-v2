import { m } from '$lib/paraglide/messages.js';

export type TagKey = 'one' | 'two' | 'three';

export const projects: ProjectType[] = [
	{
		title: "Let's Summon Demons",
		get subtitle() {
			return m['projects.lsd.subtitle']();
		},
		get description() {
			return m['projects.lsd.description']();
		},
		images: {
			home: {
				src: '/images/LSD/LSD_Home.png',
				alt: "Let's Summon Demons Home"
			},
			moodboard: {
				src: '/images/LSD/LSD_Moodboard.png',
				alt: "Let's Summon Demons Moodboard"
			},
			gallery: [
				{
					src: '/images/LSD/LSD_Lobby.png',
					alt: "Let's Summon Demons Lobby"
				},
				{
					src: '/images/LSD/LSD_LobbyCreated.png',
					alt: "Let's Summon Demons Lobby created"
				},
				{
					src: '/images/LSD/LSD_LobbyJoined.png',
					alt: "Let's Summon Demons Lobby joined"
				},
				{
					src: '/images/LSD/LSD_Gameplay.png',
					alt: "Let's Summon Demons Gameplay"
				}
			]
		},
		technologies: [
			{
				title: 'React',
				icon: '/icons/react.svg'
			},
			{
				title: 'TypeScript',
				icon: '/icons/typescript.svg'
			},
			{
				title: 'Socket.io',
				icon: '/icons/socketio.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.lsd.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.lsd.tags.${key}`]()
			);
		},
		slug: 'lets-summon-demons'
	},
	{
		title: 'Marin French Cheese',
		get subtitle() {
			return m['projects.mfc.subtitle']();
		},
		get description() {
			return m['projects.mfc.description']();
		},
		images: {
			home: {
				src: '/images/MFC/MFC_Home.png',
				alt: 'Marin French Cheese Home'
			},
			moodboard: {
				src: '/images/MFC/MFC_Moodboard.png',
				alt: 'Marin French Cheese Moodboard'
			},
			gallery: [
				{
					src: '/images/MFC/MFC_Craft.png',
					alt: 'Marin French Cheese Craft'
				},
				{
					src: '/images/MFC/MFC_Slider.png',
					alt: 'Marin French Cheese Slider'
				},
				{
					src: '/images/MFC/MFC_VisitUs.png',
					alt: 'Marin French Cheese Visit Us'
				},
				{
					src: '/images/MFC/MFC_SingleProduct.png',
					alt: 'Marin French Cheese Single Product'
				}
			]
		},
		technologies: [
			{
				title: 'Shopify',
				icon: '/icons/shopify.svg'
			},
			{
				title: 'TypeScript',
				icon: '/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.mfc.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.mfc.tags.${key}`]()
			);
		},
		slug: 'marin-french-cheese',
		external_link: 'https://marinfrenchcheese.com'
	},
	{
		title: 'White-Toque',
		get subtitle() {
			return m['projects.white-toque.subtitle']();
		},
		get description() {
			return m['projects.white-toque.description']();
		},
		images: {
			home: {
				src: '/images/White-Toque/White-Toque_Home.png',
				alt: 'White-Toque Home'
			},
			moodboard: {
				src: '/images/White-Toque/White-Toque_Moodboard.png',
				alt: 'White-Toque Moodboard'
			},
			gallery: [
				{
					src: '/images/White-Toque/White-Toque_Products.png',
					alt: 'White-Toque Products'
				},
				{
					src: '/images/White-Toque/White-Toque_ProductPage.png',
					alt: 'White-Toque Product Page'
				},
				{
					src: '/images/White-Toque/White-Toque_Slider.png',
					alt: 'White-Toque Slider'
				},
				{
					src: '/images/White-Toque/White-Toque_Footer.png',
					alt: 'White-Toque Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'TypeScript',
				icon: '/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.white-toque.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.white-toque.tags.${key}`]()
			);
		},
		slug: 'white-toque',
		external_link: 'https://www.whitetoque.com'
	},
	{
		title: 'Taillan-Medoc',
		get subtitle() {
			return m['projects.taillan-medoc.subtitle']();
		},
		get description() {
			return m['projects.taillan-medoc.description']();
		},
		images: {
			home: {
				src: '/images/Taillan-Medoc/Taillan-Medoc_Home.png',
				alt: 'Taillan-Medoc Home'
			},
			gallery: [
				{
					src: '/images/Taillan-Medoc/Taillan-Medoc_Header.png',
					alt: 'Taillan-Medoc Header'
				},
				{
					src: '/images/Taillan-Medoc/Taillan-Medoc_Sliders.png',
					alt: 'Taillan-Medoc Sliders'
				},
				{
					src: '/images/Taillan-Medoc/Taillan-Medoc_Article.png',
					alt: 'Taillan-Medoc Article'
				},
				{
					src: '/images/Taillan-Medoc/Taillan-Medoc_Footer.png',
					alt: 'Taillan-Medoc Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'TypeScript',
				icon: '/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.taillan-medoc.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.taillan-medoc.tags.${key}`]()
			);
		},
		slug: 'taillan-medoc',
		external_link: 'https://www.taillan-medoc.fr'
	},
	{
		title: 'Geoquizz',
		get subtitle() {
			return m['projects.geoquizz.subtitle']();
		},
		get description() {
			return m['projects.geoquizz.description']();
		},
		images: {
			home: {
				src: '/images/Geoquizz/Geoquizz_Home.png',
				alt: 'Geoquizz Home'
			},
			gallery: [
				{
					src: '/images/Geoquizz/Geoquizz_Quizz.png',
					alt: 'Geoquizz Quizz'
				},
				{
					src: '/images/Geoquizz/Geoquizz_Lists_Flags.png',
					alt: 'Geoquizz Lists Flags'
				},
				{
					src: '/images/Geoquizz/Geoquizz_Lists_States.png',
					alt: 'Geoquizz Lists States'
				},
				{
					src: '/images/Geoquizz/Geoquizz_Lists_Countries.png',
					alt: 'Geoquizz Lists Countries'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'TypeScript',
				icon: '/icons/typescript.svg'
			},
			{
				title: 'TailwindCSS',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.geoquizz.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.geoquizz.tags.${key}`]()
			);
		},
		slug: 'geoquizz',
		external_link: 'https://geoquizz.maximelust.fr'
	},
	{
		title: 'Primizie',
		get subtitle() {
			return m['projects.primizie.subtitle']();
		},
		get description() {
			return m['projects.primizie.description']();
		},
		images: {
			home: {
				src: '/images/Primizie/Primizie_Home.png',
				alt: 'Primizie Home'
			},
			moodboard: {
				src: '/images/Primizie/Primizie_Moodboard.png',
				alt: 'Primizie Moodboard'
			},
			gallery: [
				{
					src: '/images/Primizie/Primizie_Presentation.png',
					alt: 'Primizie Presentation'
				},
				{
					src: '/images/Primizie/Primizie_Slider.png',
					alt: 'Primizie Slider'
				},
				{
					src: '/images/Primizie/Primizie_Cards.png',
					alt: 'Primizie Cards'
				},
				{
					src: '/images/Primizie/Primizie_Footer.png',
					alt: 'Primizie Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.primizie.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.primizie.tags.${key}`]()
			);
		},
		slug: 'primizie',
		external_link: ''
	},
	{
		title: 'Xplora App',
		get subtitle() {
			return m['projects.xplora-app.subtitle']();
		},
		get description() {
			return m['projects.xplora-app.description']();
		},
		images: {
			home: {
				src: '/images/Xplora/App/Xplora_App_Home.png',
				alt: 'Xplora App Home'
			},
			gallery: [
				{
					src: '/images/Xplora/App/Xplora_App_Chat.png',
					alt: 'Xplora App chat'
				},
				{
					src: '/images/Xplora/App/Xplora_App_Live.png',
					alt: 'Xplora App live'
				},
				{
					src: '/images/Xplora/App/Xplora_App_Students.png',
					alt: 'Xplora App students'
				},
				{
					src: '/images/Xplora/App/Xplora_App_Assignments.png',
					alt: 'Xplora App assignments'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.xplora-app.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.xplora-app.tags.${key}`]()
			);
		},
		slug: 'xplora-app',
		external_link: ''
	},
	{
		title: 'Xplora Website',
		get subtitle() {
			return m['projects.xplora-website.subtitle']();
		},
		get description() {
			return m['projects.xplora-website.description']();
		},
		images: {
			home: {
				src: '/images/Xplora/Website/Xplora_Website_Home.png',
				alt: 'Xplora Website Home'
			},
			gallery: [
				{
					src: '/images/Xplora/Website/Xplora_Website_Programs.png',
					alt: 'Xplora Website Programs'
				},
				{
					src: '/images/Xplora/Website/Xplora_Website_ProgramsGrid.png',
					alt: 'Xplora Website ProgramsGrid'
				},
				{
					src: '/images/Xplora/Website/Xplora_Website_Destinations.png',
					alt: 'Xplora Website Destinations'
				},
				{
					src: '/images/Xplora/Website/Xplora_Website_Contact.png',
					alt: 'Xplora Website Contact'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.xplora-website.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.xplora-website.tags.${key}`]()
			);
		},
		slug: 'xplora-website',
		external_link: 'https://www.xplorainternational.org/'
	},
	{
		title: 'Jaya',
		get subtitle() {
			return m['projects.jaya.subtitle']();
		},
		get description() {
			return m['projects.jaya.description']();
		},
		images: {
			home: {
				src: '/images/Jaya/Jaya_Home.png',
				alt: 'Jaya Home'
			},
			gallery: [
				{
					src: '/images/Jaya/Jaya_Presentation.png',
					alt: 'Jaya Presentation'
				},
				{
					src: '/images/Jaya/Jaya_Box.png',
					alt: 'Jaya Box'
				},
				{
					src: '/images/Jaya/Jaya_Shopping.png',
					alt: 'Jaya Shopping'
				},
				{
					src: '/images/Jaya/Jaya_Footer.png',
					alt: 'Jaya Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.jaya.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.jaya.tags.${key}`]()
			);
		},
		slug: 'jaya',
		external_link: ''
	},
	{
		title: 'Lagrange',
		get subtitle() {
			return m['projects.lagrange.subtitle']();
		},
		get description() {
			return m['projects.lagrange.description']();
		},
		images: {
			home: {
				src: '/images/Lagrange/Lagrange_Home.png',
				alt: 'Lagrange Home'
			},
			gallery: [
				{
					src: '/images/Lagrange/Lagrange_Header.png',
					alt: 'Lagrange Header'
				},
				{
					src: '/images/Lagrange/Lagrange_Gallery.png',
					alt: 'Lagrange Gallery'
				},
				{
					src: '/images/Lagrange/Lagrange_Slider.png',
					alt: 'Lagrange Slider'
				},
				{
					src: '/images/Lagrange/Lagrange_Collection.png',
					alt: 'Lagrange Collection'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.lagrange.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.lagrange.tags.${key}`]()
			);
		},
		slug: 'lagrange',
		external_link: 'https://chateau-lagrange.com/collection-heritage/'
	},
	{
		title: 'Tonnellerie Bel Air',
		get subtitle() {
			return m['projects.tonnellerie.subtitle']();
		},
		get description() {
			return m['projects.tonnellerie.description']();
		},
		images: {
			home: {
				src: '/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Home.png',
				alt: 'Tonnellerie Bel Air Home'
			},
			gallery: [
				{
					src: '/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Header.png',
					alt: 'Tonnellerie Bel Air Header'
				},
				{
					src: '/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Presentation.png',
					alt: 'Tonnellerie Bel Air Presentation'
				},
				{
					src: '/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Gamme.png',
					alt: 'Tonnellerie Bel Air Gamme'
				},
				{
					src: '/images/Tonnellerie-Bel-Air/Tonnellerie-Bel-Air_Handmade.png',
					alt: 'Tonnellerie Bel Air Handmade'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.tonnellerie.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.tonnellerie.tags.${key}`]()
			);
		},
		slug: 'tonnellerie-bel-air',
		external_link: 'https://www.tonnellerie-bel-air.fr/bel-air/'
	},
	{
		title: 'Hatchr',
		get subtitle() {
			return m['projects.hatchr.subtitle']();
		},
		get description() {
			return m['projects.hatchr.description']();
		},
		images: {
			home: {
				src: '/images/Hatchr/Hatchr_Home.png',
				alt: 'Hatchr Home'
			},
			gallery: [
				{
					src: '/images/Hatchr/Hatchr_Partners.png',
					alt: 'Hatchr Partners'
				},
				{
					src: '/images/Hatchr/Hatchr_Slider.png',
					alt: 'Hatchr Slider'
				},
				{
					src: '/images/Hatchr/Hatchr_Contact.png',
					alt: 'Hatchr Contact'
				},
				{
					src: '/images/Hatchr/Hatchr_Footer.png',
					alt: 'Hatchr Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'Sass',
				icon: '/icons/sass.svg'
			}
		],
		get context() {
			return m['projects.hatchr.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.hatchr.tags.${key}`]()
			);
		},
		slug: 'hatchr',
		external_link: 'https://hatchr.fr/'
	},
	{
		title: 'Jigogne',
		get subtitle() {
			return m['projects.jigogne.subtitle']();
		},
		get description() {
			return m['projects.jigogne.description']();
		},
		images: {
			home: {
				src: '/images/Jigogne/Jigogne_Home.png',
				alt: 'Jigogne Home'
			},
			gallery: [
				{
					src: '/images/Jigogne/Jigogne_About.png',
					alt: 'Jigogne About'
				},
				{
					src: '/images/Jigogne/Jigogne_Services.png',
					alt: 'Jigogne Services'
				},
				{
					src: '/images/Jigogne/Jigogne_Interventions.png',
					alt: 'Jigogne Interventions'
				},
				{
					src: '/images/Jigogne/Jigogne_Footer.png',
					alt: 'Jigogne Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Wordpress',
				icon: '/icons/wordpress.svg'
			},
			{
				title: 'PHP',
				icon: '/icons/php.svg'
			},
			{
				title: 'Sass',
				icon: '/icons/sass.svg'
			}
		],
		get context() {
			return m['projects.jigogne.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.jigogne.tags.${key}`]()
			);
		},
		slug: 'jigogne',
		external_link: 'https://jigogne.com/'
	},
	{
		title: 'Tarot Africain',
		get subtitle() {
			return m['projects.tarot-africain.subtitle']();
		},
		get description() {
			return m['projects.tarot-africain.description']();
		},
		images: {
			home: {
				src: '/images/Tarot-Africain/Tarot-Africain_Home.png',
				alt: 'Tarot Africain Home'
			},
			gallery: [
				{
					src: '/images/Tarot-Africain/Tarot-Africain_Lobby.png',
					alt: 'Tarot Africain Lobby'
				},
				{
					src: '/images/Tarot-Africain/Tarot-Africain_Gameplay.png',
					alt: 'Tarot Africain Gameplay'
				}
			]
		},
		technologies: [
			{
				title: 'Socket.io',
				icon: '/icons/socketio.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'TypeScript',
				icon: '/icons/typescript.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.tarot-africain.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.tarot-africain.tags.${key}`]()
			);
		},
		slug: 'tarot-africain',
		external_link: 'https://tarot-mexicain.maximelust.fr/'
	},
	{
		title: 'La Burie',
		get subtitle() {
			return m['projects.laburie.subtitle']();
		},
		get description() {
			return m['projects.laburie.description']();
		},
		images: {
			home: {
				src: '/images/LaBurie/LaBurie_Home.png',
				alt: 'La Burie Home'
			},
			gallery: [
				{
					src: '/images/LaBurie/LaBurie_About.png',
					alt: 'La Burie About'
				},
				{
					src: '/images/LaBurie/LaBurie_Activities.png',
					alt: 'La Burie Activities'
				},
				{
					src: '/images/LaBurie/LaBurie_Spaces.png',
					alt: 'La Burie Spaces'
				},
				{
					src: '/images/LaBurie/LaBurie_Contact.png',
					alt: 'La Burie Contact'
				}
			]
		},
		technologies: [
			{
				title: 'HTML',
				icon: '/icons/html.svg'
			},
			{
				title: 'CSS',
				icon: '/icons/css.svg'
			},
			{
				title: 'JavaScript',
				icon: '/icons/javascript.svg'
			}
		],
		get context() {
			return m['projects.laburie.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.laburie.tags.${key}`]()
			);
		},
		slug: 'laburie',
		external_link: 'https://laburie.com/'
	},
	{
		title: 'Metal Access',
		get subtitle() {
			return m['projects.metal-access.subtitle']();
		},
		get description() {
			return m['projects.metal-access.description']();
		},
		images: {
			home: {
				src: '/images/Metal-Access/Metal-Access_Home.png',
				alt: 'Metal Access Home'
			},
			gallery: [
				{
					src: '/images/Metal-Access/Metal-Access_Test.png',
					alt: 'Metal Access Test'
				},
				{
					src: '/images/Metal-Access/Metal-Access_Handicaps.png',
					alt: 'Metal Access Handicaps'
				},
				{
					src: '/images/Metal-Access/Metal-Access_Federation.png',
					alt: 'Metal Access Federation'
				},
				{
					src: '/images/Metal-Access/Metal-Access_Signaletique.png',
					alt: 'Metal Access Signaletique'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			},
			{
				title: 'Notion',
				icon: '/icons/notion.svg'
			}
		],
		get context() {
			return m['projects.metal-access.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.metal-access.tags.${key}`]()
			);
		},
		slug: 'metal-access',
		external_link: 'https://metal-access.maximelust.fr/'
	},
	{
		title: 'FixMyStreet',
		get subtitle() {
			return m['projects.fixmystreet.subtitle']();
		},
		get description() {
			return m['projects.fixmystreet.description']();
		},
		images: {
			home: {
				src: '/images/FixMyStreet/FixMyStreet_Home.png',
				alt: 'FixMyStreet Home'
			},
			gallery: [
				{
					src: '/images/FixMyStreet/FixMyStreet_Login.png',
					alt: 'FixMyStreet Login'
				},

				{
					src: '/images/FixMyStreet/FixMyStreet_Signalement.png',
					alt: 'FixMyStreet Signalement'
				}
			]
		},
		technologies: [
			{
				title: 'Supabase',
				icon: '/icons/supabase.svg'
			},
			{
				title: 'Next.js',
				icon: '/icons/next.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.fixmystreet.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.fixmystreet.tags.${key}`]()
			);
		},
		slug: 'fixmystreet',
		external_link: 'https://fixmystreet.maximelust.fr/'
	},
	{
		title: 'Nautilus',
		get subtitle() {
			return m['projects.nautilus.subtitle']();
		},
		get description() {
			return m['projects.nautilus.description']();
		},
		images: {
			home: {
				src: '/images/Nautilus/Nautilus_Home.png',
				alt: 'Nautilus Home'
			},
			gallery: [
				{
					src: '/images/Nautilus/Nautilus_Calme.png',
					alt: 'Nautilus Calme'
				},
				{
					src: '/images/Nautilus/Nautilus_Etouffement.png',
					alt: 'Nautilus Etouffement'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.nautilus.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.nautilus.tags.${key}`]()
			);
		},
		slug: 'nautilus',
		external_link: 'https://nautilus.maximelust.fr/'
	},
	{
		title: 'Egol',
		get subtitle() {
			return m['projects.egol.subtitle']();
		},
		get description() {
			return m['projects.egol.description']();
		},
		images: {
			home: {
				src: '/images/Egol/Egol_Home.png',
				alt: 'Egol Home'
			},
			gallery: [
				{
					src: '/images/Egol/Egol_Solutions.png',
					alt: 'Egol Solutions'
				},
				{
					src: '/images/Egol/Egol_Slider.png',
					alt: 'Egol Slider'
				},
				{
					src: '/images/Egol/Egol_Testimonials.png',
					alt: 'Egol Testimonials'
				},
				{
					src: '/images/Egol/Egol_Footer.png',
					alt: 'Egol Footer'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.egol.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.egol.tags.${key}`]()
			);
		},
		slug: 'egol',
		external_link: 'https://egol.maximelust.fr/'
	},
	{
		title: 'Refuge Canin Solidaire',
		get subtitle() {
			return m['projects.refuge-canin.subtitle']();
		},
		get description() {
			return m['projects.refuge-canin.description']();
		},
		images: {
			home: {
				src: '/images/Refuge-Canin/Refuge-Canin_Home.png',
				alt: 'Refuge Canin Home'
			},
			gallery: [
				{
					src: '/images/Refuge-Canin/Refuge-Canin_Description.png',
					alt: 'Refuge-Canin Description'
				},
				{
					src: '/images/Refuge-Canin/Refuge-Canin_LastAdopted.png',
					alt: 'Refuge-Canin Last Adopted'
				},
				{
					src: '/images/Refuge-Canin/Refuge-Canin_Pathway.png',
					alt: 'Refuge-Canin Pathway'
				},
				{
					src: '/images/Refuge-Canin/Refuge-Canin_Footer.png',
					alt: 'Refuge-Canin Footer'
				}
			]
		},
		technologies: [
			{
				title: 'Astro',
				icon: '/icons/astro.svg'
			},
			{
				title: 'GSAP',
				icon: '/icons/gsap.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.refuge-canin.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.refuge-canin.tags.${key}`]()
			);
		},
		slug: 'refuge-canin-solidaire',
		external_link: 'https://refuge-canin-solidaire-azure.vercel.app/'
	},
	{
		title: 'Porsche',
		get subtitle() {
			return m['projects.porsche.subtitle']();
		},
		get description() {
			return m['projects.porsche.description']();
		},
		images: {
			home: {
				src: '/images/Porsche/Porsche_Home.png',
				alt: 'Porsche Home'
			},
			gallery: [
				{
					src: '/images/Porsche/Porsche_Presentation.png',
					alt: 'Porsche Presentation'
				},
				{
					src: '/images/Porsche/Porsche_Description.png',
					alt: 'Porsche Description'
				},
				{
					src: '/images/Porsche/Porsche_Moteur.png',
					alt: 'Porsche Moteur'
				},
				{
					src: '/images/Porsche/Porsche_Personnalisation.png',
					alt: 'Porsche Personnalisation'
				}
			]
		},
		technologies: [
			{
				title: 'Three.js',
				icon: '/icons/threejs.svg'
			},
			{
				title: 'WebGL',
				icon: '/icons/webgl.svg'
			},
			{
				title: 'Gsap',
				icon: '/icons/gsap.svg'
			},
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.porsche.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.porsche.tags.${key}`]()
			);
		},
		slug: 'porsche',
		external_link: 'https://porsche.maximelust.fr/'
	},
	{
		title: 'Too Well Stolen',
		get subtitle() {
			return m['projects.too-well-stolen.subtitle']();
		},
		get description() {
			return m['projects.too-well-stolen.description']();
		},
		images: {
			home: {
				src: '/images/Too-Well-Stolen/Too-Well-Stolen_Home.png',
				alt: 'Too Well Stolen Home'
			},
			gallery: [
				{
					src: '/images/Too-Well-Stolen/Too-Well-Stolen_Start.png',
					alt: 'Too Well Stolen Start'
				},
				{
					src: '/images/Too-Well-Stolen/Too-Well-Stolen_Painting.png',
					alt: 'Too Well Stolen Painting'
				},
				{
					src: '/images/Too-Well-Stolen/Too-Well-Stolen_Suspect.png',
					alt: 'Too Well Stolen Suspect'
				},
				{
					src: '/images/Too-Well-Stolen/Too-Well-Stolen_Interrogated.png',
					alt: 'Too Well Stolen Interrogated'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/svelte.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.too-well-stolen.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.too-well-stolen.tags.${key}`]()
			);
		},
		slug: 'too-well-stolen',
		external_link: 'https://too-well-stolen.vercel.app/'
	},
	{
		title: 'Bovelo',
		get subtitle() {
			return m['projects.bovelo.subtitle']();
		},
		get description() {
			return m['projects.bovelo.description']();
		},
		images: {
			home: {
				src: '/images/Bovelo/Bovelo_Home.png',
				alt: 'Bovélo Home'
			},
			gallery: [
				{
					src: '/images/Bovelo/Bovelo_Footer.png',
					alt: 'Bovélo Footer'
				},
				{
					src: '/images/Bovelo/Bovelo_App_Home.png',
					alt: 'Bovélo App Home'
				},
				{
					src: '/images/Bovelo/Bovelo_App_Station.png',
					alt: 'Bovélo App Station'
				},
				{
					src: '/images/Bovelo/Bovelo_App_Bike.png',
					alt: 'Bovélo App Bike'
				}
			]
		},
		technologies: [
			{
				title: 'Figma',
				icon: '/icons/figma.svg'
			},
			{
				title: 'HTML',
				icon: '/icons/html.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.bovelo.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.bovelo.tags.${key}`]()
			);
		},
		slug: 'bovelo',
		external_link: 'https://bovelo.netlify.app/'
	},
	{
		title: 'CAPC',
		get subtitle() {
			return m['projects.capc.subtitle']();
		},
		get description() {
			return m['projects.capc.description']();
		},
		images: {
			home: {
				src: '/images/CAPC/CAPC_Home.png',
				alt: 'CAPC Home'
			},
			gallery: [
				{
					src: '/images/CAPC/CAPC_Evenement.png',
					alt: 'CAPC Evenement'
				},
				{
					src: '/images/CAPC/CAPC_ComingSoon.png',
					alt: 'CAPC Coming Soon'
				},
				{
					src: '/images/CAPC/CAPC_Exposition.png',
					alt: 'CAPC Exposition'
				},
				{
					src: '/images/CAPC/CAPC_Footer.png',
					alt: 'CAPC Footer'
				}
			]
		},
		technologies: [
			{
				title: 'HTML',
				icon: '/icons/html.svg'
			},
			{
				title: 'Bootstrap',
				icon: '/icons/bootstrap.svg'
			}
		],
		get context() {
			return m['projects.capc.context']();
		},
		tagKeys: ['one', 'two'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.capc.tags.${key}`]()
			);
		},
		slug: 'capc',
		external_link: 'https://capc.netlify.app/#'
	},
	{
		title: 'Spooon',
		get subtitle() {
			return m['projects.spooon.subtitle']();
		},
		get description() {
			return m['projects.spooon.description']();
		},
		images: {
			home: {
				src: '/images/Spooon/Spooon_Home.png',
				alt: 'Spooon Home'
			},
			gallery: [
				{
					src: '/images/Spooon/Spooon_Energie.png',
					alt: 'Spooon Energie'
				},
				{
					src: '/images/Spooon/Spooon_Depense.png',
					alt: 'Spooon Depense'
				},
				{
					src: '/images/Spooon/Spooon_Gain.png',
					alt: 'Spooon Gain'
				},
				{
					src: '/images/Spooon/Spooon_About.png',
					alt: 'Spooon About'
				}
			]
		},
		technologies: [
			{
				title: 'SvelteKit',
				icon: '/icons/sveltekit.svg'
			},
			{
				title: 'Tailwind',
				icon: '/icons/tailwind.svg'
			}
		],
		get context() {
			return m['projects.spooon.context']();
		},
		tagKeys: ['one'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.spooon.tags.${key}`]()
			);
		},
		slug: 'spooon',
		external_link: 'https://app.spooon.mmibordeaux.com/'
	},
	{
		title: 'The Mornful Painter',
		get subtitle() {
			return m['projects.the-mornful-painter.subtitle']();
		},
		get description() {
			return m['projects.the-mornful-painter.description']();
		},
		images: {
			home: {
				src: '/images/The-Mornful-Painter/The-Mornful-Painter_Home.png',
				alt: 'The Mornful Painter Home'
			},
			gallery: [
				{
					src: '/images/The-Mornful-Painter/The-Mornful-Painter_Gameplay.png',
					alt: 'The Mornful Painter Gameplay'
				},
				{
					src: '/images/The-Mornful-Painter/The-Mornful-Painter_Ladder.png',
					alt: 'The Mornful Painter Ladder'
				},
				{
					src: '/images/The-Mornful-Painter/The-Mornful-Painter_Painting.png',
					alt: 'The Mornful Painter Painting'
				},
				{
					src: '/images/The-Mornful-Painter/The-Mornful-Painter_Mirror.png',
					alt: 'The Mornful Painter Mirror'
				}
			]
		},
		technologies: [
			{
				title: 'Unity',
				icon: '/icons/unity.svg'
			},
			{
				title: 'Itchi.io',
				icon: '/icons/itchio.svg'
			}
		],
		get context() {
			return m['projects.the-mornful-painter.context']();
		},
		tagKeys: ['one', 'two', 'three'] as const,
		get tags() {
			return this.tagKeys.map((key) =>
				(m as Record<string, () => string>)[`projects.the-mornful-painter.tags.${key}`]()
			);
		},
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
	tagKeys?: readonly string[];
	tags: string[];
	slug: string;
	external_link?: string;
}
