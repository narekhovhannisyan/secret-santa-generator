# secret-santa

## secretSanta(namesArray).

 * `namesArray` is an array containing grantees names.
 * Returns `Object`.

  ```javascript
    const secretSanta = require('secret-santa-generator')
    
    const namesArray = ['Narek', 'Gor', 'Gor K.', 'Sergey', 'Grig', 'Shav']

    const namesTable = secretSanta.buildSecretSantaTable(namesArray)
    // The result object.
     {
       'Narek': 'Gor K.',
       'Gor': 'Shav',
       'Gor K.': 'Grig',
       'Grig': 'Sergey',
       'Sergey': 'Narek',
       'Shav': 'Gor' 
     }
  ```
