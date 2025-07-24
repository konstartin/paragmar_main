import warriorStatic from '@/assets/3dobjects/test.glb?url';
import warriorDynamic from '@/assets/3dobjects/testMoving.glb?url';

const objectsData = {
  eternal_child: {
    title: 'Childhood Echo',
    id:'[child_hood//1234]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Eternal\n Child: playful spirit, fluid curiosity, and gentle wonder.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: warriorStatic,
    dynamicObjectUrl: warriorDynamic,
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

/*
'FIBER GRID': {
    'LOOSE FLOW': 'animal',
    'PIERCING FORM': 'warrior',
    'SOFT CLUSTER': 'eternal_child',
  },
  'CORAL FRAME': {
    'LOOSE FLOW': 'rebel',
    'PIERCING FORM': 'diva',
    'SOFT CLUSTER': 'caretaker',
  },
  'SKELTAL BLOOM': {
    'LOOSE FLOW': 'mask',
    'PIERCING FORM': 'ruler',
    'SOFT CLUSTER': 'void',
  },
  */