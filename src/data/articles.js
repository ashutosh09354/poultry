// Educational content. General guidance only: it is not veterinary advice and figures are typical ranges,
// not targets. Farms should follow their breed supplier's management guide and local veterinary advice.
export const articleCategories = [
  "Farm management",
  "Broiler and layer basics",
  "Biosecurity and hygiene",
  "Egg handling",
  "Buying and listings",
];

const articles = [
  {
    slug: "broiler-farming-basics",
    title: "Broiler farming basics: from chick placement to market",
    category: "Broiler and layer basics",
    featured: true,
    summary: "The stages of a broiler batch, what the first week demands, and which numbers growers track.",
    sections: [
      { id: "overview", heading: "How a broiler batch works", paragraphs: [
        "Broilers are meat chickens bred to grow quickly. A farm receives day-old chicks, raises them for several weeks, then sells the whole batch at once. After the sale the house is cleaned and rested before the next batch arrives. This repeating cycle is why planning and timing matter as much as feeding.",
      ]},
      { id: "brooding", heading: "The first week sets the batch", paragraphs: [
        "Day-old chicks cannot regulate their own body temperature, so the house must be warm, dry and ready before they arrive. Breed suppliers publish a brooding temperature schedule that starts warm and steps down as the chicks feather. Follow the schedule that comes with your chicks rather than a generic number.",
        "Watch the birds as well as the thermometer. Chicks that huddle under the heat source are too cold, and chicks that keep away from it and pant are too warm. An even spread across the floor usually means the temperature is about right.",
      ], bullets: ["Pre-heat the house before chicks arrive", "Check feed and water are at chick height from day one", "Keep litter dry and loose", "Record mortality every day"] },
      { id: "growing", heading: "Growing out the flock", paragraphs: [
        "As birds grow they need more space, more water points and good ventilation. Overcrowding and poor air quality are common causes of poor performance, so stocking density should follow the guidance for your housing type and climate.",
        "Clean water is available at all times and is checked daily. Feed is stored dry, off the floor and away from pests, and a change of feed type is made on the schedule your feed supplier recommends.",
      ]},
      { id: "numbers", heading: "Numbers worth tracking", paragraphs: [
        "Most growers keep a small set of figures for every batch so they can compare one batch with the next.",
      ], bullets: ["Mortality (daily and cumulative)", "Feed used and feed conversion ratio", "Average bird weight at sale", "Days to market", "Litter and ventilation notes"] },
      { id: "health", heading: "When something looks wrong", paragraphs: [
        "Unusual deaths, sudden drops in feed or water intake, or birds that look unwell should be discussed with a qualified poultry veterinarian. This guide does not cover diagnosis or treatment.",
      ]},
    ],
  },
  {
    slug: "layer-farming-basics",
    title: "Layer farming basics: raising hens for eggs",
    category: "Broiler and layer basics",
    featured: true,
    summary: "How a layer flock is raised, what changes at point of lay, and why light and records matter.",
    sections: [
      { id: "overview", heading: "A longer cycle than broilers", paragraphs: [
        "Layer farms keep hens for egg production. Unlike broilers, which are sold after weeks, a layer flock is raised through a growing stage and then kept in production for many months. The farm's income depends on steady egg numbers over a long period, so consistency matters more than speed.",
      ]},
      { id: "stages", heading: "Growing and laying stages", paragraphs: [
        "Pullets are raised first to reach a target body weight and condition. They move into the laying house shortly before they begin to lay, which is commonly around the late teens in weeks of age. Feed is changed to a layer formulation that supports egg production and shell quality.",
      ], bullets: ["Chick and grower stage: build frame and body weight", "Transfer: move birds in before laying starts to reduce stress", "Laying stage: steady production, then a gradual decline with age"] },
      { id: "light", heading: "Light, feed and water", paragraphs: [
        "Hens respond to day length. Layer houses use a controlled lighting programme so that birds are neither stimulated too early nor allowed to lose production. Your breed supplier's management guide gives the programme for the strain you keep.",
        "Water is as important as feed. A drop in water use is often the earliest sign that something has changed, so many farms check it daily.",
      ]},
      { id: "records", heading: "Records that explain production", paragraphs: [
        "Daily egg counts, cracked or soiled eggs, feed use and mortality give a clear picture of the flock. Reading them together helps a farm notice problems early and judge when a flock is reaching the end of its productive period.",
      ]},
      { id: "health", heading: "Health questions", paragraphs: [
        "Falls in production, changes in egg quality or unwell birds should be taken to a qualified poultry veterinarian. This guide does not give disease advice.",
      ]},
    ],
  },
  {
    slug: "poultry-biosecurity-basics",
    title: "Poultry biosecurity basics for farms of any size",
    category: "Biosecurity and hygiene",
    featured: true,
    summary: "Practical habits that keep infection out: controlling access, separating zones and managing what enters the farm.",
    sections: [
      { id: "what", heading: "What biosecurity means", paragraphs: [
        "Biosecurity is the set of routines that stop disease-causing organisms from entering a farm, moving around it or leaving it. Most of it is habit rather than equipment, and it costs far less than dealing with an outbreak.",
      ]},
      { id: "access", heading: "Control who and what comes in", paragraphs: [
        "Every visit is a possible route in. Limit visitors to those who need to be there, keep a visitor log, and ask people who have been on other poultry farms to stay away.",
      ], bullets: ["One controlled entrance for people and vehicles", "Dedicated boots and clothing for the poultry area", "Hand washing or sanitising before entering houses", "Keep wild birds, rodents and stray animals away from feed and water"] },
      { id: "zones", heading: "Separate clean and dirty zones", paragraphs: [
        "Think of the farm as a clean zone (inside the houses) and a dirty zone (outside). Move from clean to dirty areas, not the other way round, and do not share tools or crates between houses or between farms without cleaning them first.",
      ]},
      { id: "batches", heading: "All-in, all-out", paragraphs: [
        "Where possible, fill a house with birds of one age and empty it completely before the next group arrives. This breaks the chain of infection between batches and leaves time to clean the house properly.",
      ]},
      { id: "disposal", heading: "Dead birds and waste", paragraphs: [
        "Remove dead birds promptly and dispose of them by a method allowed by your local authority. If deaths are higher than usual, contact a poultry veterinarian or your local animal husbandry office. This guide does not cover disease identification or treatment.",
      ]},
    ],
  },
  {
    slug: "cleaning-and-hygiene-between-batches",
    title: "Cleaning and hygiene between batches",
    category: "Biosecurity and hygiene",
    summary: "A sensible order of work for cleaning a poultry house, and why drying and resting matter.",
    sections: [
      { id: "why", heading: "Why the gap between batches matters", paragraphs: [
        "The period after one flock leaves is the best chance a farm has to reset the house. Organic matter shelters germs, so cleaning properly comes before disinfecting.",
      ]},
      { id: "order", heading: "A common order of work", paragraphs: [
        "Details differ by housing type, but the sequence below is widely followed.",
      ], bullets: [
        "Remove birds, then remove litter and manure from the house and the surrounding area",
        "Dry-clean dust and debris from walls, beams, fans and fittings",
        "Wash surfaces and equipment with water and detergent",
        "Let surfaces dry, then apply a disinfectant approved for poultry use, following the label",
        "Clean and sanitise water lines and feeders",
        "Rest the empty house before new birds arrive",
      ]},
      { id: "chemicals", heading: "Using disinfectants safely", paragraphs: [
        "Always read the product label for dilution, contact time and safety equipment. Never mix products unless the label says you can, and keep chemicals away from feed and water.",
      ]},
      { id: "litter", heading: "Litter and waste", paragraphs: [
        "Store used litter away from the houses and handle it in line with local rules. Some farms supply manure to crop growers, which is one reason waste handling is worth planning.",
      ]},
      { id: "record", heading: "Write it down", paragraphs: [
        "Note the dates of cleaning, disinfection and rest so that the next batch starts from a known position.",
      ]},
    ],
  },
  {
    slug: "egg-handling-and-storage",
    title: "Egg handling and storage from the nest to the buyer",
    category: "Egg handling",
    summary: "How to collect, sort, pack and store table eggs so they reach buyers in good condition.",
    sections: [
      { id: "collect", heading: "Collect often and gently", paragraphs: [
        "Eggs are best collected several times a day. Frequent collection reduces cracks and dirt and keeps eggs from sitting in warm houses. Use clean trays or containers and handle eggs gently.",
      ]},
      { id: "sort", heading: "Sort at the farm", paragraphs: [
        "Separate cracked, leaking, heavily soiled and misshapen eggs from sound eggs. Cracked eggs are not suitable for sale as table eggs. Many farms also grade by size so that each tray is consistent.",
      ]},
      { id: "wash", heading: "Cleaning", paragraphs: [
        "Practice varies, and local food-safety rules apply. If washing is used, follow the guidance for your market, and dry eggs fully before packing. Wet or damp packing material encourages spoilage.",
      ]},
      { id: "store", heading: "Storing and transporting", paragraphs: [
        "Heat shortens an egg's shelf life, so store eggs in a cool, clean, dry place away from strong smells and out of direct sun. Pack them securely in trays or crates so that they do not shift in transit, and keep the loads shaded.",
      ], bullets: ["Keep stored eggs off the floor", "Use clean, dry, undamaged trays", "Do not stack crates higher than they can bear", "Rotate stock so older eggs are sold first"] },
      { id: "label", heading: "Information for buyers", paragraphs: [
        "Buyers appreciate knowing the size or grade, the packing format and the collection date. Check which labelling rules apply to your product and sales channel.",
      ]},
    ],
  },
  {
    slug: "poultry-farm-records",
    title: "Farm records that make poultry operations easier to run",
    category: "Farm management",
    summary: "Which records to keep, how simple they can be, and what they help you notice.",
    sections: [
      { id: "why", heading: "Why records matter", paragraphs: [
        "Records turn a farm's daily routine into information. They help a farmer spot changes early, compare one flock with another and answer a buyer's questions with confidence.",
      ]},
      { id: "daily", heading: "Daily records", paragraphs: [
        "A simple notebook or sheet is enough if it is filled in every day.",
      ], bullets: ["Number of birds and any deaths", "Feed and water used", "Eggs collected (layers), with cracked or soiled counts", "House temperature and any equipment faults", "Anything unusual in bird behaviour"] },
      { id: "batch", heading: "Batch and flock records", paragraphs: [
        "Keep the placement date, chick or pullet source, breed, number placed, treatments and vaccinations given on veterinary advice, and the sale date and quantity. For broilers, record the average weight at sale. For layers, keep a running production figure.",
      ]},
      { id: "business", heading: "Business records", paragraphs: [
        "Keep invoices for feed, chicks and supplies, and a note of what each sale earned. These records show what a batch really costs and help in planning.",
      ]},
      { id: "listing", heading: "Records and your listing", paragraphs: [
        "Accurate records also make it easier to write an honest farm listing. State only what you can back up with your own records.",
      ]},
    ],
  },
  {
    slug: "country-chicken-farming-overview",
    title: "Country chicken: what farmers and buyers should know",
    category: "Farm management",
    summary: "An introduction to native-type and slower-growing birds, and the questions that make a purchase clear.",
    sections: [
      { id: "what", heading: "What the term means", paragraphs: [
        "Country chicken, also called desi or native chicken, usually refers to local breeds and crosses that grow more slowly than commercial broilers. The term is used loosely, so two sellers may mean different birds.",
      ]},
      { id: "farming", heading: "How these farms differ", paragraphs: [
        "Because the birds grow more slowly, they are generally kept for longer before sale and are often given more space. Costs, volumes and prices therefore differ from broiler farming, and many operations are small or family-run.",
      ]},
      { id: "ask", heading: "Questions buyers can ask", paragraphs: [
        "Because there is no single standard, it helps to ask clear questions before you buy.",
      ], bullets: ["Which breed or cross is this?", "How old are the birds at sale?", "Are birds sold live or dressed?", "How are the birds housed and fed?", "Can I visit the farm?"] },
      { id: "farmers", heading: "For farmers listing on polutrynext", paragraphs: [
        "Describe your birds plainly: the breed or cross you raise, the age at which you sell them and the products you supply. Do not use terms such as organic or certified unless you can show that you hold the relevant certification.",
      ]},
    ],
  },
  {
    slug: "how-to-evaluate-a-poultry-supplier",
    title: "How to evaluate a poultry farm or supplier before you buy",
    category: "Buying and listings",
    summary: "A checklist for buyers: what to ask, what to confirm and how to treat directory information.",
    sections: [
      { id: "directory", heading: "A directory is a starting point", paragraphs: [
        "A listing helps you find farms and start a conversation. It is not a guarantee of quality, and listings may not have been independently checked. Do your own checks before you place an order.",
      ]},
      { id: "ask", heading: "What to ask the farm", paragraphs: [
        "Clear answers to simple questions tell you a lot about how a farm operates.",
      ], bullets: ["What exactly do you supply, and in what quantities?", "How often can you supply?", "How is the product packed or transported?", "Which licences or registrations does the business hold?", "Can I visit before ordering?"] },
      { id: "visit", heading: "If you visit", paragraphs: [
        "Expect a reputable farm to follow its own biosecurity rules and to ask you to do the same, for example by wearing provided footwear or avoiding other poultry premises beforehand. Respect those rules.",
      ]},
      { id: "start", heading: "Start small", paragraphs: [
        "For a new supplier, consider a small first order before agreeing a regular arrangement. Agree on price, quantity, quality and payment terms in writing.",
      ]},
      { id: "report", heading: "If something is wrong", paragraphs: [
        "If a listing seems inaccurate or misleading, use the report page so it can be reviewed once a review process is in place.",
      ]},
    ],
  },
];

export default articles;
