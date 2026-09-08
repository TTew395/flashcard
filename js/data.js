/**
 * FlashMind - Curated Decks
 * AP Chemistry: Polyatomic Ions (matching screenshot format)
 * Includes chemical formula, standard name, accepted aliases, charge, and explanation.
 */

const DEFAULT_DECKS = [
  {
    id: "ap-chem-polyatomic",
    title: "AP Chemistry: Polyatomic Ions",
    description: "Formulas, charges, and systemic nomenclature for essential AP Chemistry polyatomic ions.",
    icon: "⚗️",
    category: "Chemistry",
    cards: [
      {
        id: "ion-1",
        question: "C₂O₄²⁻",
        answer: "Oxalate",
        aliases: ["oxalate", "oxalate ion"],
        explanation: "Oxalate (C₂O₄²⁻) is the dianion derived from oxalic acid (H₂C₂O₄) by loss of two protons. It frequently acts as a bidentate chelating ligand in coordination chemistry.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-2",
        question: "NH₄⁺",
        answer: "Ammonium",
        aliases: ["ammonium", "ammonium ion"],
        explanation: "Ammonium (NH₄⁺) is a positively charged polyatomic cation formed by the protonation of ammonia (NH₃). All common ammonium salts are completely soluble in water.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-3",
        question: "NO₃⁻",
        answer: "Nitrate",
        aliases: ["nitrate", "nitrate ion"],
        explanation: "Nitrate (NO₃⁻) has a trigonal planar geometry with resonance structures yielding an average nitrogen-oxygen bond order of 1.33. All nitrate salts are highly soluble in aqueous solutions.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-4",
        question: "NO₂⁻",
        answer: "Nitrite",
        aliases: ["nitrite", "nitrite ion"],
        explanation: "Nitrite (NO₂⁻) is the conjugate base of weak nitrous acid (HNO₂). It features a bent molecular geometry due to the nitrogen lone pair.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-5",
        question: "SO₄²⁻",
        answer: "Sulfate",
        aliases: ["sulfate", "sulfate ion"],
        explanation: "Sulfate (SO₄²⁻) has a tetrahedral geometry with sulfur in the +6 oxidation state. It is the conjugate base of hydrogen sulfate (HSO₄⁻). Precipitates with Ba²⁺, Pb²⁺, and Ca²⁺.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-6",
        question: "SO₃²⁻",
        answer: "Sulfite",
        aliases: ["sulfite", "sulfite ion"],
        explanation: "Sulfite (SO₃²⁻) has sulfur in the +4 oxidation state and displays a trigonal pyramidal geometry because of the non-bonding electron pair on sulfur.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-7",
        question: "HSO₄⁻",
        answer: "Hydrogen Sulfate",
        aliases: ["hydrogen sulfate", "bisulfate", "bisulfate ion", "hydrogen sulfate ion"],
        explanation: "Hydrogen sulfate (HSO₄⁻), commonly known as bisulfate, is an amphiprotic ion with a pKa of approximately 1.99, acting as a moderately strong acid in aqueous solutions.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-8",
        question: "OH⁻",
        answer: "Hydroxide",
        aliases: ["hydroxide", "hydroxide ion"],
        explanation: "Hydroxide (OH⁻) is the characteristic Arrhenius base anion. Its concentration directly defines the pOH and pH of an aqueous solution.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-9",
        question: "CN⁻",
        answer: "Cyanide",
        aliases: ["cyanide", "cyanide ion"],
        explanation: "Cyanide (CN⁻) consists of a carbon atom triple-bonded to a nitrogen atom. It is isoelectronic with carbon monoxide (CO) and acts as a strong-field ligand.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-10",
        question: "CO₃²⁻",
        answer: "Carbonate",
        aliases: ["carbonate", "carbonate ion"],
        explanation: "Carbonate (CO₃²⁻) has trigonal planar geometry with equivalent resonance structures. Reacts with strong acids to liberate carbon dioxide gas (CO₂) and water.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-11",
        question: "HCO₃⁻",
        answer: "Hydrogen Carbonate",
        aliases: ["hydrogen carbonate", "bicarbonate", "bicarbonate ion", "hydrogen carbonate ion"],
        explanation: "Hydrogen carbonate (HCO₃⁻), or bicarbonate, serves as the primary physiological pH buffer in human blood plasma via the carbonic acid equilibrium.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-12",
        question: "PO₄³⁻",
        answer: "Phosphate",
        aliases: ["phosphate", "phosphate ion", "orthophosphate"],
        explanation: "Phosphate (PO₄³⁻) is a tetrahedral oxyanion of phosphorus (+5 oxidation state). It forms the structural backbone of DNA, RNA, and high-energy ATP molecules.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-13",
        question: "HPO₄²⁻",
        answer: "Hydrogen Phosphate",
        aliases: ["hydrogen phosphate", "hydrogen phosphate ion"],
        explanation: "Hydrogen phosphate (HPO₄²⁻) is the monoprotonated form of phosphate and acts as an intracellular physiological buffer.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-14",
        question: "H₂PO₄⁻",
        answer: "Dihydrogen Phosphate",
        aliases: ["dihydrogen phosphate", "dihydrogen phosphate ion"],
        explanation: "Dihydrogen phosphate (H₂PO₄⁻) is an amphiprotic species that can either donate a proton to form HPO₄²⁻ or accept one to form H₃PO₄.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-15",
        question: "ClO₄⁻",
        answer: "Perchlorate",
        aliases: ["perchlorate", "perchlorate ion"],
        explanation: "Perchlorate (ClO₄⁻) contains chlorine in its maximum +7 oxidation state. It is a very weak conjugate base derived from the strong acid perchloric acid (HClO₄).",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-16",
        question: "ClO₃⁻",
        answer: "Chlorate",
        aliases: ["chlorate", "chlorate ion"],
        explanation: "Chlorate (ClO₃⁻) has a trigonal pyramidal shape with chlorine in the +5 oxidation state.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-17",
        question: "ClO₂⁻",
        answer: "Chlorite",
        aliases: ["chlorite", "chlorite ion"],
        explanation: "Chlorite (ClO₂⁻) features chlorine in the +3 oxidation state and possesses a bent molecular geometry.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-18",
        question: "ClO⁻",
        answer: "Hypochlorite",
        aliases: ["hypochlorite", "hypochlorite ion"],
        explanation: "Hypochlorite (ClO⁻) has chlorine in the +1 oxidation state. It is the active oxidizing agent in household bleach (aqueous NaClO).",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-19",
        question: "MnO₄⁻",
        answer: "Permanganate",
        aliases: ["permanganate", "permanganate ion"],
        explanation: "Permanganate (MnO₄⁻) features manganese in the +7 oxidation state. It has an intense deep purple hue and is a powerful oxidizing agent in acidic titrations.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-20",
        question: "CrO₄²⁻",
        answer: "Chromate",
        aliases: ["chromate", "chromate ion"],
        explanation: "Chromate (CrO₄²⁻) has chromium in the +6 oxidation state, presenting a bright yellow color in basic aqueous conditions.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-21",
        question: "Cr₂O₇²⁻",
        answer: "Dichromate",
        aliases: ["dichromate", "dichromate ion"],
        explanation: "Dichromate (Cr₂O₇²⁻) consists of two corner-sharing CrO₄ tetrahedra and displays an orange color in acidic solutions, in equilibrium with chromate.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-22",
        question: "C₂H₃O₂⁻",
        answer: "Acetate",
        aliases: ["acetate", "acetate ion", "ch3coo-", "ethanoate"],
        explanation: "Acetate (C₂H₃O₂⁻ or CH₃COO⁻) is the conjugate base of acetic acid. All common metal acetate salts are highly soluble in water.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-23",
        question: "SCN⁻",
        answer: "Thiocyanate",
        aliases: ["thiocyanate", "thiocyanate ion"],
        explanation: "Thiocyanate (SCN⁻) is a pseudohalide anion. In the presence of Fe³⁺ ions, it forms the characteristic blood-red coordination complex [Fe(SCN)]²⁺.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-24",
        question: "O₂²⁻",
        answer: "Peroxide",
        aliases: ["peroxide", "peroxide ion"],
        explanation: "Peroxide (O₂²⁻) has an oxygen-oxygen single covalent bond with each oxygen having an unusual -1 oxidation state.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-25",
        question: "IO₃⁻",
        answer: "Iodate",
        aliases: ["iodate", "iodate ion"],
        explanation: "Iodate (IO₃⁻) is the conjugate base of iodic acid with iodine in the +5 oxidation state, widely used in redox chemistry and salt iodization.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-26",
        question: "BrO₃⁻",
        answer: "Bromate",
        aliases: ["bromate", "bromate ion"],
        explanation: "Bromate (BrO₃⁻) is an oxyanion with bromine in the +5 oxidation state and a trigonal pyramidal structure.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-27",
        question: "S₂O₃²⁻",
        answer: "Thiosulfate",
        aliases: ["thiosulfate", "thiosulfate ion"],
        explanation: "Thiosulfate (S₂O₃²⁻) is derived by replacing one oxygen in sulfate with a sulfur atom. It is the standard titrant used in iodometric redox titrations.",
        tag: "Polyatomic Ions"
      },
      {
        id: "ion-28",
        question: "OCN⁻",
        answer: "Cyanate",
        aliases: ["cyanate", "cyanate ion"],
        explanation: "Cyanate (OCN⁻) is a linear polyatomic anion containing oxygen, carbon, and nitrogen. Its rearrangement to urea by Wöhler in 1828 marked the birth of organic chemistry.",
        tag: "Polyatomic Ions"
      }
    ]
  },
  {
    id: "ap-chem-acids-bases",
    title: "AP Chemistry: Strong Acids & Bases",
    description: "The 7 strong acids and strong soluble metal hydroxide bases required for AP Chemistry.",
    icon: "🧪",
    category: "Chemistry",
    cards: [
      {
        id: "ab-1",
        question: "HCl",
        answer: "Hydrochloric Acid",
        aliases: ["hydrochloric acid", "hydrochloric"],
        explanation: "Hydrochloric acid (HCl) is a strong monoprotic binary acid that completely dissociates in water: HCl → H⁺ + Cl⁻.",
        tag: "Strong Acids"
      },
      {
        id: "ab-2",
        question: "HNO₃",
        answer: "Nitric Acid",
        aliases: ["nitric acid", "nitric"],
        explanation: "Nitric acid (HNO₃) is a strong oxyacid and strong oxidizing agent that completely ionizes into H⁺ and NO₃⁻.",
        tag: "Strong Acids"
      },
      {
        id: "ab-3",
        question: "H₂SO₄",
        answer: "Sulfuric Acid",
        aliases: ["sulfuric acid", "sulfuric"],
        explanation: "Sulfuric acid (H₂SO₄) is a strong diprotic acid; its first dissociation (H₂SO₄ → H⁺ + HSO₄⁻) is 100% complete, while HSO₄⁻ is a weak acid (Ka ≈ 1.2 × 10⁻²).",
        tag: "Strong Acids"
      },
      {
        id: "ab-4",
        question: "HBr",
        answer: "Hydrobromic Acid",
        aliases: ["hydrobromic acid", "hydrobromic"],
        explanation: "Hydrobromic acid (HBr) is one of the strong binary haloacids due to the large H-Br bond length and high polarizability.",
        tag: "Strong Acids"
      },
      {
        id: "ab-5",
        question: "HI",
        answer: "Hydroiodic Acid",
        aliases: ["hydroiodic acid", "hydroiodic"],
        explanation: "Hydroiodic acid (HI) is the strongest of the common binary haloacids because the large iodide ion holds the proton very weakly.",
        tag: "Strong Acids"
      },
      {
        id: "ab-6",
        question: "HClO₄",
        answer: "Perchloric Acid",
        aliases: ["perchloric acid", "perchloric"],
        explanation: "Perchloric acid (HClO₄) has four highly electronegative oxygens drawing electron density away from the O-H bond, making it an extremely strong acid.",
        tag: "Strong Acids"
      },
      {
        id: "ab-7",
        question: "HClO₃",
        answer: "Chloric Acid",
        aliases: ["chloric acid", "chloric"],
        explanation: "Chloric acid (HClO₃) is recognized on the AP Chemistry exam as one of the 7 strong acids.",
        tag: "Strong Acids"
      },
      {
        id: "ab-8",
        question: "Ba(OH)₂",
        answer: "Barium Hydroxide",
        aliases: ["barium hydroxide"],
        explanation: "Barium hydroxide is a strong, soluble Group 2 metal hydroxide base that yields 2 moles of OH⁻ per mole dissolved.",
        tag: "Strong Bases"
      }
    ]
  }
];
