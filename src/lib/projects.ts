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
		title: 'Porsche',
		get subtitle() {
			return m['projects.porsche.subtitle']();
		},
		get description() {
			return m['projects.porsche.description']();
		},
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
