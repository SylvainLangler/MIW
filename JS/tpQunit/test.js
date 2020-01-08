QUnit.test('md3()', function (assert) {
    assert.ok(md3(6));
})

QUnit.test('surface()', function(assert){
    assert.equal(surface("test"),-1);
    assert.equal(surface({"forme":"carre","cote":5}), 25);
    assert.equal(surface({"forme":"rectangle","longueur":5, "largeur":10}), 50);
    assert.equal(surface({"forme":"rectangle","longueur":null, "largeur":10}), -1);
    assert.equal(surface({"forme":"rectangle","longueur":5}), -1);
    assert.equal(surface({"forme":"cercle","rayon":5}), 78.54);
    assert.equal(surface({"forme":"carre", "cote":"yes"}), -1);
    assert.equal(surface(100), -1);
})