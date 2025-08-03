import warriorStatic from '../assets/3dobjects/warrior_static.glb?url';
import warriorDynamic from '../assets/3dobjects/warrior.glb?url';
//import animalStatic from '@/assets/3dobjects/animal_static.glb';
import animalDynamic from '../assets/3dobjects/animal.glb?url';
import caretakerStatic from '../assets/3dobjects/caretaker_static.glb?url';
import caretakerDynamic from '../assets/3dobjects/caretaker.glb?url';
import divaStatic from '../assets/3dobjects/diva_static.glb?url';
import divaDynamic from '../assets/3dobjects/diva.glb?url';
import maskStatic from '../assets/3dobjects/mask_static.glb?url';
import maskDynamic from '../assets/3dobjects/mask.glb?url';
import rebelStatic from '../assets/3dobjects/rebel_static.glb?url';
import rebelDynamic from '../assets/3dobjects/rebel.glb?url';
import rulerStatic from '../assets/3dobjects/ruler_static.glb?url';
import rulerDynamic from '../assets/3dobjects/ruler.glb?url';
import voidStatic from '../assets/3dobjects/void_static.glb?url';
import voidDynamic from '../assets/3dobjects/void.glb?url';
import childStatic from '../assets/3dobjects/eternial_child_static.glb?url';
import childDynamic from '../assets/3dobjects/eternal_child.glb?url';

// Video imports for final page backgrounds
import warriorVideo from '../assets/videos/warrior_back.mp4?url';
import animalVideo from '../assets/videos/animal_back.mp4?url';
import caretakerVideo from '../assets/videos/caretaker_back.mp4?url';
import childVideo from '../assets/videos/child_back.mp4?url';
import divaVideo from '../assets/videos/diva_back.mp4?url';
import maskVideo from '../assets/videos/mask_back.mp4?url';
import rebelVideo from '../assets/videos/rebel_back.mp4?url';
import rulerVideo from '../assets/videos/ruler_back.mp4?url';
import voidVideo from '../assets/videos/void_back.mp4?url';



