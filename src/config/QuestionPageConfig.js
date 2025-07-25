const questions = [
  {
    questionNumber: 1,
    positions: {
      leftTop:    { label: 'COBRA ARMS',       value: 'COBRA ARMS' },
      rightTop:   { label: 'SPIKY CROWN',      value: 'SPIKY CROWN' },
      leftBottom: { label: 'CHARD WINGS',      value: 'CHARD WINGS' },
      rightBottom:{ label: 'ROBOTIC HEAD',     value: 'ROBOTIC HEAD' }
    }
  },
  {
    questionNumber: 2,
    positions: {
      leftTop:    { label: 'BAT OR BUTTERFLY', value: 'BAT OR BUTTERFLY' },
      rightTop:   { label: 'CRUSHED BODY',     value: 'CRUSHED BODY' },
      leftBottom: { label: 'SHARP PLIERS',     value: 'SHARP PLIERS' },
      rightBottom:{ label: 'DRAGON SNOUT',     value: 'DRAGON SNOUT' }
    }
  },
  {
    questionNumber: 3,
    positions: {
      leftTop:    { label: 'BODY PARTS',       value: 'BODY PARTS' },
      rightTop:   { label: 'DOG FACE',         value: 'DOG FACE' },
      leftBottom: { label: 'MIRROR DANCERS',   value: 'MIRROR DANCERS' },
      rightBottom:{ label: 'TWO ALIENS',       value: 'TWO ALIENS' }
    }
  },
  {
    questionNumber: 4,
    positions: {
      leftTop:    { label: 'BLOODY HANDS',     value: 'BLOODY HANDS' },
      rightTop:   { label: 'TWO STAGS',        value: 'TWO STAGS' },
      leftBottom: { label: 'BURNING FOREST',   value: 'BURNING FOREST' },
      rightBottom:{ label: 'MELTING CANDLE',   value: 'MELTING CANDLE' }
    }
  },
  {
    questionNumber: 5,
    positions: {
      leftTop:    { label: 'FEMALE TORSO',     value: 'FEMALE TORSO' },
      rightTop:   { label: 'INK STAIN',        value: 'INK STAIN' },
      leftBottom: { label: 'BUTTERFLY WINGS',  value: 'BUTTERFLY WINGS' },
      rightBottom:{ label: 'BONE ARMOR',       value: 'BONE ARMOR' }
    }
  },
  {
    questionNumber: 6,
    positions: {
      leftTop:    { label: 'BURSTING BOMB',    value: 'BURSTING BOMB' },
      rightTop:   { label: 'BLOODY SPINE',     value: 'BLOODY SPINE' },
      leftBottom: { label: 'TWO ELEPHANTS',    value: 'TWO ELEPHANTS' },
      rightBottom:{ label: 'BENDING CLOWNS',   value: 'BENDING CLOWNS' }
    }
  },
  {
    questionNumber: 7,
    positions: {
      leftTop:    { label: 'GORILLA FIGURE',   value: 'GORILLA FIGURE' },
      rightTop:   { label: 'BATTLE MASK',      value: 'BATTLE MASK' },
      leftBottom: { label: 'MUSCULAR CHEST',   value: 'MUSCULAR CHEST' },
      rightBottom:{ label: 'BEETLE SKELETON',  value: 'BEETLE SKELETON' }
    }
  },
  {
    questionNumber: 8,
    positions: {
      leftTop:    { label: 'WAR EMBLEM',       value: 'WAR EMBLEM' },
      rightTop:   { label: 'MELTED SKULLS',    value: 'MELTED SKULLS' },
      leftBottom: { label: 'BAT WINGS',        value: 'BAT WINGS' },
      rightBottom:{ label: 'HUMAN PELVIS',     value: 'HUMAN PELVIS' }
    }
  }
];

export function getQuestionConfig(num) {
  return questions.find((q) => q.questionNumber === num)
}

export default questions
