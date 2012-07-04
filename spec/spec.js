describe("word", function() {
	

	beforeEach(function() {
		
	});

	afterEach(function() {
		
	});
	
	it("finds a word if its all we have", function() {
		w = new WordSearch(["abacateandcarro"])
		w.add2dictionary("abacate")
		w.add2dictionary("carro")

		expect(w.mark([0,0],[0,6])).toBe(true)
		expect(w.mark([0,10],[0,14])).toBe(true)
	});


	it("rejcts when selection is not a word", function() {
		w = new WordSearch(["abacateandcarro"])
		w.add2dictionary("abacate")
		w.add2dictionary("carro")

		expect(w.mark([0,0],[0,5])).toBe(false)
		expect(w.mark([0,11],[0,14])).toBe(false)
	});


	it("another line in the matrix", function() {
		w = new WordSearch(["abacateandcarro","cafeandsometea"])
		w.add2dictionary("cafe")
		w.add2dictionary("tea")

		expect(w.mark([1,0],[1,3])).toBe(true)
		expect(w.mark([1,11],[1,13])).toBe(true)
	});


	
});
