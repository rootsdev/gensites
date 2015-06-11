/**
 * UMD load definition that supports AMD, CommonJS and browser globals.
 * https://github.com/umdjs/umd/blob/992cc0d071b7ebcd7feaad2a5349bdbeab09a0fe/commonjsStrict.js
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals
    factory((root.gensites = {}), root.b);
  }
}(this, function (exports) {
  
  // Now we can get down to business
  
  exports.version = '0.1.0';
  
  exports.sites = [
    {
      id: 'americanancestors',
      name: 'AmericanAncestors.org',
      url: 'http://www.americanancestors.org',
      descriptions: { 
        en: 'AmericanAncestors.org is the New England Historic Genealogical Society&#39;s portal to America, providing a wealth of resources for family history research.  We provide expertise and research in nearly all aspects of genealogy, from seventeenth-century colonial New England through twentieth-first-century immigration research.'
      }
    },
    {
      id: 'ancestry',
      name: 'Ancestry.com',
      url: 'http://ancestry.com',
      descriptions: { 
        en: 'Discover your family history and start your family tree. Try free and access billions of genealogy records including Census, SSDI & Military records.'
      }
    },
    {
      id: 'archives',
      name: 'Archives',
      url: 'http://www.archives.com',
      descriptions: { 
        en: 'Trace your genealogy and family tree to learn more about your family\'s history.'
      }
    },
    {
      id: 'billiongraves',
      name: 'BillionGraves',
      url: 'http://billiongraves.com',
      descriptions: { 
        en: 'Collect photos of the headstones in your local cemetery with our iPhone/Android camera app. Then upload the mapped-out photos here.'
      }
    },
    {
      id: 'chroniclingamerica',
      name: 'Chronicling America',
      url: 'http://chroniclingamerica.loc.gov',
      descriptions: { 
        en: 'Search America\'s historic newspaper pages from 1836-1922 or use the U.S. Newspaper Directory to find information about American newspapers published between 1690-present.'
      }
    },
    {
      id: 'familysearch',
      name: 'FamilySearch',
      url: 'https://familysearch.org',
      descriptions: { 
        en: 'Discover your family history. Explore the world’s largest collection of free family trees, genealogy records and resources.'
      }
    },
    {
      id: 'findagrave',
      name: 'Find A Grave',
      url: 'http://www.findagrave.com',
      descriptions: { 
        en: "Find A Grave is a free resource for finding the final resting places of famous folks, friends and family members. With millions of names, it's an invaluable tool for genealogist and history buffs. Find A Grave memorials are rich with content, including dates, photos and bios. You can even leave 'virtual flowers' on the memorials you visit to complete the online cemetery experience. Find A Grave also contains listings for thousands of celebrity graves, making it the premier online destination for tombstone tourists."
      }
    },
    {
      id: 'findmypast.co.uk',
      name: 'findmypast.co.uk',
      url: 'http://www.findmypast.co.uk',
      descriptions: { 
        en: 'Trace your ancestry and build a family tree by researching extensive birth records, census data, obituaries and more with findmypast.'
      }
    },
    {
      id: 'findmypast.com',
      name: 'findmypast.com',
      url: 'http://www.findmypast.com',
      descriptions: { 
        en: 'Trace your ancestry and build a family tree by researching extensive birth records, census data, obituaries and more with findmypast.'
      }
    },
    {
      id: 'fold3',
      name: 'fold3',
      url: 'http://www.fold3.com',
      descriptions: { 
        en: 'Fold3 is the web\'s premier collection of original US military records, including many from the US National Archives.'
      }
    },
    {
      id: 'genealogieonline',
      name: 'Genealogie Online',
      url: 'http://www.genealogieonline.nl',
      descriptions: { 
        en: 'Publish your genealogical information and images on the Internet, it\'s easy! Over 25 million ancestors published and searchable.'
      }
    }
  ];
  
}));