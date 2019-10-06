import { Element } from './element';

enum Subcategory {
    ACTINIDE = 'actinide',
    ALKALI_METAL = 'alkaliMetal',
    ALKALINE_EARTH_METAL = 'alkalineEarthMetal',
    LANTHANIDE = 'lanthanide',
    METALLOID = 'metalloid',
    NOBLE_GAS = 'nobleGas',
    POST_TRANSITION_METAL = 'postTransitionMetal',
    REACTIVE_NONMETAL = 'reactiveNonmetal',
    TRANSITION_METAL = 'transitionMetal',
    UNKNOWN = 'unknown'
}

enum State {
    GAS = 'gas',
    LIQUID = 'liquid',
    SOLID = 'solid',
    UNKNOWN = 'unknown'
}

export const PERIODIC_ELEMENTS: Element[] = [
    {
        atomicNumber: 1,
        symbol: 'H',
        name: 'Hydrogen',
        atomicWeight: 1.008,
        electronsPerShell: [1],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 2,
        symbol: 'He',
        name: 'Helium',
        atomicWeight: 4.0026,
        electronsPerShell: [2],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.NOBLE_GAS
    },
    {
        atomicNumber: 3,
        symbol: 'Li',
        name: 'Lithium',
        atomicWeight: 6.94,
        electronsPerShell: [2, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALI_METAL
    },
    {
        atomicNumber: 4,
        symbol: 'Be',
        name: 'Beryllium',
        atomicWeight: 9.0122,
        electronsPerShell: [2, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALINE_EARTH_METAL
    },
    {
        atomicNumber: 5,
        symbol: 'B',
        name: 'Boron',
        atomicWeight: 10.81,
        electronsPerShell: [2, 3],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 6,
        symbol: 'C',
        name: 'Carbon',
        atomicWeight: 12.011,
        electronsPerShell: [2, 4],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 7,
        symbol: 'N',
        name: 'Nitrogen',
        atomicWeight: 14.007,
        electronsPerShell: [2, 5],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 8,
        symbol: 'O',
        name: 'Oxygen',
        atomicWeight: 15.999,
        electronsPerShell: [2, 6],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 9,
        symbol: 'F',
        name: 'Fluorine',
        atomicWeight: 18.998,
        electronsPerShell: [2, 7],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 10,
        symbol: 'Ne',
        name: 'Neon',
        atomicWeight: 20.18,
        electronsPerShell: [2, 8],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.NOBLE_GAS
    },
    {
        atomicNumber: 11,
        symbol: 'Na',
        name: 'Sodium',
        atomicWeight: 22.9897,
        electronsPerShell: [2, 8, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALI_METAL
    },
    {
        atomicNumber: 12,
        symbol: 'Mg',
        name: 'Magnesium',
        atomicWeight: 24.305,
        electronsPerShell: [2, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALINE_EARTH_METAL
    },
    {
        atomicNumber: 13,
        symbol: 'Al',
        name: 'Aluminum',
        atomicWeight: 26.982,
        electronsPerShell: [2, 8, 3],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 14,
        symbol: 'Si',
        name: 'Silicon',
        atomicWeight: 28.085,
        electronsPerShell: [2, 8, 4],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 15,
        symbol: 'P',
        name: 'Phosphorous',
        atomicWeight: 30.974,
        electronsPerShell: [2, 8, 5],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 16,
        symbol: 'S',
        name: 'Sulfur',
        atomicWeight: 32.06,
        electronsPerShell: [2, 8, 6],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 17,
        symbol: 'Cl',
        name: 'Chlorine',
        atomicWeight: 35.45,
        electronsPerShell: [2, 8, 7],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 18,
        symbol: 'Ar',
        name: 'Argon',
        atomicWeight: 39.948,
        electronsPerShell: [2, 8, 8],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.NOBLE_GAS
    },
    {
        atomicNumber: 19,
        symbol: 'K',
        name: 'Potassium',
        atomicWeight: 39.0983,
        electronsPerShell: [2, 8, 8, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALI_METAL
    },
    {
        atomicNumber: 20,
        symbol: 'Ca',
        name: 'Calcium',
        atomicWeight: 40.078,
        electronsPerShell: [2, 8, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALINE_EARTH_METAL
    },
    {
        atomicNumber: 21,
        symbol: 'Sc',
        name: 'Scandium',
        atomicWeight: 44.9559,
        electronsPerShell: [2, 8, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 22,
        symbol: 'Ti',
        name: 'Titanium',
        atomicWeight: 47.867,
        electronsPerShell: [2, 8, 10, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 23,
        symbol: 'V',
        name: 'Vanadium',
        atomicWeight: 50.9415,
        electronsPerShell: [2, 8, 11, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 24,
        symbol: 'Cr',
        name: 'Chromium',
        atomicWeight: 51.9961,
        electronsPerShell: [2, 8, 13, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 25,
        symbol: 'Mn',
        name: 'Manganese',
        atomicWeight: 54.938,
        electronsPerShell: [2, 8, 13, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 26,
        symbol: 'Fe',
        name: 'Iron',
        atomicWeight: 55.845,
        electronsPerShell: [2, 8, 14, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 27,
        symbol: 'Co',
        name: 'Cobalt',
        atomicWeight: 58.933,
        electronsPerShell: [2, 8, 15, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 28,
        symbol: 'Ni',
        name: 'Nickel',
        atomicWeight: 58.693,
        electronsPerShell: [2, 8, 16, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 29,
        symbol: 'Cu',
        name: 'Copper',
        atomicWeight: 63.546,
        electronsPerShell: [2, 8, 18, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 30,
        symbol: 'Zn',
        name: 'Zinc',
        atomicWeight: 65.38,
        electronsPerShell: [2, 8, 18, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 31,
        symbol: 'Ga',
        name: 'Gallium',
        atomicWeight: 69.723,
        electronsPerShell: [2, 8, 18, 3],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 32,
        symbol: 'Ge',
        name: 'Germanium',
        atomicWeight: 72.630,
        electronsPerShell: [2, 8, 18, 4],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 33,
        symbol: 'As',
        name: 'Arsenic',
        atomicWeight: 74.922,
        electronsPerShell: [2, 8, 18, 5],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 34,
        symbol: 'Se',
        name: 'Selenium',
        atomicWeight: 78.971,
        electronsPerShell: [2, 8, 18, 6],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 35,
        symbol: 'Br',
        name: 'Bromine',
        atomicWeight: 79.904,
        electronsPerShell: [2, 8, 18, 7],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 36,
        symbol: 'Kr',
        name: 'Krypton',
        atomicWeight: 83.798,
        electronsPerShell: [2, 8, 18, 8],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.NOBLE_GAS
    },
    {
        atomicNumber: 37,
        symbol: 'Rb',
        name: 'Rubidium',
        atomicWeight: 85.4678,
        electronsPerShell: [2, 8, 18, 8, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALI_METAL
    },
    {
        atomicNumber: 38,
        symbol: 'Sr',
        name: 'Strontium',
        atomicWeight: 87.62,
        electronsPerShell: [2, 8, 18, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALINE_EARTH_METAL
    },
    {
        atomicNumber: 39,
        symbol: 'Y',
        name: 'Yttrium',
        atomicWeight: 88.9058,
        electronsPerShell: [2, 8, 18, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 40,
        symbol: 'Zr',
        name: 'Zirconium',
        atomicWeight: 91.224,
        electronsPerShell: [2, 8, 18, 10, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 41,
        symbol: 'Nb',
        name: 'Niobium',
        atomicWeight: 92.9064,
        electronsPerShell: [2, 8, 18, 12, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 42,
        symbol: 'Mo',
        name: 'Molybdenum',
        atomicWeight: 95.95,
        electronsPerShell: [2, 8, 18, 13, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 43,
        symbol: 'Tc',
        name: 'Technetium',
        atomicWeight: 98,
        electronsPerShell: [2, 8, 18, 13, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 44,
        symbol: 'Ru',
        name: 'Ruthenium',
        atomicWeight: 101.07,
        electronsPerShell: [2, 8, 18, 15, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 45,
        symbol: 'Rh',
        name: 'Rhodium',
        atomicWeight: 102.91,
        electronsPerShell: [2, 8, 18, 16, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 46,
        symbol: 'Pd',
        name: 'Palladium',
        atomicWeight: 106.42,
        electronsPerShell: [2, 8, 18, 18, 18],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 47,
        symbol: 'Ag',
        name: 'Silver',
        atomicWeight: 107.87,
        electronsPerShell: [2, 8, 18, 18, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 48,
        symbol: 'Cd',
        name: 'Cadmium',
        atomicWeight: 112.41,
        electronsPerShell: [2, 8, 18, 18, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 49,
        symbol: 'In',
        name: 'Indium',
        atomicWeight: 114.82,
        electronsPerShell: [2, 8, 18, 18, 3],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 50,
        symbol: 'Sn',
        name: 'Tin',
        atomicWeight: 118.71,
        electronsPerShell: [2, 8, 18, 18, 4],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 51,
        symbol: 'Sb',
        name: 'Antimony',
        atomicWeight: 121.76,
        electronsPerShell: [2, 8, 18, 18, 5],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 52,
        symbol: 'Te',
        name: 'Tellurium',
        atomicWeight: 127.6,
        electronsPerShell: [2, 8, 18, 18, 6],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 53,
        symbol: 'I',
        name: 'Iodine',
        atomicWeight: 126.9,
        electronsPerShell: [2, 8, 18, 18, 7],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.REACTIVE_NONMETAL
    },
    {
        atomicNumber: 54,
        symbol: 'Xe',
        name: 'Xenon',
        atomicWeight: 131.29,
        electronsPerShell: [2, 8, 18, 18, 8],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.NOBLE_GAS
    },
    {
        atomicNumber: 55,
        symbol: 'Cs',
        name: 'Caesium',
        atomicWeight: 132.9055,
        electronsPerShell: [2, 8, 18, 18, 8, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALI_METAL
    },
    {
        atomicNumber: 56,
        symbol: 'Ba',
        name: 'Barium',
        atomicWeight: 137.327,
        electronsPerShell: [2, 8, 18, 18, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALINE_EARTH_METAL
    },
    {
        atomicNumber: 57,
        symbol: 'La',
        name: 'Lanthanum',
        atomicWeight: 8,
        electronsPerShell: [2, 8, 18, 18, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 58,
        symbol: 'Ce',
        name: 'Cerium',
        atomicWeight: 140.12,
        electronsPerShell: [2, 8, 18, 19, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 59,
        symbol: 'Pr',
        name: 'Praseodymium',
        atomicWeight: 140.91,
        electronsPerShell: [2, 8, 18, 21, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 60,
        symbol: 'Nd',
        name: 'Neodymium',
        atomicWeight: 144.24,
        electronsPerShell: [2, 8, 18, 22, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 61,
        symbol: 'Pm',
        name: 'Promethium',
        atomicWeight: 145,
        electronsPerShell: [2, 8, 18, 23, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 62,
        symbol: 'Sm',
        name: 'Samarium',
        atomicWeight: 150.36,
        electronsPerShell: [2, 8, 18, 24, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 63,
        symbol: 'Eu',
        name: 'Europium',
        atomicWeight: 151.96,
        electronsPerShell: [2, 8, 18, 25, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 64,
        symbol: 'Gd',
        name: 'Gadolinium',
        atomicWeight: 157.25,
        electronsPerShell: [2, 8, 18, 25, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 65,
        symbol: 'Tb',
        name: 'Terbium',
        atomicWeight: 158.93,
        electronsPerShell: [2, 8, 18, 27, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 66,
        symbol: 'Dy',
        name: 'Dysprosium',
        atomicWeight: 162.5,
        electronsPerShell: [2, 8, 18, 28, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 67,
        symbol: 'Ho',
        name: 'Holmiun',
        atomicWeight: 164.93,
        electronsPerShell: [2, 8, 18, 29, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 68,
        symbol: 'Er',
        name: 'Erbium',
        atomicWeight: 167.26,
        electronsPerShell: [2, 8, 18, 30, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 69,
        symbol: 'Tm',
        name: 'Thulium',
        atomicWeight: 168.93,
        electronsPerShell: [2, 8, 18, 31, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 70,
        symbol: 'Yb',
        name: 'Ytterbium',
        atomicWeight: 173.05,
        electronsPerShell: [2, 8, 18, 32, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 71,
        symbol: 'Lu',
        name: 'Lutetium',
        atomicWeight: 174.97,
        electronsPerShell: [2, 8, 18, 32, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.LANTHANIDE
    },
    {
        atomicNumber: 72,
        symbol: 'Hf',
        name: 'Hafnium',
        atomicWeight: 178.49,
        electronsPerShell: [2, 8, 18, 32, 10, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 73,
        symbol: 'Ta',
        name: 'Tantalum',
        atomicWeight: 180.9479,
        electronsPerShell: [2, 8, 18, 32, 11, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 74,
        symbol: 'W',
        name: 'Tungsten',
        atomicWeight: 183.84,
        electronsPerShell: [2, 8, 18, 32, 12, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 75,
        symbol: 'Re',
        name: 'Rhenium',
        atomicWeight: 186.21,
        electronsPerShell: [2, 8, 18, 32, 13, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 76,
        symbol: 'Os',
        name: 'Osmium',
        atomicWeight: 190.23,
        electronsPerShell: [2, 8, 18, 32, 14, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 77,
        symbol: 'Ir',
        name: 'Iridium',
        atomicWeight: 192.22,
        electronsPerShell: [2, 8, 18, 32, 15, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 78,
        symbol: 'Pt',
        name: 'Platinum',
        atomicWeight: 195.08,
        electronsPerShell: [2, 8, 18, 32, 15, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 79,
        symbol: 'Au',
        name: 'Gold',
        atomicWeight: 196.97,
        electronsPerShell: [2, 8, 18, 32, 18, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 80,
        symbol: 'Hg',
        name: 'Mercury',
        atomicWeight: 200.59,
        electronsPerShell: [2, 8, 18, 32, 18, 2],
        stateOfMatter: State.LIQUID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 81,
        symbol: 'Tl',
        name: 'Thallium',
        atomicWeight: 204.38,
        electronsPerShell: [2, 8, 18, 32, 18, 3],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 82,
        symbol: 'Pb',
        name: 'Lead',
        atomicWeight: 207.2,
        electronsPerShell: [2, 8, 18, 32, 18, 4],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 83,
        symbol: 'Bi',
        name: 'Bismuth',
        atomicWeight: 208.98,
        electronsPerShell: [2, 8, 18, 32, 18, 5],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 84,
        symbol: 'Po',
        name: 'Polonium',
        atomicWeight: 209,
        electronsPerShell: [2, 8, 18, 32, 18, 6],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 85,
        symbol: 'At',
        name: 'Astatine',
        atomicWeight: 210,
        electronsPerShell: [2, 8, 18, 32, 18, 7],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.METALLOID
    },
    {
        atomicNumber: 86,
        symbol: 'Rn',
        name: 'Radon',
        atomicWeight: 222,
        electronsPerShell: [2, 8, 18, 32, 18, 8],
        stateOfMatter: State.GAS,
        subcategory: Subcategory.NOBLE_GAS
    },
    {
        atomicNumber: 87,
        symbol: 'Fr',
        name: 'Francium',
        atomicWeight: 223,
        electronsPerShell: [2, 8, 18, 32, 18, 8, 1],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALI_METAL
    },
    {
        atomicNumber: 88,
        symbol: 'Ra',
        name: 'Radium',
        atomicWeight: 226,
        electronsPerShell: [2, 8, 18, 32, 18, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ALKALINE_EARTH_METAL
    },
    {
        atomicNumber: 89,
        symbol: 'Ac',
        name: 'Actinium',
        atomicWeight: 227,
        electronsPerShell: [2, 8, 18, 32, 18, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 90,
        symbol: 'Th',
        name: 'Thorium',
        atomicWeight: 232.04,
        electronsPerShell: [2, 8, 18, 32, 18, 10, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 91,
        symbol: 'Pa',
        name: 'Protactinium',
        atomicWeight: 231.04,
        electronsPerShell: [2, 8, 18, 32, 20, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 92,
        symbol: 'U',
        name: 'Uranium',
        atomicWeight: 238.03,
        electronsPerShell: [2, 8, 18, 32, 21, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 93,
        symbol: 'Np',
        name: 'Neptunium',
        atomicWeight: 237,
        electronsPerShell: [2, 8, 18, 32, 22, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 94,
        symbol: 'Pu',
        name: 'Plutonium',
        atomicWeight: 244,
        electronsPerShell: [2, 8, 18, 32, 24, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 95,
        symbol: 'Am',
        name: 'Americium',
        atomicWeight: 243,
        electronsPerShell: [2, 8, 18, 32, 25, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 96,
        symbol: 'Cm',
        name: 'Curium',
        atomicWeight: 247,
        electronsPerShell: [2, 8, 18, 32, 25, 9, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 97,
        symbol: 'Bk',
        name: 'Berkelium',
        atomicWeight: 247,
        electronsPerShell: [2, 8, 18, 32, 27, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 98,
        symbol: 'Cf',
        name: 'Californium',
        atomicWeight: 251,
        electronsPerShell: [2, 8, 18, 32, 28, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 99,
        symbol: 'Es',
        name: 'Einsteinium',
        atomicWeight: 252,
        electronsPerShell: [2, 8, 18, 32, 29, 8, 2],
        stateOfMatter: State.SOLID,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 100,
        symbol: 'Fm',
        name: 'Fermium',
        atomicWeight: 257,
        electronsPerShell: [2, 8, 18, 32, 30, 8, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 101,
        symbol: 'Md',
        name: 'Mendelevium',
        atomicWeight: 258,
        electronsPerShell: [2, 8, 18, 32, 31, 8, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 102,
        symbol: 'No',
        name: 'Nobelium',
        atomicWeight: 259,
        electronsPerShell: [2, 8, 18, 32, 32, 8, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 103,
        symbol: 'Lr',
        name: 'Lawrencium',
        atomicWeight: 266,
        electronsPerShell: [2, 8, 18, 32, 32, 8, 3],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.ACTINIDE
    },
    {
        atomicNumber: 104,
        symbol: 'Rf',
        name: 'Rutherfordium',
        atomicWeight: 267,
        electronsPerShell: [2, 8, 18, 32, 32, 10, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 105,
        symbol: 'Db',
        name: 'Dubnium',
        atomicWeight: 268,
        electronsPerShell: [2, 8, 18, 32, 32, 11, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 106,
        symbol: 'Sg',
        name: 'Seaborgium',
        atomicWeight: 269,
        electronsPerShell: [2, 8, 18, 32, 32, 12, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 107,
        symbol: 'Bh',
        name: 'Bohrium',
        atomicWeight: 270,
        electronsPerShell: [2, 8, 18, 32, 32, 13, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 108,
        symbol: 'Hs',
        name: 'Hassium',
        atomicWeight: 277,
        electronsPerShell: [2, 8, 18, 32, 32, 14, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.TRANSITION_METAL
    },
    {
        atomicNumber: 109,
        symbol: 'Mt',
        name: 'Meitnerium',
        atomicWeight: 278,
        electronsPerShell: [2, 8, 18, 32, 32, 15, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 110,
        symbol: 'Ds',
        name: 'Darmstadtium',
        atomicWeight: 281,
        electronsPerShell: [2, 8, 18, 32, 32, 17, 1],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 111,
        symbol: 'Rg',
        name: 'Roentgenium',
        atomicWeight: 282,
        electronsPerShell: [2, 8, 18, 32, 32, 17, 1],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 112,
        symbol: 'Cn',
        name: 'Copernicium',
        atomicWeight: 285,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 2],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.POST_TRANSITION_METAL
    },
    {
        atomicNumber: 113,
        symbol: 'Nh',
        name: 'Nihonium',
        atomicWeight: 286,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 3],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 114,
        symbol: 'Fl',
        name: 'Flerovium',
        atomicWeight: 289,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 4],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 115,
        symbol: 'Mc',
        name: 'Moscovium',
        atomicWeight: 290,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 5],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 116,
        symbol: 'Lv',
        name: 'Livermorium',
        atomicWeight: 293,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 6],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 117,
        symbol: 'Ts',
        name: 'Tennessine',
        atomicWeight: 294,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 7],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
    {
        atomicNumber: 118,
        symbol: 'Og',
        name: 'Oganesson',
        atomicWeight: 294,
        electronsPerShell: [2, 8, 18, 32, 32, 18, 8],
        stateOfMatter: State.UNKNOWN,
        subcategory: Subcategory.UNKNOWN
    },
];
