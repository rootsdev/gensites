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
  
  var sitesList = [
    {
      id: 'americanancestors',
      name: 'AmericanAncestors.org',
      url: 'http://www.americanancestors.org',
      description: { 
        en: 'AmericanAncestors.org is the New England Historic Genealogical Society&#39;s portal to America, providing a wealth of resources for family history research.  We provide expertise and research in nearly all aspects of genealogy, from seventeenth-century colonial New England through twentieth-first-century immigration research.'
      }
    },
    {
      id: 'ancestry',
      name: 'Ancestry.com',
      url: 'http://ancestry.com',
      description: { 
        en: 'Discover your family history and start your family tree. Try free and access billions of genealogy records including Census, SSDI & Military records.'
      }
    },
    {
      id: 'archives',
      name: 'Archives',
      url: 'http://www.archives.com',
      description: { 
        en: 'Trace your genealogy and family tree to learn more about your family\'s history.'
      }
    },
    {
      id: 'billiongraves',
      name: 'BillionGraves',
      url: 'http://billiongraves.com',
      description: { 
        en: 'Collect photos of the headstones in your local cemetery with our iPhone/Android camera app. Then upload the mapped-out photos here.'
      }
    },
    {
      id: 'chroniclingamerica',
      name: 'Chronicling America',
      url: 'http://chroniclingamerica.loc.gov',
      description: { 
        en: 'Search America\'s historic newspaper pages from 1836-1922 or use the U.S. Newspaper Directory to find information about American newspapers published between 1690-present.'
      }
    },
    {
      id: 'familysearch',
      name: 'FamilySearch',
      url: 'https://familysearch.org',
      description: { 
        en: 'Discover your family history. Explore the world’s largest collection of free family trees, genealogy records and resources.'
      }
    },
    {
      id: 'findagrave',
      name: 'Find A Grave',
      url: 'http://www.findagrave.com',
      description: { 
        en: "Find A Grave is a free resource for finding the final resting places of famous folks, friends and family members. With millions of names, it's an invaluable tool for genealogist and history buffs. Find A Grave memorials are rich with content, including dates, photos and bios. You can even leave 'virtual flowers' on the memorials you visit to complete the online cemetery experience. Find A Grave also contains listings for thousands of celebrity graves, making it the premier online destination for tombstone tourists."
      }
    },
    {
      id: 'findmypast.co.uk',
      name: 'findmypast.co.uk',
      url: 'http://www.findmypast.co.uk',
      description: { 
        en: 'Trace your ancestry and build a family tree by researching extensive birth records, census data, obituaries and more with findmypast.'
      }
    },
    {
      id: 'findmypast.com',
      name: 'findmypast.com',
      url: 'http://www.findmypast.com',
      description: { 
        en: 'Trace your ancestry and build a family tree by researching extensive birth records, census data, obituaries and more with findmypast.'
      }
    },
    {
      id: 'fold3',
      name: 'fold3',
      url: 'http://www.fold3.com',
      description: { 
        en: 'Fold3 is the web\'s premier collection of original US military records, including many from the US National Archives.'
      }
    },
    {
      id: 'genealogieonline',
      name: 'Genealogie Online',
      url: 'http://www.genealogieonline.nl',
      description: { 
        en: 'Publish your genealogical information and images on the Internet, it\'s easy! Over 25 million ancestors published and searchable.'
      }
    },
    {
      id: 'genealogybank',
      name: 'GenealogyBank',
      url: 'http://www.genealogybank.com',
      description: {
        en: 'Search over 1 billion genealogy records to discover your family history. Research the largest digitized newspaper archive online to trace your family genealogy now!'
      }
    },
    {
      id: 'geneanet.en',
      name: 'Geneanet',
      url: 'http://en.geneanet.org',
      description: {
        en: 'Create your family tree. Share your family history on Geneanet.'
      }
    },
    {
      id: 'gengophers',
      name: 'Genealogy Gophers',
      url: 'https://www.gengophers.com',
      description: {
        en: 'Find your ancestors in 80,000 digital genealogy books. For free.'
      }
    },
    {
      id: 'geni',
      name: 'Geni',
      url: 'http://www.geni.com',
      description: {
        en: 'Create your family tree and invite relatives to share. Search 140 million profiles and discover new ancestors. Share photos, videos and more at Geni.com.'
      }
    },
    {
      id: 'google',
      name: 'Google Search',
      url: 'https://www.google.com',
      description: {
        en: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."
      }
    },
    {
      id: 'myheritage',
      name: 'MyHeritage',
      url: 'http://www.myheritage.com',
      description: {
        en: 'Create your family tree and discover your family history. Free genealogy software. Get automatic Smart Matches on over 2 billion profiles and share photos.'
      }
    },
    {
      id: 'newspapers',
      name: 'newspapers.com',
      url: 'http://www.newspapers.com',
      description: {
        en: 'Find historical newspapers from across the United States and beyond. Explore newspaper articles and clippings for help with genealogy, history and other research.'
      }
    },
    {
      id: 'nlatrove',
      name: 'NLA Trove',
      url: 'http://trove.nla.gov.au',
      description: {
        en: 'Trove: Find and get Australian resources. Books, images, historic newspapers, maps, archives and more.'
      }
    },
    {
      id: 'openarchives',
      name: 'Open Archives',
      url: 'https://openarch.nl',
      description: {
        en: 'Open Archives is a portal and aggregator of open historical data. Search genealogical data of open archives and automatically find linked records and additional information about people and context.'
      }
    },
    {
      id: 'usgenweb',
      name: 'USGenWeb Archives',
      url: 'http://www.usgwarchives.net',
      description: {
        en: 'Free genealogy and family history online made possible by the USGenWeb Project volunteers. Search free genealogy websites for your ancestors.'
      }
    },
    {
      id: 'werelate',
      name: 'WeRelate',
      url: 'http://www.werelate.org',
      description: {
        en: 'WeRelate is a free public-service wiki for genealogy sponsored by the Foundation for On-Line Genealogy in partnership with the Allen County Public Library. It has pages for over 2,692,000 profiles and growing.'
      }
    },
    {
      id: 'wikitree',
      name: 'WikiTree',
      url: 'http://www.wikitree.com',
      description: {
        en: 'A community of genealogists on a mission to connect the human family on one FREE and accurate tree using traditional genealogical sources and DNA testing.'
      }
    },
    {
      id: 'worldvitalrecords',
      name: 'WorldVitalRecords',
      url: 'http://www.worldvitalrecords.com',
      description: {
        en: 'Search for vital records here! Learn more about your family history and genealogy by searching through more than 5 billion records including vital records.'
      }
    }
    
    /* Site schema:
    {
      id: '',
      name: '',
      url: '',
      description: {
        en: ''
      }
    }
    */
  ];
  
  // Convert sites list into a map for easy access
  var sitesMap = {};
  for(var i = 0; i < sitesList.length; i++){
    var site = sitesList[i];
    sitesMap[site.id] = site;
  }
  
  /**
   * Get a specific site.
   */
  exports.site = function(siteId){
    return sitesMap[siteId];
  };
  
  /**
   * Get the full list of websites.
   * Return a shallow copy so that the user can mess with it as they like.
   */
  exports.sites = function(){
    return sitesList.slice();
  };
  
}));