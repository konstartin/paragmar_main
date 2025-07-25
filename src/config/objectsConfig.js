import warriorStatic from '@/assets/3dobjects/warrior_static.glb?url';
import warriorDynamic from '@/assets/3dobjects/warrior.glb?url';
//import animalStatic from '@/assets/3dobjects/animal_static.glb';
import animalDynamic from '@/assets/3dobjects/animal.glb?url';
import caretakerStatic from '@/assets/3dobjects/caretaker_static.glb?url';
import caretakerDynamic from '@/assets/3dobjects/caretaker.glb?url';
import divaStatic from '@/assets/3dobjects/diva_static.glb?url';
import divaDynamic from '@/assets/3dobjects/diva.glb?url';
import maskStatic from '@/assets/3dobjects/mask_static.glb?url';
import maskDynamic from '@/assets/3dobjects/mask.glb?url';
import rebelStatic from '@/assets/3dobjects/rebel_static.glb?url';
import rebelDynamic from '@/assets/3dobjects/rebel.glb?url';
import rulerStatic from '@/assets/3dobjects/ruler_static.glb?url';
import rulerDynamic from '@/assets/3dobjects/ruler.glb?url';
import voidStatic from '@/assets/3dobjects/void_static.glb?url';
import voidDynamic from '@/assets/3dobjects/void.glb?url';
import childStatic from '@/assets/3dobjects/test.glb?url';
import childDynamic from '@/assets/3dobjects/testMoving.glb?url';

const objectsData = {
  eternal_child: {
    title: 'The Eternal Child',
    clothingName: 'Childhood Echo', // Display name for clothing
    id: '[child_hood//1234]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Eternal\n Child: playful spirit, fluid curiosity, and gentle wonder.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: childStatic,
    dynamicObjectUrl: childDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  warrior: {
    title: 'The Warrior',
    clothingName: 'Warrior Frame', // Display name for clothing
    id: '[warrior//0589]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Warrior: strength, determination, and unwavering courage.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: warriorStatic,
    dynamicObjectUrl: warriorDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  animal: {
    title: 'The Animal',
    clothingName: 'Animal Instinct', // Display name for clothing
    id: '[animal//0590]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Animal: primal instincts, natural flow, and untamed spirit.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: warriorStatic, // Using warrior static as placeholder
    dynamicObjectUrl: animalDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  mask: {
    title: 'The Mask',
    clothingName: 'Masked Veil', // Display name for clothing
    id: '[mask//0591]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Masked: mystery, transformation, and hidden depths.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: maskStatic,
    dynamicObjectUrl: maskDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  ruler: {
    title: 'The Ruler',
    clothingName: 'Ruler\'s Spine', // Display name for clothing
    id: '[ruler//0592]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Ruler: authority, control, and commanding presence.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: rulerStatic,
    dynamicObjectUrl: rulerDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  Voids: {
    title: 'The Void',
    clothingName: 'Voidskin', // Display name for clothing
    id: '[void//0593]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Void: emptiness, potential, and infinite possibility.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: voidStatic,
    dynamicObjectUrl: voidDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  rubel: {
    title: 'The Rebel',
    clothingName: 'Rebel Cut', // Display name for clothing
    id: '[rebel//0594]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Rebel: defiance, independence, and revolutionary spirit.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: rebelStatic,
    dynamicObjectUrl: rebelDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  diva: {
    title: 'The Diva',
    clothingName: 'Diva Bloom', // Display name for clothing
    id: '[diva//0595]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Diva: glamour, confidence, and magnetic allure.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: divaStatic,
    dynamicObjectUrl: divaDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  caretaker: {
    title: 'The Caretaker',
    clothingName: 'Caretaker Cocoon', // Display name for clothing
    id: '[caretaker//0596]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Caretaker: nurturing, protection, and healing embrace.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: caretakerStatic,
    dynamicObjectUrl: caretakerDynamic,
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },
};

/**
 * Retrieves all data for a specific object by its key name.
 * @param {string} objectName - The key name of the object (e.g., 'warrior').
 * @returns {object|null} The object's data or null if not found.
 */
export const getObjectData = (objectName) => {
  return objectsData[objectName] || null;
};

/**
 * Gets pricing information for a specific object
 * @param {string} objectName - The key name of the object
 * @returns {object|null} The price object or null if not found
 */
export const getObjectPrice = (objectName) => {
  const objectData = getObjectData(objectName);
  return objectData?.price || null;
};

/**
 * Gets clothing display name for a specific object
 * @param {string} objectName - The key name of the object
 * @returns {string|null} The clothing name or null if not found
 */
export const getClothingName = (objectName) => {
  const objectData = getObjectData(objectName);
  return objectData?.clothingName || null;
};

/*
'FIBER GRID': {
    'LOOSE FLOW': 'animal',
    'PIERCING FORM': 'warrior',
    'SOFT CLUSTER': 'eternal_child',
  },
  'CORAL FRAME': {
    'LOOSE FLOW': 'rubel',
    'PIERCING FORM': 'diva',
    'SOFT CLUSTER': 'caretaker',
  },
  'SKELTAL BLOOM': {
    'LOOSE FLOW': 'mask',
    'PIERCING FORM': 'ruler',
    'SOFT CLUSTER': 'Voids',
  },
  */