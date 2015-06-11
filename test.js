var expect = require('chai').expect,
    gensites = require('./gensites');

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
  expect(site.id).to.exist;
  expect(site.name).to.exist;
  expect(site.url).to.exist;
  expect(site.descriptions).to.exist;
  expect(site.descriptions).to.have.any.keys('en');
}