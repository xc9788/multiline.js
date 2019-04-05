# updated multiline.js

```js
var str = '' +
"<!doctype html>" +
"<html>" +
"	<head>" +
"		<title>" + title + "</title>" +
"	</head>" +
"	<body>" +
"		<h1>Hello " + name + ", I'm " + age + " years old. </h1>" +
"	</body>" +
"</html>" +
";
```

### After
```html
<multiline id="multiline-test">
	<p>{{a.test}}</p><code>{{b}}</code>
</multiline>
```

```js
document.body.append(multiline('multiline-test', {a: {test: 'this is test'}, b: 'good job'}))
```