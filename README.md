# gensites

JavaScript library containing metadata about genealogy websites. The original 
intent is to contain display information (site name, url, and description) for 
websites supported by [gensearch](https://github.com/rootsdev/gensearch)
and [genscrape](https://github.com/rootsdev/genscrape) but I'm sure we can come 
up with more uses for it.

Sites are exposed as `gensites.sites`. The schema is:

```js
{
  id: 'ancestry',
  name: 'Ancestry.com',
  url: 'http://ancestry.com',
  description: { 
    en: 'Discover your family history and start your family tree. Try free and access billions of genealogy records including Census, SSDI & Military records.'
  }
}
```

The current descriptions were pulled from their respective websites, either using
the meta description if it existed or some other description shown on the home page.