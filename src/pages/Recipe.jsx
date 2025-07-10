import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LogoImg from '../assets/cookify logo.png';
import UserLogin from '../assets/user login 2.png';
import BackgroundImg from '../assets/Food Images Recipe.avif';

import LemonRiceImg from '../assets/Recipes/Rice/Veg/Lemon Rice.jpg';
import CurdRiceImg from '../assets/Recipes/Rice/Veg/Curd Rice.jpeg';
import VegFriedRiceImg from '../assets/Recipes/Rice/Veg/Veg Fried Rice.jpg';
import RiceCutletImg from '../assets/Recipes/Rice/Veg/Rice cutlet.jpg';
import ChickenFriedRiceImg from '../assets/Recipes/Rice/Non Veg/Chicken Fried Rice.jpg';
import EggFriedRiceImg from '../assets/Recipes/Rice/Non Veg/Egg Fried Rice.jpg';

import AlooParathaImg from '../assets/Recipes/Potato/Veg/Aloo Paratha.webp';
import PotatoSandwich from '../assets/Recipes/Potato/Veg/Potato Sandwich.jpg';
import MasalaDosaImg from '../assets/Recipes/Potato/Veg/Masala Dosa.jpg';
import PotatoBallsImg from '../assets/Recipes/Potato/Veg/Potato Balls.jpeg';
import PotatoCutletImg from '../assets/Recipes/Potato/Veg/Potato Cutlet.avif';

import ChickenSandwichImg from '../assets/Recipes/Chicken/Non Veg/Chicken Sandwich.jpg';
import ChickenWrapImg from '../assets/Recipes/Chicken/Non Veg/Chicken Wrap.jpeg';

import VegRotiImg from '../assets/Recipes/Chapati/Veg/Veg Chapati.jpg';
import EggRotiImg from '../assets/Recipes/Chapati/Non Veg/Egg Chapati.webp';

import VegPastaImg from '../assets/Recipes/Pasta/Veg/Veg Pasta.jpg';
import EggPastaImg from '../assets/Recipes/Pasta/Non Veg/Egg Pasta.jpg';

import PaneerSandwichImg from '../assets/Recipes/Paneer/Veg/Paneer Sandwich.jpg';
import PaneerTikkaWrapImg from '../assets/Recipes/Paneer/Veg/Paneer Tikka Wrap.jpg';

import EggCurryImg from '../assets/Recipes/Egg/Non Veg/Egg Curry.jpg';
import EggBiryaniImg from '../assets/Recipes/Egg/Non Veg/Egg Biryani.webp';
import EggSandwichImg from '../assets/Recipes/Egg/Non Veg/Egg Sandwich.jpeg';

import VegGravyImg from '../assets/Recipes/Veggies/Veg/Veg Gravy.jpg';
import VegSaladImg from '../assets/Recipes/Veggies/Veg/Veg Salad.jpeg';
import OmeletStuffImg from '../assets/Recipes/Veggies/Non Veg/Omelet Stuff.webp';

import IdliUpmaImg from '../assets/Recipes/Idli/Veg/Idli Upma.jpg';
import EggIdliImg from '../assets/Recipes/Idli/Non Veg/Egg Idli.jpg';

import BreadRollsImg from '../assets/Recipes/Bread/Veg/Bread Rolls.jpg';
import BreadHalwaImg from '../assets/Recipes/Bread/Veg/Bread Halwa.webp';

