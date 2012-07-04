describe("word", function() {
	

	beforeEach(function() {
		
	});

	afterEach(function() {
		
	});
	
	it("finds a word if its all we have", function() {
		w = new WordSearch("abacate")
		w.add2dictionary("abacate")

		expect(w.mark([0,0],[0,6])).toBe(true)
	});


	it("", function() {
		w = new WordSearch("abacatecasasssscarro")
		w.add2dictionary("abacate")

		expect(w.mark([0,0],[0,5])).toBe(false)
	});
	
});