var chai = require('chai'),
    expect = require('chai').expect,
    gensites = require('./gensites');
    
chai.config.includeStack = true;

describe('gensites', function(){
  
  it('loads', function(){
    expect(gensites).to.exist;
  });
  
  // Don't test actual version, that's too much maintenance
  it('expose version', function(){
    expect(gensites.version).to.exist;
  });
  
  it('sites()', function(){
    expect(gensites.sites).to.exist;
    var sites = gensites.sites();
    for(var i = 0; i < sites.length; i++){
      validateSiteSchema(sites[i]);
    }
  });
  
  it('sites() returns a copy', function(){
    // Use splice to modify the returned array in place.
    // Delete all entries in the array.
    // Make sure we haven't modified the original sites list.
    var emptyList = gensites.sites().splice(0, Number.MAX_SAFE_INTEGER);
    expect(emptyList).to.have.length(0);
    expect(gensites.sites()).to.have.length.above(0);
  });
  
  it('site()', function(){
    validateSiteSchema(gensites.site('ancestry'));
  });
  
});

function validateSiteSchema(site){
  var siteErrorDescription = 'Error processing site ' + site.id + ': ';
  expect(site.id, siteErrorDescription + 'site.id').to.exist;
  expect(site.name, siteErrorDescription + 'site.name').to.exist;
  expect(site.url, siteErrorDescription + 'site.url').to.exist;
  expect(site.description, siteErrorDescription + 'site.description').to.exist;
  expect(site.description, siteErrorDescription + 'site.description contains en').to.have.any.keys('en');
}