const recipeDetails = {
    'Lemon Rice': {
        image: LemonRiceImg,
        ingredients: [
            '2 cups cooked rice',
            '2 tbsp Oil',
            '1 tsp Mustard seeds',
            '1 tsp urad dal',
            '2 - 3 dry red or green chillies',
            '12 - 15 Curry leaves',
            '1/2 tsp turmeric powder',
            'a pinch of asafoetida',
            '2 tbsp peanuts',
            '2 tbsp Cashews',
            'Lemon Juice from 1 - 2 lemons',
            'Salt as required'
        ],
        instructions: [
            'Ensure rice is cooked, cooled and grains are separate.',
            'Heat oil in a pan on medium heat.',
            'Add mustard seeds, urad dal, dried chillies, curry leaves, and a pinch of asafoetida one after the other.',
            'Fry until dal turns golden yellow.',
            'Stir in peanuts and cashews, saute until they get a light roast.',
            'Sprinkle turmeric and briefly mix.',
            'Add cooked rice to the pan and gently toss to coat evenly.',
            'Pour lemon juice and sprinkle salt and mix carefully.',
            'Now take off the heat and fluff the rice.',
            'Serve and enjoy your delicious meal!'
        ]
    },

    'Curd Rice': {
        image: CurdRiceImg,
        ingredients: [
            '1/2 cup raw rice',
            '1 to 1.5 cup plain yogurt',
            '1/2 to 3/4 cup milk',
            'Salt required amount',
            '1 tbsp butter or oil',
            '2 tbsp oli of ghee',
            '1 tsp mustard seeds',
            '1/2 tsp urad dal',
            'Few curry leaves',
            '1-2 dried or green chillies, finely chopped',
            'Pinch of asafoetida'
        ],
        instructions: [
            'Cook the rice with a soft texture for a slightly mushy texture.',
            'Genlty mash it.',
            'Add yogurt and milk to the rice, stirring to combine. Adjust for creaminess.',
            'Add butter if desired',
            'Heat oil/ghee. Add mustard seeds and add urad dal, chillies, curry leaves and a pinch of asafoetida.',
            'Saute untl dal is golden.',
            'Now gently mix.',
            'Serve and enjoy your delicious meal!'
        ]
    },

    'Veg Fried Rice': {
        image: VegFriedRiceImg,
        ingredients: [
            '3 cups cooked rice',
            '3 tbsp vegetable oil', 
            '3 - 4 garlic cloves, minced',
            '2 cups mixed veggies (carrots, green peas, bell peppers; you can add beans, corn, broccoli)',
            '2 - 3 spring onions, green and white parts separated and chopped',
            '3 tbsp light soy sauce',
            '1 tbsp sesame oil',
            '1/2 tsp white or black pepper',
            '1 tsp vinegar',
            'Salt as required'
        ],
        instructions: [
            'Cook rice, spread on a tray and chill.',
            'Dice veggies uniformly; thaw any frozen first. Chop spring onions, keeping whites apart from greens.',
            'In a wok/skillet over high heat, add vegetable oil. Toss in garlic (and ginger if using) and sauté ~30 sec till fragrant.',
            'Add white parts of spring onions followed by mixed veggies. Stir-fry 3 - 4 min until crisp-tender.',
            'Add cold rice, using spatula to break clumps.',
            'Pour soy sauce and vinegar, sprinkle pepper and salt; toss 2 - 3 min on high flame.',
            'Drizzle sesame oil, toss in green parts of spring onions.',
            'Serve and enjoy your delicious meal!'
        ]
    },

    'Rice Cutlet': {
        image: RiceCutletImg,
        ingredients: [
            '1.5 cups cooked rice',
            '1 boiled and grated potato',
            '1/2 cup mixed vegetables, finely chopped (onions, carrots, capsicum, beans, peas, etc.',
            '2 green chilies & 1 tsp ginger, finely chopped or grated',
            'Fresh coriander, chopped',
            '1/2 tsp turmeric, 1 tsp red chili powder, 1/2 tsp roasted cumin powder, 1/2 tsp garam masala or chaat masala',
            '2 tbsp corn flour or rice flour; optionally 2 tbsp corn flour + breadcrumbs',
            'Oil',
            'Salt as required'
        ],
        instructions: [
            'In a large bowl, lightly mash the cooked rice.',
            'Add grated potato, mixed veggies, green chilies, ginger, coriander, spices, salt, and flours.',
            'Lightly oil your palms. Portion the mixture into 10 - 12 balls and flatten into ~½-inch thick discs. If mixture feels too loose, add a little more corn/rice flour .',
            'For extra crispness, dust with breadcrumbs or roll through a slurry of corn flour and then breadcrumbs .',
            'In a skillet or tava, heat oil over medium-high. Add cutlets in batches and shallow-fry until golden brown and crisp on both sides.',
            'Drain on paper towels.',
            'Serve with green coriander chutney, tomato ketchup and enjoy your snack!'
        ]
    },

    'Chicken Fried Rice': {
        image: ChickenFriedRiceImg,
        ingredients: [
            '3 cups cooked, cold long-grain or jasmine rice',
            '200 - 250 g boneless chicken, diced or shredded',
            '2 eggs, beaten with a pinch of salt',
            '2 - 3 Tbsp oil',
            '3 garlic cloves',
            '1/2 medium onion, chopped',
            '1 cup mixed veggies',
            '2 Tbsp soy sauce',
            '1 tsp vinegar',
            'Salt & pepper',
            'Chopped spring onions'
        ],
        instructions: [
            'Heat 1 Tbsp oil over high heat. Pour in beaten eggs, scramble lightly until just set. Remove and reserve .',
            'In the same pan/wok, add more oil. Sauté garlic & onion until fragrant, then add chicken to brown and reheat.',
            'Add mixed veggies and spring onion whites. Stir-fry quickly on high heat until crisp-tender',
            'Add cold rice, breaking apart clumps.',
            'Stir in soy sauce, vinegar, pepper',
            'Fold in scrambled eggs and chicken until evenly mixed and heated through.',
            'Adjust salt/pepper as needed.',
            'Toss in chopped spring onion greens',
            'Serve it and Enjoy your meal!'
        ]
    },

    'Egg Fried Rice': {
        image: EggFriedRiceImg,
        ingredients: [
            '3 cups cooked, cold long-grain or jasmine rice',
            '2 eggs, beaten with a pinch of salt',
            '2 - 3 Tbsp oil',
            '3 garlic cloves',
            '1/2 medium onion, chopped',
            '1 cup mixed veggies',
            '2 Tbsp soy sauce',
            '1 tsp vinegar',
            'Salt & pepper',
            'Chopped spring onions'
        ],
        instructions: [
            'Heat 1 Tbsp oil over high heat. Pour in beaten eggs, scramble lightly until just set. Remove and reserve .',
            'In the same pan/wok, add more oil. Sauté garlic & onion until fragrant.',
            'Add mixed veggies and spring onion whites. Stir-fry quickly on high heat until crisp-tender',
            'Add cold rice, breaking apart clumps.',
            'Stir in soy sauce, vinegar, pepper',
            'Fold in scrambled eggs and chicken until evenly mixed and heated through.',
            'Adjust salt/pepper as needed.',
            'Toss in chopped spring onion greens',
            'Serve it and Enjoy your meal!'
        ]
    },

    'Aloo Paratha': {
        image: AlooParathaImg,
        ingredients: [
            '2 cups whole-wheat flour',
            '1/2 tsp salt',
            '1 Tbsp oil or ghee',
            '3/4 cup water',
            '3 - 4 medium potatoes, boiled and mashed',
            '1 - 2 green chilies, finely chopped',
            '1/4 - 1/2 tsp red chili powder',
            '1/4 - 1/2 tsp garam masala',
            'Salt as required'
        ],
        instructions: [
            'Mix flour, salt, and oil. Add water gradually to form a soft, pliable dough. Knead well, cover, and let rest for 20-30 min',
            'Mash boiled potatoes until smooth. Mix in chilies, chili powder, garam masala, amchur, salt, and coriander. Form the mixture into 8 golf-ball sized balls.',
            'Divide dough into 8 balls. Roll each into disc. Place one potato ball in the center, bring edges together, seal, and flatten gently. Dust lightly and roll into round paratha',
            'Heat a tava or skillet over medium-high heat. Cook each paratha, applying oil or ghee per side—until golden spots appear. Press edges for even cooking',
            'Enjoy it with a cup of tea'
        ]
    },

    'Potato Sandwich': {
        image: PotatoSandwich,
        ingredients: [
            '8 slices of bread',
            'Butter/ghee',
            '3-4 medium boiled potatoes, mashed',
            '1 small onion, finely chopped',
            '1-2 green chilies, finely chopped',
            '1 tsp cumin seeds',
            '1/2 tsp turmeric powder',
            '1/2 - 1 tsp red chili powder',
            '1/4 - 1/2 tsp chaat masala or garam masala',
            'A handful of fresh coriander, chopped',
            'Salt as required',
            '1-2 tsp oil'
        ],
        instructions: [
            'Heat oil in a pan, add cumin seeds until they splutter.',
            'Add onions and green chilies; sauté until onions turn translucent.',
            'Sprinkle turmeric, chili powder, and masala; stir briefly.',
            'Add mashed potatoes and salt; mix well. Cook for 3-4 minutes until everything blends.',
            'Stir in chopped coriander and remove from heat. Let it cool slightly.',
            'Spread butter or ghee on one side of each bread slice.',
            'Spread green chutney or tomato ketchup on inner sides.',
            'Place a generous spoonful of potato filling on one slice; top with another slice, buttered-side out.',
            'Grill on a sandwich maker, skillet, or tawa (with a weight on top) until both sides are golden and crispy.',
            'Remove, slice diagonally, and serve hot.'
        ]
    },

    'Masala Dosa Filling': {
        image: MasalaDosaImg,
        ingredients: [
            'Boiled potatoes: 4-5 medium', 
            'Oil or ghee: 2-3 tbsp',
            'Mustard seeds: 1 tsp',
            'Cumin seeds: 1/2 tsp',
            'Chana dal: 1 tsp',
            'Urad dal: 3.4 tsp',
            'asafoetida: a pinch',
            'curry leaves: 8 - 10',
            'green chillies: 2-4 chopped',
            'onion: 1',
            'ginger: 1/2 - 1 tsp',
            'salt as required',
            'lemon juice: 1 tsp',
            'fresh coriander: 2 tbsp chopped'
        ],
        instructions: [
            'Boil until tender, peel, and roughly mash—maintaining some texture.',
            'Heat oil/ghee. Add mustard and cumin seeds; let them pop. Add chana dal and urad dal; fry until light golden. Stir in asafoetida and curry leaves.',
            'Add slit green chilies, sliced onions, and ginger (if using). Sauté till onions soften. Sprinkle turmeric and salt.',
            'Add mashed potatoes, gently tossing to coat. Splash 2-4 tbsp water, cover with lid, and cook 2-3 minutes to meld flavors.',
            'Stir in lemon juice (or sugar) and chopped coriander. Adjust seasoning.',
            'Make a dosa with adding masala filling and serve it with sambar and chutneys.'
        ]
    },

    'Potato Balls': {
        image: PotatoBallsImg,
        ingredients: [
            '2 cups boiled, shredded potatoes',
            '3 Tbsp corn starch or rice flour, ½ tsp salt',
            '1 tsp grated ginger, 1 Tbsp chopped green chili',
            'Breadcrumbs or cornflake crumbs for coating'
        ],
        instructions: [
            'Mix potatoes with starch, salt, ginger & chili.',
            'Roll into small balls.',
            'Deep- or shallow-fry in hot oil until crisp and golden, turning occasionally.',
            'Drain on paper towel. Serve with chutney.'
        ]
    },

    'Potato Cutlet': {
        image: PotatoCutletImg,
        ingredients: [
            'Boiled potatoes: 4',
            '1 small onion, finely chopped',
            '1-2 green chillies',
            '1 tsp ginger',
            '1/2 tsp garlic',
            '1/2 tsp cumin seeds',
            '1 tsp coriander powder',
            '1/2 tsp red chilli powder',
            'salt as required',
            'fresh coriander leaves',
            '1/2 tsp garam masala or chaat masala',
            'corn flour, breadcrumbs as required'
        ],
        instructions: [
            'In a pan, heat a little oil; add cumin seeds (if using) and sauté onions, chilies, ginger, (and garlic). Cook until onions soften.',
            'Add mashed potatoes, spices (coriander, cumin, chili, garam masala, amchur), salt, and coriander leaves. Mix well and cook briefly. Let it cool slightly.',
            'Form the mixture into small balls and flatten them into patties.',
            'If mixture is too soft, add a bit of corn flour or breadcrumbs to bind.',
            'Dip patties in a flour-water slurry, then coat evenly with breadcrumbs.',
            'Heat oil in a frying pan.',
            'Shallow- or deep-fry patties over medium heat until golden and crisp on both sides (~3-4 minutes per side). Drain on paper towels.'
        ]
    },

    'Chicken Wrap': {
        image: ChickenWrapImg,
        ingredients: [
            '2 cooked, sliced or shredded chicken',
            '4 large flour or whole-wheat tortillas',
            '2 cups lettuce, chopped',
            '1 cup diced tomato',
            '1/2 small red onion, thinly sliced',
            '1 cup shredded cheese',
            '1/2 cup mayo'
        ],
        instructions: [
            'Warm tortillas lightly on a dry skillet or microwave.',
            'Divide lettuce, tomato, onion, cheese, and chicken among tortillas.',
            'Drizzle with sauce of choice.',
            'Roll up like burritos; press and grill briefly (1-2 min/side) for a crisp exterior.',
            'Slice in half and serve.'
        ]
    },

    'Chicken Sandwich': {
        image: ChickenSandwichImg,
        ingredients: [
            '2 boneless chicken breasts, pounded to even thickness',
            'pickle juice, buttermilk, all-purpose flour, cornstarch, paprika, salt, pepper, garlic & onion powders',
            'peanut oil for frying; brioche or sandwich buns',
            'pickles, mayo (or honey mustard/ranch), lettuce, tomato, red onion'
        ],
        instructions: [
            'Marinate chicken in pickle-brine or buttermilk mixture. Dredge twice in flour mix.',
            ' Heat oil to ~375°F; fry chicken until golden and 165°F internal.',
            'Lightly butter and toast.',
            'Assemble: Bun, sauce, chicken, pickles and optional lettuce/tomato. Serve hot.'
        ]
    },

    'Veggies Mixed Chapati/Roti': {
        image: VegRotiImg,
        ingredients: [
            '3-4 leftover rotis/chapatis, torn into small squares or strips',
            '1 small onion, chopped',
            '1 green chili, sliced',
            'A handful of veggies: peas, carrot, beans, capsicum, cabbage',
            '1 tsp mustard seeds, 1/2 tsp cumin seeds',
            '8-10 curry leaves',
            '1/4 tsp turmeric powder',
            'Salt to taste',
            '1-2 tbsp oil'
        ],
        instructions: [
            'Heat oil, crackle mustard & cumin seeds, add dals, curry leaves & green chili.',
            'Sauté onion until translucent. Add turmeric and salt.',
            'Toss in chopped veggies and stir-fry until just tender.',
            'Add torn rotis, stir well for 1-2 minutes so they absorb flavors.',
            'Garnish with peanuts/coriander/lemon as desired. Serve hot.'
        ]
    },

    'Egg Mixed Chapati/Roti': {
        image: EggRotiImg,
        ingredients: [
            '4-6 leftover rotis, chopped into small pieces',
            '2 eggs, beaten with salt & pepper',
            '1 small onion, chopped',
            '1 green chili, sliced',
            'A handful of potatoes or peas',
            '1 tsp mustard seeds, 1/2 tsp cumin seeds',
            'A pinch of asafoetida & curry leaves',
            '1 tbsp oil, chopped coriander'
        ],
        instructions: [
            'Scramble the beaten eggs into a thin omelet; chop and set aside.',
            'Heat oil, crackle mustard & cumin seeds, add curry leaves, chili, onion, (veggies), sauté briefly.',
            'Toss in chopped rotis and the omelet pieces; stir 3-5 min until rotis absorb flavors and crisp slightly.',
            'Finish with coriander and enjoy hot'
        ]
    },

    'Veg Pasta': {
        image: VegPastaImg,
        ingredients: [
            'Pasta (penne or fusilli)',
            'Mixed vegetables (zucchini, bell peppers, onions, cherry tomatoes)',
            'Olive oil, garlic, fresh basil, salt & pepper',
            'Feta or Parmesan for topping'
        ],
        instructions: [
            'Roast diced veggies at ~200 °C (400 °F) for 20-30 min with olive oil, salt, and pepper.',
            'Cook pasta al dente; toss with roasted vegetables, minced garlic, fresh herbs, and olive oil.',
            'Top with feta (veg-friendly) or Parmesan before serving.'
        ]
    },

    'Egg Pasta': {
        image: EggPastaImg,
        ingredients: [
            '1/2 cup cooked pasta (penne, gemelli, etc.)',
            '2 eggs',
            '1 small onion, 1 tomato, 1/4 cup green capsicum',
            '1/2 tsp ginger-garlic paste',
            '1/2 tsp red chilli powder, 1/2 tsp garam masala, 1/4 tsp cumin seeds',
            'salt as required',
            '2 tsp oil',
            'Chopped veggies like carrots, peas, etc...'
        ],
        instructions: [
            'Boil pasta; drain and set aside.',
            'Heat oil, crackle cumin; sauté onion, ginger-garlic paste, capsicum, tomato.',
            'Add spices, cook till tomato softens.',
            'Scramble the eggs in the pan, mix in cooked pasta; toss for a few minutes until well combined. Garnish and serve hot.'
        ]
    },

    'Paneer Sandwich': {
        image: PaneerSandwichImg,
        ingredients: [
            'Bread: 8 slices',
            '1 cup crumbled paneer',
            '1/2 small onion, finely chopped',
            '1/2 bell pepper, finely chopped',
            '1 clove garlic + 1/4 garlic, minced',
            '1/2 tsp chili powder, 1 tsp garam masala',
            '2 tbsp tomato ketchup',
            'butter'
        ],
        instructions: [
            'Heat a little oil, sauté onion, bell pepper, garlic, and ginger until soft.',
            'Mix in chili powder, garam masala, then add crumbled paneer and ketchup.',
            'Cook 2-3 min. Stir in green chutney and remove from heat.',
            'Butter one side of each bread slice. Spread chutney (or mayo) on the inside. Divide the paneer filling among 4 slices, top with the remaining slices.',
            'Heat a panini press or grill pan and toast until golden brown and crisp, about 2-3 min per side.',
            'Cheese slices can be added before grilling if desired.'
        ]
    },

    'Paneer Tikka Wrap': {
        image: PaneerTikkaWrapImg,
        ingredients: [
            '250-300g paneer',
            '1 cup thick yogurt',
            '1 tbsp ginger-garlic paste',
            '1 tbsp red chili powder, 1 tbsp garam masala',
            '1 tsp cumin powder, 1 tsp coriander powder, 1 tsp turmeric powder',
            '1 tsp chaat masala',
            '1 tsp lemon juice',
            '1 tsp kasuri methi',
            'Salt as required, 1-2 tbsp oil',
            'Chopped Veggies like onion, tomatoes, lettuce, etc...',
            'butter, green chutney'
        ],
        instructions: [
            'Mix paneer + onion + bell pepper with marinade ingredients thoroughly. Let sit for 15-30 minutes.',
            'Heat a skillet with a bit of oil. Add marinated paneer & veggies; sauté until the edges char.',
            'Warm your tortilla/paratha, spread a layer of green chutney, then top with the paneer-veg mixture.',
            'Add sliced onions or slaw. Sprinkle chaat masala for extra zing.',
            'Roll it up tightly; brush with butter/oil and toast on a hot griddle or sandwich press till the outside is golden and slightly crisp.'
        ]
    },

    'Egg Curry': {
        image: EggCurryImg,
        ingredients: [
            '4-6 boiled eggs, peeled',
            '2 onions, finely chopped',
            '2 tomatoes, chopped',
            '1 tsp ginger-garlic paste',
            '1-2 green chilies',
            '1 tsp cumin unstable_setDevServerHooks, 1 bay leaf',
            '1 tsp turmeric powder, 1 tsp red chili powder, 1 tsp coriander powder',
            '1/2 tsp garam masala',
            'salt as required',
            '2-3 tbsp oil',
            'fresh coriander leaves'
        ],
        instructions: [
            'Boil eggs to a firm set (~8 mins), peel and optionally slit or lightly fry for flavor.',
            'Heat oil, crackle cumin & bay leaf, sauté onions until golden. Add ginger-garlic paste, then tomatoes—cook till oil separates.',
            'Add turmeric, chili, coriander powders; cook until fragrant.',
            'Add water (~1 cup), bring to boil. Gently slide in eggs, simmer 5-7 mins for flavor infusion.',
            'Sprinkle garam masala, garnish with coriander.'
        ]
    },

    'Egg Sandwich': {
        image: EggSandwichImg,
        ingredients: [
            '3-5 boiled eggs, peeled and sliced',
            '6-8 slices bread',
            '2-3 tbsp butter',
            'green chutney: coriander + mint leaves, garlic, cumin, lemon, green chili',
            'chaat masala and roasted cumin powder'
        ],
        instructions: [
            'Toast or butter the bread slices.',
            'Spread green chutney on one side.',
            'Layer egg slices, sprinkle chaat/ cumin powder, add veggies (tomato, cucumber, onion).',
            'Top with another bread slice, slice, and serve fresh.'
        ]
    },

    'Egg Biryani': {
        image: EggBiryaniImg,
        ingredients: [
            '4-6 hard boiled eggs',
            '1.5 cups basmati rice, soaked 20-30 mins',
            '1 large onion, finely sliced',
            '1-2 tomatoes',
            '2-3 green chilies',
            '1 tbsp ginger-garlic paste',
            '1/2 tsp turmeric, 1 tsp chili powder, 1 tsp coriander powder, 1 tsp biryani or garam masala',
            '1 bay leaf, 2-3 cloves, 2 cardamom poda, 1 cinnamon piece',
            '1/2 cup yogurt',
            '2 tbsp oil + 1 tnsp ghee',
            'mint and coriander leaved, chopped',
            'Salt as required'
        ],
        instructions: [
            'Sauté onions with whole spices in oil + ghee until golden. Add ginger-garlic paste and tomatoes; cook until soft.',
            'Stir in turmeric, chilli powder, coriander, biryani masala, and yogurt until fragrant.',
            'Gently add boiled eggs, coating them in the masala.',
            'Add drained rice, mint/coriander, and 2.5 cups water. Adjust salt.',
            'Pressure cook (Pot / Instant Pot): 5 min high-pressure + natural release OR normal cooker 1 whistle.',
            'Fluff and garnish with fried onions and mint. Serve hot with raita.'
        ]
    },

    'Quick Salad': {
        image: VegSaladImg,
        ingredients: [
            '1 cup cucumber',
            '1 cup tomato',
            '1/2 cup onion',
            '1/4 cup carrot, bell pepper',
            '1 tbsp lime juice',
            '1 tsp roasted cumin powder',
            '1/2 tsp pepper salt'
        ],
        instructions: [
            'Chop all the vegetables of your choice of size.',
            'Mix all vegetables in a large bowl.',
            'Add lime juice, cumin powder, salt and pepper.',
            'Mix well and serve healthy food.'
        ]
    },

    'Veg Gravy': {
        image: VegGravyImg,
        ingredients: [
            'Mixed veggies: potatoes, carrots, beans, peas, cauliflower, corn',
            '2 onions, 2 tomatoes, ginger-garlic paste',
            'Turmeric, chili powder, coriander powder, garam masala',
            'Salt as required',
            'Oil, cumin seeds, curry leaves',
            'Water as needed, coriander leaves'
        ],
        instructions: [
            'Sauté cumin seeds, onions, ginger-garlic, tomatoes until soft and oil-separates.',
            'Add dry spices and stir for a minute.',
            'Add mixed vegetables, water, and simmer until tender.',
            'Toss in kasuri methi and garnish with fresh coriander.'
        ]
    },

    'Omelet Stuffing': {
        image: OmeletStuffImg,
        ingredients: [
            '2-3 eggs, beaten with a pinch of salt and pepper',
            '1/4 cup finely chopped Onion',
            '1.4 cup chopped bell pepper',
            '1/4 cup sliced mushrooms',
            '1/2 cup spinach',
            'Oil or butter',
            'Salt as required'
        ],
        instructions: [
            'Heat 1 tsp oil in a non-stick pan over medium heat. Add onion first, sauté ~2 min, then add bell pepper and mushrooms.',
            'After 2-3 min, stir in spinach or other greens until just wilted. Season with salt & pepper, then transfer to a bowl.',
            'Whisk eggs (and a splash of milk or water if you like them fluffier',
            'Wipe the pan, add a bit more oil/butter, then pour in the egg mixture. Tilt the pan so eggs form a thin layer and start to set.',
            'Once eggs are mostly set, spread the veggie mixture over one half. Sprinkle cheese on top if using.',
            'Gently fold the omelette over the filling. Cook another minute to melt the cheese and blend flavors. Slide onto a plate, garnish with herbs, and serve hot.'
        ]
    },

    'Idli Upma': {
        image: IdliUpmaImg,
        ingredients: [
            '4-6 leftover idlis, cold and crumbled',
            '1 small onion, chopped',
            '1-2 green chilies, slit or chopped',
            '1/2 cup mixxed veggies',
            '1-2 tbsp oil',
            '1/2 tsp mustard seeds',
            '1/2 tsp urad dal, 1/2 tsp chana dal',
            'curry leaves',
            '1 dry red chili',
            'a pinch of asafoetida',
            '1/4 tsp turmeric',
            'salt as required',
            'lemon juice & fresh coriander'
        ],
        instructions: [
            'Crumble chilled idlis into bite-sized pieces with your hands.',
            'In a pan, heat oil and temper mustard seeds, dals, curry leaves, dry chili, and hing.',
            'Sauté onion and green chilies until onions turn translucent.',
            'Add vegetables (if using) and sauté for 2-3 min until slightly tender.',
            `Sprinkle turmeric and salt, mix in the crumbled idlis, tossing gently to coat. Add a splash of water if it's too dry`,
            'Cook 1-2 min until everything is heated through.',
            'Finish with a squeeze of lemon juice, coriander, and optionally some shredded coconut . Serve hot with chutney or pickle.'
        ]
    },

    'Egg Mixed Idli': {
        image: EggIdliImg,
        ingredients: [
            '4-6 leftover idlis',
            '2 eggs, beaten lightly',
            '1 small onion, finely chopped',
            '1-2 green chillies',
            'optional veggies: tomato chunks, peas, carrot, capsicum',
            '2 tsp oil',
            '1/2 tsp mustard seeds, 1/2 tsp urad dal',
            'pinch of asafoetida',
            'few curry leaves',
            '1/4 tsp turmeric',
            'salt as required'
        ],
        instructions: [
            'Crumble idlis into bite-sized pieces using your hands.',
            'In a pan, heat oil. Add mustard seeds and urad dal; once they sputter, throw in curry leaves, hing, onion, and green chilies.',
            'Sauté on medium until onions turn translucent.',
            'Add optional vegetables and turmeric, cook until veggies soften slightly.',
            'Push veggies to the side, pour beaten eggs into the empty space. Let it set slightly, scramble gently until just cooked.',
            'Mix in crumbled idlis, salt, and toss for 2-3 minutes until heated through and flavors meld.',
            'Finish with chopped coriander and a splash of lemon juice, if desired. Serve hot.'
        ]
    },

    'Bread Halwa': {
        image: BreadHalwaImg,
        ingredients: [
            '4-7 slices bread, edges trimmed and cut into cubes',
            '3-6 tbsp ghee',
            '1 cup full-fat milk',
            '1/4 cup sugar',
            '1.4 tsp cardamom powder',
            'a few cashews, almonds, raisins'
        ],
        instructions: [
            'Heat ~1 Tbsp ghee, fry cashews/raisins until golden, then set aside.',
            'In same pan, add another ~2-3 Tbsp ghee; roast bread cubes until crisp and golden.',
            'Pour in milk (and optional condensed milk or khoya); simmer until bread turns soft and absorbs liquid.',
            'Add sugar, cardamom, and stir until sugar dissolves; cook till halwa thickens & starts leaving pan edges.',
            'Stir in fried nuts; optionally drizzle remaining ghee for gloss. Serve hot.'
        ]
    },

    'Bread Rolls': {
        image: BreadRollsImg,
        ingredients: [
            '3 large boiled potatoes, peeled & mashed',
            '1 small onion, finely chopped',
            '1/2 cup mixed veggies',
            '2 tbsp chopped coriander',
            '1/2 tsp garam masala',
            'chili powder, salt and pepper',
            '6 bread slices',
            'water, breadcrumbs',
            'Oil as required'
        ],
        instructions: [
            'Sauté onions and mixed veggies till tender. Combine with mashed potatoes, spices, coriander. Mix thoroughly.',
            'Flatten each bread slice using a rolling pin. Lightly dip in water and squeeze to make pliable. Place a small portion of filling at one end. Roll tightly and seal the edge with water.',
            'Heat oil over medium heat. Fry rolls a few at a time until golden brown on all sides. Drain on paper towels.',
            'ENjoy hot with tomato ketchup, green chutney, or spicy sauces'
        ]
    } 

};

