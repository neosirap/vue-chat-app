const messages = [
  'Do we have meeting today?',
  'I don\'t know',
  'the last time I tried this the monkey didn\'t survive. Let\'s hope it works better this time.',
  '😤 I am Spartacus',
  'who brought the gifts 🎁 ?',
  'who\'s birthday is it?',
  'not me',
  'someone said something about cake? 🍰🎂',
  'I don\'t know why. Just move on.',
  'third time\'s a charm',
  'testing in production... yolo',
  '🎉 beer friday, get the snacks',
  'deploying the new features to staging',
  '🍰 a piece of cake?'
]

export default function() {
  return messages[Math.floor(Math.random() * messages.length)]
}
