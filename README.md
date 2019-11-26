# sepyrot-js
JS implementation of the [sepyrot script](https://github.com/VonKavalier/sepyrot) I wrote

## How to use

1. First you'll need to import the `js` file (of course)
2. You'll then need to set 2 input `type="text"` (or 2 `textarea` if you want to use multiple line)
3. Then name them `sepyrot_input_clear` and `sepyrot_input_encoded` accordingly
4. Attribute the `sepyrot_encode()` and `sepyrot_decode()` functions however you want. On the example I set it to be when clicking on buttons

## Example form

```html
<div>
  <textarea name="sepyrot_input_clear"></textarea>
  <button onclick="sepyrot_encode()">Encode</button>
  <button onclick="sepyrot_decode()">Decode</button>
  <textarea name="sepyrot_input_encoded"></textarea>
</div>
```