export default function Recipe() {
    const location = useLocation();
    const navigate = useNavigate();
    const { leftover, type, recipe } = location.state || {};

    const recipeData = recipeDetails[recipe];

    return (
        <div className='min-h-screen bg-cover bg-center p-6' style = {{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${BackgroundImg})`}}>
            {/* Header */}
            <div className='flex justify-between items-center mb-8'>
                <img src={LogoImg} alt='Cookify Logo' className='-ml-10 w-40 h-auto -mt-10' />
                <img src={UserLogin} alt='User Login' className='w-14 h-14 mb-5 -mt-10' />
            </div>

            {/* Main Content */}
            <div className='bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto space-y-6'>
                <h1 className='text-3xl font-bold text-center text-gray-800'>
                    Your Delicious {recipe}
                </h1>

                {/* Image */}
                <div className='flex justify-center'>
                    <img
                        src={recipeData.image}
                        alt={recipe}
                        className='w-full max-w-md rounded-xl shadow'
                    />
                </div>

                {/* Ingredients */}
                <div>
                    <h2 className='text-xl font-semibold mb-2'>Ingredients</h2>
                    <ul className='list-disc list-inside space-y-1'>
                        {recipeData.ingredients.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div>
                    <h2 className='text-xl font-semibold mb-2'>Instructions</h2>
                    <ol className='list-decimal list-inside space-y-1'>
                        {recipeData.instructions.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Back Button */}
            <div className='text-center mt-8'>
                <button
                    onClick={() => navigate('/leftover')}
                    className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold'
                >
                    Generate New Recipe
                </button>
            </div>
        </div>
    );
}