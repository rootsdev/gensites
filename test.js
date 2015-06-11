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
  
  it('expose sites', function(){
    expect(gensites.sites).to.exist;
    for(var i = 0; i < gensites.sites.length; i++){
      validateSiteSchema(gensites.sites[i]);
    }
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