
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
    id: "katakana",
    title: "Katakana",
    description: "Pronounciation of Katakana.",
    icon: "カタカナ",
    category: "Japanese",
    cards: [
      {
        id: "k-1",
        question: "ア",
        answer: "a",
        aliases: ["A"],
        explanation: "a, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-2",
        question: "イ",
        answer: "i",
        aliases: ["I"],
        explanation: "i, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-3",
        question: "ウ",
        answer: "u",
        aliases: ["U"],
        explanation: "u, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-4",
        question: "エ",
        answer: "e",
        aliases: ["E"],
        explanation: "e, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-5",
        question: "オ",
        answer: "o",
        aliases: ["O"],
        explanation: "o, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-6",
        question: "カ",
        answer: "ka",
        aliases: ["Ka"],
        explanation: "ka, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-7",
        question: "キ",
        answer: "ki",
        aliases: ["Ki"],
        explanation: "ki, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-8",
        question: "ク",
        answer: "ku",
        aliases: ["Ku"],
        explanation: "ku, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-9",
        question: "ケ",
        answer: "ke",
        aliases: ["Ke"],
        explanation: "ke, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-10",
        question: "コ",
        answer: "ko",
        aliases: ["Ko"],
        explanation: "ko, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-11",
        question: "サ",
        answer: "sa",
        aliases: ["Sa"],
        explanation: "sa, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-12",
        question: "シ",
        answer: "si",
        aliases: ["Si"],
        explanation: "si, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-13",
        question: "ス",
        answer: "su",
        aliases: ["Su"],
        explanation: "su, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-14",
        question: "セ",
        answer: "se",
        aliases: ["Se"],
        explanation: "se, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-15",
        question: "ソ",
        answer: "so",
        aliases: ["So"],
        explanation: "so, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-16",
        question: "タ",
        answer: "ta",
        aliases: ["Ta"],
        explanation: "ta, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-17",
        question: "チ",
        answer: "ti",
        aliases: ["Ti"],
        explanation: "ti, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-18",
        question: "ツ",
        answer: "tu",
        aliases: ["Tu"],
        explanation: "tu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-19",
        question: "テ",
        answer: "te",
        aliases: ["Te"],
        explanation: "te, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-20",
        question: "ト",
        answer: "to",
        aliases: ["To"],
        explanation: "to, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-21",
        question: "ナ",
        answer: "na",
        aliases: ["Na"],
        explanation: "na, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-22",
        question: "ニ",
        answer: "ni",
        aliases: ["Ni"],
        explanation: "ni, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-23",
        question: "ヌ",
        answer: "nu",
        aliases: ["Nu"],
        explanation: "nu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-24",
        question: "ネ",
        answer: "ne",
        aliases: ["Ne"],
        explanation: "ne, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-25",
        question: "ノ",
        answer: "no",
        aliases: ["No"],
        explanation: "no, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-26",
        question: "ハ",
        answer: "ha",
        aliases: ["Ha"],
        explanation: "ha, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-27",
        question: "ヒ",
        answer: "hi",
        aliases: ["Hi"],
        explanation: "hi, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-28",
        question: "フ",
        answer: "hu",
        aliases: ["Hu"],
        explanation: "hu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-29",
        question: "ヘ",
        answer: "he",
        aliases: ["He"],
        explanation: "he, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-30",
        question: "ホ",
        answer: "ho",
        aliases: ["Ho"],
        explanation: "ho, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-31",
        question: "マ",
        answer: "ma",
        aliases: ["Ma"],
        explanation: "ma, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-32",
        question: "ミ",
        answer: "mi",
        aliases: ["Mi"],
        explanation: "mi, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-33",
        question: "ム",
        answer: "mu",
        aliases: ["Mu"],
        explanation: "mu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-34",
        question: "メ",
        answer: "me",
        aliases: ["Me"],
        explanation: "me, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-35",
        question: "モ",
        answer: "mo",
        aliases: ["Mo"],
        explanation: "mo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-36",
        question: "ヤ",
        answer: "ya",
        aliases: ["Ya"],
        explanation: "ya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-37",
        question: "ユ",
        answer: "yu",
        aliases: ["Yu"],
        explanation: "yu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-38",
        question: "ヨ",
        answer: "yo",
        aliases: ["Yo"],
        explanation: "yo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-39",
        question: "ラ",
        answer: "ra",
        aliases: ["Ra"],
        explanation: "ra, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-40",
        question: "リ",
        answer: "ri",
        aliases: ["Ri"],
        explanation: "ri, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-41",
        question: "ル",
        answer: "ru",
        aliases: ["Ru"],
        explanation: "ru, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-42",
        question: "レ",
        answer: "re",
        aliases: ["Re"],
        explanation: "re, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-43",
        question: "ロ",
        answer: "ro",
        aliases: ["Ro"],
        explanation: "ro, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-44",
        question: "ワ",
        answer: "wa",
        aliases: ["Wa"],
        explanation: "wa, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-45",
        question: "ヲ",
        answer: "wo",
        aliases: ["Wo"],
        explanation: "wo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-46",
        question: "ン",
        answer: "n",
        aliases: ["N"],
        explanation: "n, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-47",
        question: "ガ",
        answer: "ga",
        aliases: ["Ga"],
        explanation: "ga, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-48",
        question: "ギ",
        answer: "gi",
        aliases: ["Gi"],
        explanation: "gi, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-49",
        question: "グ",
        answer: "gu",
        aliases: ["Gu"],
        explanation: "gu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-50",
        question: "ゲ",
        answer: "ge",
        aliases: ["Ge"],
        explanation: "ge, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-51",
        question: "ゴ",
        answer: "go",
        aliases: ["Go"],
        explanation: "go, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-52",
        question: "ザ",
        answer: "za",
        aliases: ["Za"],
        explanation: "za, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-53",
        question: "ジ",
        answer: "zi",
        aliases: ["Zi"],
        explanation: "zi, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-54",
        question: "ズ",
        answer: "zu",
        aliases: ["Zu"],
        explanation: "zu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-55",
        question: "ゼ",
        answer: "ze",
        aliases: ["Ze"],
        explanation: "ze, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-56",
        question: "ゾ",
        answer: "zo",
        aliases: ["Zo"],
        explanation: "zo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-57",
        question: "ダ",
        answer: "da",
        aliases: ["Da"],
        explanation: "da, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-58",
        question: "ヂ",
        answer: "di",
        aliases: ["Di"],
        explanation: "di, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-59",
        question: "ヅ",
        answer: "du",
        aliases: ["Du"],
        explanation: "du, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-60",
        question: "デ",
        answer: "de",
        aliases: ["De"],
        explanation: "de, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-61",
        question: "ド",
        answer: "do",
        aliases: ["Do"],
        explanation: "do, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-62",
        question: "バ",
        answer: "ba",
        aliases: ["Ba"],
        explanation: "ba, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-63",
        question: "ビ",
        answer: "bi",
        aliases: ["Bi"],
        explanation: "bi, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-64",
        question: "ブ",
        answer: "bu",
        aliases: ["Bu"],
        explanation: "bu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-65",
        question: "ベ",
        answer: "be",
        aliases: ["Be"],
        explanation: "be, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-66",
        question: "ボ",
        answer: "bo",
        aliases: ["Bo"],
        explanation: "bo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-67",
        question: "パ",
        answer: "pa",
        aliases: ["Pa"],
        explanation: "pa, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-68",
        question: "ピ",
        answer: "pi",
        aliases: ["Pi"],
        explanation: "pi, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-69",
        question: "プ",
        answer: "pu",
        aliases: ["Pu"],
        explanation: "pu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-70",
        question: "ペ",
        answer: "pe",
        aliases: ["Pe"],
        explanation: "pe, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-71",
        question: "ポ",
        answer: "po",
        aliases: ["Po"],
        explanation: "po, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-72",
        question: "キャ",
        answer: "kya",
        aliases: ["Kya"],
        explanation: "kya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-73",
        question: "キュ",
        answer: "kyu",
        aliases: ["Kyu"],
        explanation: "kyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-74",
        question: "キョ",
        answer: "kyo",
        aliases: ["Kyo"],
        explanation: "kyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-75",
        question: "シャ",
        answer: "sya",
        aliases: ["Sya"],
        explanation: "sya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-76",
        question: "シュ",
        answer: "syu",
        aliases: ["Syu"],
        explanation: "syu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-77",
        question: "ショ",
        answer: "syo",
        aliases: ["Syo"],
        explanation: "syo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-78",
        question: "チャ",
        answer: "cya",
        aliases: ["Cya"],
        explanation: "cya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-78",
        question: "チュ",
        answer: "cyu",
        aliases: ["Cyu"],
        explanation: "cyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-78",
        question: "チョ",
        answer: "cyo",
        aliases: ["Cyo"],
        explanation: "cyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-79",
        question: "ミャ",
        answer: "mya",
        aliases: ["Mya"],
        explanation: "mya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-80",
        question: "ミュ",
        answer: "myu",
        aliases: ["Myu"],
        explanation: "myu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-81",
        question: "ミョ",
        answer: "myo",
        aliases: ["Myo"],
        explanation: "myo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-82",
        question: "リャ",
        answer: "rya",
        aliases: ["Rya"],
        explanation: "rya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-83",
        question: "リュ",
        answer: "ryu",
        aliases: ["Ryu"],
        explanation: "ryu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-84",
        question: "リョ",
        answer: "ryo",
        aliases: ["Ryo"],
        explanation: "ryo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-85",
        question: "ギャ",
        answer: "gya",
        aliases: ["Gya"],
        explanation: "gya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-86",
        question: "ギュ",
        answer: "gyu",
        aliases: ["Gyu"],
        explanation: "gyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-87",
        question: "ギョ",
        answer: "gyo",
        aliases: ["Gyo"],
        explanation: "gyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-88",
        question: "ヒャ",
        answer: "hyo",
        aliases: ["Hyo"],
        explanation: "hyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-89",
        question: "ヒュ",
        answer: "hyu",
        aliases: ["Hyu"],
        explanation: "hyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-90",
        question: "ヒョ",
        answer: "hyo",
        aliases: ["Hyo"],
        explanation: "hyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-91",
        question: "ジャ",
        answer: "jya",
        aliases: ["Jya"],
        explanation: "jya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-92",
        question: "ジュ",
        answer: "jyu",
        aliases: ["Jyu"],
        explanation: "jyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-93",
        question: "ジョ",
        answer: "jyo",
        aliases: ["Jyo"],
        explanation: "jyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-94",
        question: "ビャ",
        answer: "bya",
        aliases: ["Bya"],
        explanation: "bya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-95",
        question: "ビュ",
        answer: "byu",
        aliases: ["Byu"],
        explanation: "byu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-96",
        question: "ビョ",
        answer: "byo",
        aliases: ["Byo"],
        explanation: "byo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-97",
        question: "ピャ",
        answer: "pya",
        aliases: ["Pya"],
        explanation: "pya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-98",
        question: "ピュ",
        answer: "pyu",
        aliases: ["Pyu"],
        explanation: "pyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-99",
        question: "ピョ",
        answer: "pyo",
        aliases: ["Pyo"],
        explanation: "pyo, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-100",
        question: "ヂャ",
        answer: "dya",
        aliases: ["Dya"],
        explanation: "dya, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-101",
        question: "ヂュ",
        answer: "dyu",
        aliases: ["Dyu"],
        explanation: "dyu, katakana.",
        tag: "Katakana"
      },
      {
        id: "k-102",
        question: "ヂョ",
        answer: "dyo",
        aliases: ["Dyo"],
        explanation: "dyo, katakana.",
        tag: "Katakana"
      }
    ]
  },
  {
    id: "hiragana",
    title: "Hiragana",
    description: "Pronounciation of Hiragana.",
    icon: "平仮名",
    category: "Japanese",
    cards: [
      {
        id: "h-1",
        question: "あ",
        answer: "a",
        aliases: ["A"],
        explanation: "a, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-2",
        question: "い",
        answer: "i",
        aliases: ["I"],
        explanation: "i, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-3",
        question: "う",
        answer: "u",
        aliases: ["U"],
        explanation: "u, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-4",
        question: "え",
        answer: "e",
        aliases: ["E"],
        explanation: "e, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-5",
        question: "お",
        answer: "o",
        aliases: ["O"],
        explanation: "o, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-6",
        question: "か",
        answer: "ka",
        aliases: ["Ka"],
        explanation: "ka, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-7",
        question: "き",
        answer: "ki",
        aliases: ["Ki"],
        explanation: "ki, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-8",
        question: "く",
        answer: "ku",
        aliases: ["Ku"],
        explanation: "ku, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-9",
        question: "け",
        answer: "ke",
        aliases: ["Ke"],
        explanation: "ke, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-10",
        question: "こ",
        answer: "ko",
        aliases: ["Ko"],
        explanation: "ko, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-11",
        question: "さ",
        answer: "sa",
        aliases: ["Sa"],
        explanation: "sa, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-12",
        question: "し",
        answer: "si",
        aliases: ["Si"],
        explanation: "si, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-13",
        question: "す",
        answer: "su",
        aliases: ["Su"],
        explanation: "su, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-14",
        question: "せ",
        answer: "se",
        aliases: ["Se"],
        explanation: "se, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-15",
        question: "そ",
        answer: "so",
        aliases: ["So"],
        explanation: "so, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-16",
        question: "た",
        answer: "ta",
        aliases: ["Ta"],
        explanation: "ta, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-17",
        question: "ち",
        answer: "ti",
        aliases: ["Ti"],
        explanation: "ti, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-18",
        question: "つ",
        answer: "tu",
        aliases: ["Tu"],
        explanation: "tu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-19",
        question: "て",
        answer: "te",
        aliases: ["Te"],
        explanation: "te, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-20",
        question: "と",
        answer: "to",
        aliases: ["To"],
        explanation: "to, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-21",
        question: "な",
        answer: "na",
        aliases: ["Na"],
        explanation: "na, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-22",
        question: "に",
        answer: "ni",
        aliases: ["Ni"],
        explanation: "ni, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-23",
        question: "ぬ",
        answer: "nu",
        aliases: ["Nu"],
        explanation: "nu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-24",
        question: "ね",
        answer: "ne",
        aliases: ["Ne"],
        explanation: "ne, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-25",
        question: "の",
        answer: "no",
        aliases: ["No"],
        explanation: "no, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-26",
        question: "は",
        answer: "ha",
        aliases: ["Ha"],
        explanation: "ha, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-27",
        question: "ひ",
        answer: "hi",
        aliases: ["Hi"],
        explanation: "hi, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-28",
        question: "ふ",
        answer: "hu",
        aliases: ["Hu"],
        explanation: "hu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-29",
        question: "へ",
        answer: "he",
        aliases: ["He"],
        explanation: "he, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-30",
        question: "ほ",
        answer: "ho",
        aliases: ["Ho"],
        explanation: "ho, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-31",
        question: "ま",
        answer: "ma",
        aliases: ["Ma"],
        explanation: "ma, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-32",
        question: "み",
        answer: "mi",
        aliases: ["Mi"],
        explanation: "mi, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-33",
        question: "む",
        answer: "mu",
        aliases: ["Mu"],
        explanation: "mu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-34",
        question: "め",
        answer: "me",
        aliases: ["Me"],
        explanation: "me, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-35",
        question: "も",
        answer: "mo",
        aliases: ["Mo"],
        explanation: "mo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-36",
        question: "や",
        answer: "ya",
        aliases: ["Ya"],
        explanation: "ya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-37",
        question: "ゆ",
        answer: "yu",
        aliases: ["Yu"],
        explanation: "yu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-38",
        question: "よ",
        answer: "yo",
        aliases: ["Yo"],
        explanation: "yo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-39",
        question: "ら",
        answer: "ra",
        aliases: ["Ra"],
        explanation: "ra, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-40",
        question: "り",
        answer: "ri",
        aliases: ["Ri"],
        explanation: "ri, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-41",
        question: "る",
        answer: "ru",
        aliases: ["Ru"],
        explanation: "ru, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-42",
        question: "れ",
        answer: "re",
        aliases: ["Re"],
        explanation: "re, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-43",
        question: "ろ",
        answer: "ro",
        aliases: ["Ro"],
        explanation: "ro, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-44",
        question: "わ",
        answer: "wa",
        aliases: ["Wa"],
        explanation: "wa, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-45",
        question: "を",
        answer: "wo",
        aliases: ["Wo"],
        explanation: "wo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-46",
        question: "ん",
        answer: "n",
        aliases: ["N"],
        explanation: "n, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-47",
        question: "が",
        answer: "ga",
        aliases: ["Ga"],
        explanation: "ga, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-48",
        question: "ぎ",
        answer: "gi",
        aliases: ["Gi"],
        explanation: "gi, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-49",
        question: "ぐ",
        answer: "gu",
        aliases: ["Gu"],
        explanation: "gu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-50",
        question: "げ",
        answer: "ge",
        aliases: ["Ge"],
        explanation: "ge, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-51",
        question: "ご",
        answer: "go",
        aliases: ["Go"],
        explanation: "go, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-52",
        question: "ざ",
        answer: "za",
        aliases: ["Za"],
        explanation: "za, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-53",
        question: "じ",
        answer: "zi",
        aliases: ["Zi"],
        explanation: "zi, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-54",
        question: "ず",
        answer: "zu",
        aliases: ["Zu"],
        explanation: "zu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-55",
        question: "ぜ",
        answer: "ze",
        aliases: ["Ze"],
        explanation: "ze, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-56",
        question: "ぞ",
        answer: "zo",
        aliases: ["Zo"],
        explanation: "zo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-57",
        question: "だ",
        answer: "da",
        aliases: ["Da"],
        explanation: "da, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-58",
        question: "ぢ",
        answer: "di",
        aliases: ["Di"],
        explanation: "di, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-59",
        question: "づ",
        answer: "du",
        aliases: ["Du"],
        explanation: "du, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-60",
        question: "で",
        answer: "de",
        aliases: ["De"],
        explanation: "de, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-61",
        question: "ど",
        answer: "do",
        aliases: ["Do"],
        explanation: "do, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-62",
        question: "ば",
        answer: "ba",
        aliases: ["Ba"],
        explanation: "ba, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-63",
        question: "び",
        answer: "bi",
        aliases: ["Bi"],
        explanation: "bi, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-64",
        question: "ぶ",
        answer: "bu",
        aliases: ["Bu"],
        explanation: "bu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-65",
        question: "べ",
        answer: "be",
        aliases: ["Be"],
        explanation: "be, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-66",
        question: "ぼ",
        answer: "bo",
        aliases: ["Bo"],
        explanation: "bo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-67",
        question: "ぱ",
        answer: "pa",
        aliases: ["Pa"],
        explanation: "pa, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-68",
        question: "ぴ",
        answer: "pi",
        aliases: ["Pi"],
        explanation: "pi, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-69",
        question: "ぷ",
        answer: "pu",
        aliases: ["Pu"],
        explanation: "pu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-70",
        question: "ぺ",
        answer: "pe",
        aliases: ["Pe"],
        explanation: "pe, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-71",
        question: "ぽ",
        answer: "po",
        aliases: ["Po"],
        explanation: "po, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-72",
        question: "きゃ",
        answer: "kya",
        aliases: ["Kya"],
        explanation: "kya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-73",
        question: "きゅ",
        answer: "kyu",
        aliases: ["Kyu"],
        explanation: "kyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-74",
        question: "きょ",
        answer: "kyo",
        aliases: ["Kyo"],
        explanation: "kyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-75",
        question: "しゃ",
        answer: "sya",
        aliases: ["Sya"],
        explanation: "sya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-76",
        question: "しゅ",
        answer: "syu",
        aliases: ["Syu"],
        explanation: "syu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-77",
        question: "しょ",
        answer: "syo",
        aliases: ["Syo"],
        explanation: "syo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-78",
        question: "ちゃ",
        answer: "cya",
        aliases: ["Cya"],
        explanation: "cya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-78",
        question: "ちゅ",
        answer: "cyu",
        aliases: ["Cyu"],
        explanation: "cyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-78",
        question: "ちょ",
        answer: "cyo",
        aliases: ["Cyo"],
        explanation: "cyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-79",
        question: "みゃ",
        answer: "mya",
        aliases: ["Mya"],
        explanation: "mya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-80",
        question: "みゅ",
        answer: "myu",
        aliases: ["Myu"],
        explanation: "myu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-81",
        question: "みょ",
        answer: "myo",
        aliases: ["Myo"],
        explanation: "myo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-82",
        question: "りゃ",
        answer: "rya",
        aliases: ["Rya"],
        explanation: "rya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-83",
        question: "りゅ",
        answer: "ryu",
        aliases: ["Ryu"],
        explanation: "ryu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-84",
        question: "りょ",
        answer: "ryo",
        aliases: ["Ryo"],
        explanation: "ryo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-85",
        question: "ぎゃ",
        answer: "gya",
        aliases: ["Gya"],
        explanation: "gya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-86",
        question: "ぎゅ",
        answer: "gyu",
        aliases: ["Gyu"],
        explanation: "gyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-87",
        question: "ぎょ",
        answer: "gyo",
        aliases: ["Gyo"],
        explanation: "gyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-88",
        question: "ひゃ",
        answer: "hyo",
        aliases: ["Hyo"],
        explanation: "hyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-89",
        question: "ひゅ",
        answer: "hyu",
        aliases: ["Hyu"],
        explanation: "hyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-90",
        question: "ひょ",
        answer: "hyo",
        aliases: ["Hyo"],
        explanation: "hyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-91",
        question: "じゃ",
        answer: "jya",
        aliases: ["Jya"],
        explanation: "jya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-92",
        question: "じゅ",
        answer: "jyu",
        aliases: ["Jyu"],
        explanation: "jyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-93",
        question: "じょ",
        answer: "jyo",
        aliases: ["Jyo"],
        explanation: "jyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-94",
        question: "びゃ",
        answer: "bya",
        aliases: ["Bya"],
        explanation: "bya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-95",
        question: "びゅ",
        answer: "byu",
        aliases: ["Byu"],
        explanation: "byu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-96",
        question: "びょ",
        answer: "byo",
        aliases: ["Byo"],
        explanation: "byo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-97",
        question: "ぴゃ",
        answer: "pya",
        aliases: ["Pya"],
        explanation: "pya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-98",
        question: "ぴゅ",
        answer: "pyu",
        aliases: ["Pyu"],
        explanation: "pyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-99",
        question: "ぴょ",
        answer: "pyo",
        aliases: ["Pyo"],
        explanation: "pyo, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-100",
        question: "ぢゃ",
        answer: "dya",
        aliases: ["Dya"],
        explanation: "dya, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-101",
        question: "ぢゅ",
        answer: "dyu",
        aliases: ["Dyu"],
        explanation: "dyu, hiragana.",
        tag: "Hiragana"
      },
      {
        id: "h-102",
        question: "ぢょ",
        answer: "dyo",
        aliases: ["Dyo"],
        explanation: "dyo, hiragana.",
        tag: "Hiragana"
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
