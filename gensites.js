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
      description: ''
    },
    {
      id: 'ancestry',
      name: 'Ancestry.com',
      url: 'http://ancestry.com',
      description: 'Discover your family history and start your family tree. Try free and access billions of genealogy records including Census, SSDI & Military records.'
    },
    {
      id: 'archives',
      name: 'Archives',
      url: 'http://www.archives.com',
      description: ''
    },
    {
      id: 'billiongraves',
      name: 'BillionGraves',
      url: 'http://billiongraves.com',
      description: ''
    },
    {
      id: 'chroniclingamerica',
      name: 'Chronicling America',
      url: 'http://chroniclingamerica.loc.gov',
      description: '',
    },
    {
      id: 'familysearch',
      name: 'FamilySearch',
      url: 'https://familysearch.org',
      description: ''
    },
    {
      id: 'findagrave',
      name: 'Find A Grave',
      url: 'http://www.findagrave.com',
      description: ''
    },
    {
      id: 'findmypast.co.uk',
      name: 'findmypast.co.uk',
      url: 'http://www.findmypast.co.uk',
      description: ''
    },
    {
      id: 'findmypast.com',
      name: 'findmypast.com',
      url: 'http://www.findmypast.com',
      description: ''
    },
    {
      id: 'fold3',
      name: 'fold3',
      url: 'http://www.fold3.com',
      description: ''
    },
    {
      id: 'genealogieonline',
      name: 'Genealogie Online',
      url: 'http://www.genealogieonline.nl',
      description: ''
    }
  ];
  
}));