const objectsData = {
  eternal_child: {
    title: 'The Eternal Child',
    clothingName: 'Childhood Echo', // Display name for clothing
    id: '[ETERNALCHILD//0162]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Eternal\n Child: playful spirit, fluid curiosity, and gentle wonder.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: childStatic,
    dynamicObjectUrl: childDynamic,
    finalVideo: childVideo,
    text1 : 'You were never here to grow up you were here to stay open. There’s a softness in you that resists the world’s hard edges. You feel everything — joy, pain, beauty as if it’s all brand new. ',
    text2 :'You trust too quickly, laugh too loudly, love too easily — and you don’t regret it.  You’ve been told to “toughen up,” but you were never meant to close. You wonder. You absorb. You glow. You find meaning in small things others rush past.' ,
    text3 : 'People may dismiss you, but they return to you when they forget how to feel. You are not childish — you are timeless. You are hope that keeps choosing to exist. You are bright, brave, and endlessly alive.', 
    
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
    finalVideo: warriorVideo,
    text1 : 'You were never built for comfort, you were built for fire. There’s a quiet storm inside you: calm on the outside, unstoppable at the core. You carry a natural instinct to rise, to protect, to push forward — even when it’s hard, even when no one sees.',
    text2 :'You feel deeply, but you don’t let it break you you let it shape you. Your strength doesn’t scream. It stands. It holds. It lasts You lead not with volume but with presence and integrity, With unshakable inner truth. ' ,
    text3 : 'People may not always understand you, but they feel you. You are the one who keeps going when others stop. You don’t fear challenges — you become the force that answers them. you are powerful, unwavering, and profoundly alive.', 
    
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
    finalVideo: animalVideo,
    text1 : 'You weren’t made to calculate you were made to feel. There’s a hunger in you that doesn’t wait for logic/permission.You sense people before they speak, read tension before it rises. You act from the gut — fast, raw, honest — without rehearsal.',
    text2 :'You’ve been judged for being “too much,” but you never apologize.You smell. You scan. You strike. You know when something’s off, even if no one else sees it.' ,
    text3 : 'People may call you impulsive, but they miss your precision. You are instinct with memory, emotion with muscle. You don’t perform — you respond. You are untamed, electric, and frighteningly alive.', 
   
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
    finalVideo: maskVideo,
    text1 : 'You learned early that being seen isn’t always safe. There’s a part of you that always scans the room before showing up. You don’t fake who you are — you just protect what’s real.',
    text2 :'You shift to match the moment, blend to keep peace, smile to survive. You’ve been everything others needed, sometimes forgot what you need. You adapt. You endure. You know how to hide in plain sight and still be felt.' ,
    text3 : 'You shift to match the moment, blend to keep peace, smile to survive. You’ve been everything others needed, sometimes forgot what you need. You adapt. You endure. You know how to hide in plain sight and still be felt.', 
   
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
    finalVideo: rulerVideo,
    text1 : 'You don’t chase control — you embody it. There’s a calm in you that makes others settle without knowing why. You don’t speak often, but when you do, the air changes. You don’t react to chaos — you realign it.',
    text2 :'You carry pressure like it was made for you, and maybe it was. You observe. You calculate. You decide. You don’t need a crown to lead — your presence is enough. People rely on you more than they admit, and you carry that weight quietly.' ,
    text3 : 'You are clarity when things get cloudy. You set the pace, hold the line, keep the structure standing. You don’t rule with fear — you lead with grounded knowing.', 
   
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  void: {
    title: 'The Void',
    clothingName: 'Voidskin', // Display name for clothing
    id: '[void//0593]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Void: emptiness, potential, and infinite possibility.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: voidStatic,
    dynamicObjectUrl: voidDynamic,
    finalVideo: voidVideo,
    text1 : 'You don’t disappear you withdraw. There’s a silence in you that’s louder than most people’s noise. You see everything, but rarely invite others into your world. You’re not cold you’re deep, and depth takes time to enter.',
    text2 :'You feel more than you show, and hold more than you speak. You drift. You observe. You absorb. You are the pause between moments, the shadow that still holds shape. People sense something in you, even if they can’t name it.' ,
    text3 : 'You don’t need attention, you need space. You’re not afraid of void — you understand it. You are presence without demand, intensity without sound. You don’t vanish — you echo. You are distant, rooted, and hauntingly alive.', 
   
    // Pricing information
    price: {
      usd: 155,
      crypto: 0.51,
      cryptoSymbol: 'ETH'
    },
  },

  rebel: {
    title: 'The Rebel',
    clothingName: 'Rebel Cut', // Display name for clothing
    id: '[rebel//0594]',
    description: 'This garment was born from your choices. When worn by\n your avatar, it activates the qualities of The Rebel: defiance, independence, and revolutionary spirit.',
    format: 'GLB, Animated',
    'technical specs': 'Polygons: 45,000, Textures: 2K PBR',
    staticObjectUrl: rebelStatic,
    dynamicObjectUrl: rebelDynamic,
    finalVideo: rebelVideo,
    text1 : 'You were never built to obey, you were born to disrupt. There’s a current in you that won’t sit still, a restlessness that knows better. You question what others accept, break what no longer fits.',
    text2 :'You’ve been told you’re difficult, but difficult is just another word for awake. You don’t fight to be loud you fight to be real. You resist. You confront, ignite. You are the tension that exposes the cracks' ,
    text3 : 'People may see rebellion, but underneath, it’s alignment. You carry truth like a spark, even when it costs comfort. You’re not reckless — you’re precise, just don’t play safe. You burn bridges not to destroy, but to light the way forward.', 
   
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
    finalVideo: divaVideo,
    text1 : 'You don’t take space — you become it. There’s a fire in you that dresses itself in beauty, in drama, in truth. You speak with your eyes, move like every step means something. You feel everything at full volume and dare to show it. ',
    text2 :'You’ve been called too much, but never let that make you less. You shine. You command. You ache. You wear your emotions like fabric — loud, layered, alive. People see the glamor, but rarely survive the depth and heat.' ,
    text3 : 'You don’t perform to please — you perform to express. You turn pain into elegance, vulnerability into art. You’re not asking to be seen you’re reminding the world to look. You are bold, intentional, and unmistakably alive.', 
   
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
    finalVideo: caretakerVideo,
    text1 : 'You don’t just feel — you carry. There’s a softness in you that chooses to stay open, even when it hurts. You listen in ways that make people feel heard before they speak.',
    text2 :'You notice what others miss — the sadness, the tired eyes. You give more than you take, and expect less than you deserve. You hold. You soothe. You protect. You offer warmth without recognition. People rest near you without knowing why.' ,
    text3 : 'You’ve been told you’re “too sensitive” but it’s your greatest strength. You are tenderness that refuses to quit. You love with intention and care with courage. You are not passive — you are deeply, defiantly gentle. You are steady, selfless, and profoundly alive', 
   
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

/**
 * Gets final video URL for a specific object
 * @param {string} objectName - The key name of the object
 * @returns {string|null} The video URL or null if not found
 */
export const getFinalVideo = (objectName) => {
  const objectData = getObjectData(objectName);
  return objectData?.finalVideo || null;
};