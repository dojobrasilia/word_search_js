describe("WordSearch()", function() {
	

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


	it("rejects when selection is not a word", function() {
		w = new WordSearch(["abacateandcarro"])
		w.add2dictionary("abacate")
		w.add2dictionary("carro")

		expect(w.mark([0,0],[0,5])).toBe(false)
		expect(w.mark([0,11],[0,14])).toBe(false)
	});


	it("handle words on other lines in the matrix", function() {
		w = new WordSearch(["abacateandcarro","cafeandsometea"])
		w.add2dictionary("cafe")
		w.add2dictionary("tea")

		expect(w.mark([1,0],[1,3])).toBe(true)
		expect(w.mark([1,11],[1,13])).toBe(true)
	});

	it("handle words on columns", function() {
		w = new WordSearch([
			"acacateandcarro",
			"cafeandsometea",
			"atandtasdasdsa",
			"atandtasdasdsa"])
		w.add2dictionary("cafe")
		w.add2dictionary("tea")
		w.add2dictionary("cat")
		w.add2dictionary("fa")
		expect(w.mark([0,1],[2,1])).toBe(true)
		expect(w.mark([1,2],[2,2])).toBe(true)
	});
	
	it("handle crosswords", function() {
		w = new WordSearch([
			"acacateandcarro",
			"cafeandsometeaa",
			"atandtasdasdsas",
			"atdndtasdasdsad"])
		w.add2dictionary("aaa")
		w.add2dictionary("and")
		expect(w.mark([0,0],[2,2])).toBe(true)
		expect(w.mark([1,4],[3,2])).toBe(true)
	});

	it("handle backwards words", function() {
		w = new WordSearch(["orrac"])
		w.add2dictionary("carro")
		expect(w.mark([0,0],[0,4])).toBe(true)
	});

	it("validate if coordinates are ok", function() {
		w = new WordSearch([
			"acacateandcarro",
			"cafeandsometeaa",
			"atandtasdasdsas",
			"atdndtasdasdsad"])
		w.add2dictionary("aaa")
		w.add2dictionary("and")
		expect(w.mark([0,0],[2,1])).toBe(false)
		
	});
});
