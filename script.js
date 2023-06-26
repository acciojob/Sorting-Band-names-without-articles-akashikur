//your code here
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

      function removeArticles(name) {
        const articles = ['a', 'an', 'the'];
        const words = name.split(' ');

        while (articles.includes(words[0].toLowerCase())) {
          words.shift();
        }

        return words.join(' ');
      }

      const sortedNames = bandNames
        .map(removeArticles)
        .sort((a, b) => a.localeCompare(b));

      const bandList = document.getElementById('band');
      sortedNames.forEach((name) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        bandList.appendChild(listItem);
      });
