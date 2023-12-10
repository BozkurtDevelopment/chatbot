## Kullanım:
```js
const chatbot = require('@bozkurtdev/chatbot');

chatbot.add('Nasılsın?', 'İyiyim.')
chatbot.add('Adın ne?', 'Adım Bozkurt, senin?')

chatbot.addUnkownAnswer('Hayat nasıl?')
chatbot.addUnkownAnswer('Bugün gördüğün rüyayı anlatır mısın?')
chatbot.addUnkownAnswer('Az önce ne yaptın?')


chatbot.question('Nasılsın?') // İyiyim.
chatbot.question("Adın ne?") // Adım Bozkurt, senin?

chatbot.question("Nerelisin?") // Bugün gördüğün rüyayı anlatır mısın?
```

### ❓ Yardım ve Destek için: [discord.gg/2evpFX22TB](https://discord.gg/2evpFX22TB)